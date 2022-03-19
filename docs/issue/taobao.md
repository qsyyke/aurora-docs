---
date: 2022/3/19 17:09
stick: true
---





# pickAlgorithm错误解决方法

如果你运行`npm i`或者`npm install`的过程中，出现下面这个错误，那么你可以按照下面的这个方式解决

![image-20220319170956424](https://picture.xcye.xyz/image-20220319170956424.png)

1. 先删除博客项目中的`node_modules`文件夹(如果该文件夹存在的话)

    ![image-20220319180528251](https://picture.xcye.xyz/image-20220319180528251.png)

2. 运行`npm cache clear --force`命令

3. 运行`npm config set registry https://registry.npmjs.org/`

    > 切换会默认npm镜像的原因是，有一个依赖，淘宝镜像中没有，所以需要换回默认镜像源

4. 待上面3步执行完成之后，运行`npm i`命令安装依赖，正常的话，应该是没有问题了，如果有问题的话，在群里问我



运行`npm i`或者`npm install`成功之后，界面和下图差不多，就可以直接运行`npm run dev`启动啦

![image-20220319180901728](https://picture.xcye.xyz/image-20220319180901728.png)





## 问题描述

![image-20220319171752911](https://picture.xcye.xyz/image-20220319171752911.png)

如果出现上面这个错误，你应该使用的是淘宝镜像，你需要切换回默认镜像，通过执行`npm config set registry https://registry.npmjs.org/`命令

这个我也不清楚，为何淘宝没有这个镜像，该依赖最后更新的时间为两年前，而且每个月下载的人还很多



