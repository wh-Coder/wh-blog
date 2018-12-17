# 跨域

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
            xhr.setRequestHeader('token', 'quanquanbunengshuo')
            xhr.withCredentials = true;
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