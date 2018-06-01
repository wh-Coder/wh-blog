![frp](../images/frp.png)

# frp

> frp 是一个可用于内网穿透的高性能的反向代理应用，支持 tcp, udp, http, https 协议。

## 使用

- [下载软件](https://github.com/fatedier/frp/releases) (mac使用darwin, 小米路由器3使用mipsle)

- 安装软件分为两部分：将 frps 及 frps.ini 放到具有公网 IP 的机器上；将 frpc 及 frpc.ini 放到处于内网环境的机器上。两个软件需要版本一致。

- 配置 frps.ini 执行 ```./frps -c ./frps.ini```

- 配置 frpc.ini 执行 ```./frpc -c ./frpc.ini```

- 后台运行

    - screen command

    - nohup command &

## 参考

[frp官方](https://github.com/fatedier/frp)

[一篇好博文](http://www.sunnyrx.com/2016/10/21/simple-to-use-frp/)
