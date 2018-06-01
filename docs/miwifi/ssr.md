# ssr

> 科学上网

## 步骤

- 查看服务器语言环境：```locale```

    出现类似下面的报错：
    ```
    locale: Cannot set LC_CTYPE to default locale: No such file or directory
    locale: Cannot set LC_MESSAGES to default locale: No such file or directory
    locale: Cannot set LC_ALL to default locale: No such file or directory
    ...
    ```
    需要下载语言包：```sudo locale-gen en_US.UTF-8``` 英文版本：en_US.UTF-8

- 文档介绍
    
    ```
    apt-get install python-pip
    pip install git+https://github.com/shadowsocks/shadowsocks.git@master
    ```
    但是这里作为一个新的服务器，执行前需要准备其他依赖
    ```
    apt-get update
    # git 的依赖
    apt-get install libcurl4-gnutls-dev libexpat1-dev gettext libz-dev libssl-dev
    apt-get install git
    ```
    除此之外还需要提醒，下载好 pip 后，到运行```pip install```前，需要重新进入服务器

- 开启并在后台运行

    ```
    sudo ssserver -p 443 -k password -m aes-256-cfb -d start
    ```

- 关闭

    ```
    sudo ssserver -d stop
    ```

## 参考

[shadowsocks](https://github.com/shadowsocks/shadowsocks/tree/master)

[修改locale](http://wiki.ubuntu.org.cn/%E4%BF%AE%E6%94%B9locale)

[安装git](https://git-scm.com/book/zh/v1/%E8%B5%B7%E6%AD%A5-%E5%AE%89%E8%A3%85-Git)
