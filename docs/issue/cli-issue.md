---
date: 2021/9/26
---

# 脚手架安装报错

## **不是内部或外部命令**

你如果安装好`vuepress-theme-cli`之后，运行`aurora demo-blog`，控制台报下面这个错误

```sh
'aurora' 不是内部或外部命令，也不是可运行的程序
或批处理文件。
```



### Windows



1. 在cmd命令行窗口中，运行`npm root -g`查看全局安装路径

   ![image-20211127110241162](https://ooszy.cco.vin/img/blog-note/image-20211127110241162.png?x-oss-process=style/pictureProcess1)

2. 进入

   ![image-20211127110342527](https://ooszy.cco.vin/img/blog-note/image-20211127110342527.png?x-oss-process=style/pictureProcess1)

![image-20211127110725839](https://ooszy.cco.vin/img/blog-note/image-20211127110725839.png?x-oss-process=style/pictureProcess1)



现在就可以了





### Linux和mac

对于Linux和mac用户，因为通过npm全局安装的命令是存放在`node_global/bin`目录下的，解决这个问题的操作和Windows会存在区别

1. 查看全局安装位置

   你需要运行`npm root -g`查看全局安装命令

   ```sh
   [root@qsyyke-centos ~]# npm root -g
   /usr/local/node/node_global/lib/node_modules
   ```

   我这里是安装到`/usr/local/node/node_global/lib/node_modules`目录中，所以你需要将`/usr/local/node/node_global/bin`这个文件夹添加到环境变量中

2. 修改环境变量

   ```sh
   # Linux请执行下面这个命令
   vim /etc/profile
   
   # mac请执行下面命令
   vim ~/.bash_profile
   ```
   
   ​     
   
   我的配置如下
   
   ```sh
    export NODE=/usr/local/node/node-v16.13.1-linux-x64
    export NODE_BIN=/usr/local/node/node_global/bin
    export PATH=$NODE/bin:$NODE_BIN:$PATH
   ```
   
   
