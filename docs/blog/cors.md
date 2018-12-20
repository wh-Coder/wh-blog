# 跨域

> 如果两个页面的协议，端口（如果有指定）和域名都相同，则两个页面具有相同的源。 

熟悉而又陌生的报错

<font color="#dd0000">Access to XMLHttpRequest at 'xxx' from origin 'xxx' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.</font>


## 古老的jsonp

不受限的外部资源有：

script；link；img；video；object embed applet；font-face 有的浏览器允许, 有的禁止；frame

jsoop 就是利用 script 的特性

- fe

    ```js
    // 创建 Jsonp 类
    // 初始化时传入两个参数, url 是接口的url
    // cb 是对于接口返回的参数的处理
    function Jsonp(url, cb) {
        this.callbackName = 'jsonp_' + Date.now()
        this.cb = cb
        this.url = url
        this.init()
    }

    // 初始化方法 用于拼接 url
    Jsonp.prototype.init = function() {
        if(~this.url.indexOf('?')) {
            this.url = this.url + '&callback=' + this.callbackName
        } else {
            this.url = this.url + '?callback=' + this.callbackName
        }
        this.createCallback()
        this.createScript()
    }

    // 创建 script 标签, src 取接口请求的url
    Jsonp.prototype.createScript = function() {
        var script = document.createElement('script')
        script.src = this.url
        script.onload = function() {
            this.remove()
            // 删除 window 下定义的无用方法
            delete window[this.callbackName]
        }
        document.body.appendChild(script)
    }

    // 绑定回调函数
    Jsonp.prototype.createCallback = function() {
        window[this.callbackName] = this.cb
    }

    // 创建 jsonp 实例, 并指定回调函数
    new Jsonp('http://localhost:8888/', function(data) {
        console.log(data)
    })

    ```

- be

    ```js
    const http = require('http');
    // 新引入了 url 模块, 主要用于解析请求参数
    const url = require('url');

    const PORT = 8888;

    // 创建一个 http 服务
    const server = http.createServer((request, response) => {
        // 获取前端请求数据
        const queryObj = url.parse(request.url, true).query;
        // 这里把前端传来的 callback 字段作为后端返回的回调函数的函数名称
        response.end(`${queryObj.callback}({name: 'quanquan', friend: 'guiling'})`);
    });

    // 启动服务, 监听端口
    server.listen(PORT, () => {
        console.log('服务启动成功, 正在监听: ', PORT);
    });

    ```

## 需要后端支持的cors

主要是后端添加一些代码就可以了：

- be

    ```js
    const http = require('http');

    const PORT = 8888;

    // 创建一个 http 服务
    const server = http.createServer((request, response) => {
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'PUT');
        // 允许带 token
        // response.setHeader('Access-Control-Allow-Headers', 'token');
        // 允许带 cookie
        // response.setHeader('Access-Control-Allow-Credentials', true);

        response.end("{name: 'quanquan', friend: 'guiling'}");
    });

    // 启动服务, 监听端口
    server.listen(PORT, () => {
        console.log('服务启动成功, 正在监听: ', PORT);
    });

    ```

    koa 版本

    ```js
    const Koa = require('koa');
    const cors = require('@koa/cors');

    const app = new Koa();
    app.use(cors());

    app.use(async ctx => {
        ctx.body = 'Hello World';
    });

    app.listen(8888);
    ```



## nginx 反向代理

首先弄清楚代理，通俗点就是中介。有反向代理就有正向代理，那么这些代理都是什么呢？

- 正向代理

    VPN 就是个典型例子。国内无法直接访问 google，这时候可以在国内和 google 之间搭建一个国内可以访问并且也可以访问google的代理，所有请求先通过代理，再由代理请求google。这时候多个客户端都会被服务端认为是同一个，即多对一。

- 反向代理

    客服中心就是个典型的例子。用户和客服员之间在直接通话前，需要先通过总线分配，多个空闲的客服员等待连接，具体是哪一个就要看中间的代理分配。是一个一对多或者多对多的过程

我们可以利用 nginx 反向代理解决跨域，将前端页面的地址和服务端提供的 API 地址同时通过 nginx 代理转发

具体实现： 

- nginx

    ```conf
    # /usr/local/etc/nginx/servers/test.conf
    server {
        # 监听80端口号
        listen 7777;

        # 监听访问的域名
        # server_name a.com;

        # 根据访问路径配置
        location / {
            # 把请求转发到 http://127.0.0.1:9999
            proxy_pass http://127.0.0.1:9999;

            # 兼容websocket
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
        }

        # 监听根目录下的 /api 路径
        location /api/ {
            # 请求头中添加客户端 ip
            proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
            # 请求头中添加代理服务器 ip 到代理序列里边
            proxy_set_header   X-Real-IP        $remote_addr;
            # 请求头中添加客户端正在访问的 HOST
            proxy_set_header   Host             $host;
            
            # 把请求转发到 http://127.0.0.1:8888
            proxy_pass http://127.0.0.1:8888;
        }
    }
    ```

- fe

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>CORS 实现跨域</title>
    </head>
    <body>
        <h3>CORS 实现跨域</h3>

        <script>
            var xhr = new XMLHttpRequest()
            xhr.open('GET', 'http://localhost:7777/api/getFriend')
            xhr.onreadystatechange = function() {
                if(xhr.readyState === 4 && xhr.status === 200) {
                    console.log(xhr.responseText)
                    console.log(xhr.getAllResponseHeaders())
                }
            }
            xhr.send()
        </script>
    </body>
    </html>

    ```

- be

    ```js
    const http = require('http');

    const PORT = 8888;

    // 创建一个 http 服务
    const server = http.createServer((request, response) => {
        console.log(request.headers)
        response.end("{name: 'quanquan', friend: 'guiling'}");
    });

    // 启动服务, 监听端口
    server.listen(PORT, () => {
        console.log('服务启动成功, 正在监听: ', PORT);
    });


    ```

- nginx 使用

    - nginx -s load 重启

    - nginx -s stop 快速停止

    - 其他方式
        ps -ef | grep nginx
        kill -QUIT 主进程号 ：从容停止Nginx
        kill -TERM 主进程号 ：快速停止Nginx
        pkill -9 nginx ：强制停止Nginx

## 参考

[浏览器同源策源](https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy)

[掘金](https://juejin.im/post/5c0e6d606fb9a049f66bf246)
