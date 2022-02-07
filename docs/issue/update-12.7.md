---
date: 2022/1/2 21:28
title: 主题从v1.12.2升级到最新版本的教程
stick: true
---

此教程只适用于从`v1.12.2`版本或者此版本以前的版本升级到`v1.12.7`版本的过程，如果只是在`package.json`文件中，修改每个依赖的版本号，然后运行`npm install`，可能会存在问题



## 1. 删除依赖

::: tip

因为`vuepress`从`2.0.0-beta.29`版本开始，便将默认的打包工具从webpack修改为vite,为了不影响使用，请删除`node_module`文件夹，还需要删除`package-lock.json`文件

![image-20220102221341040](https://ooszy.cco.vin/img/blog-note/image-20220102221341040.png)

:::



## 2. 安装最新依赖

然后你直接在命令行窗口中，运行下面命令，安装依赖，加上`-f`这个参数就是强制覆盖的意思

```sh
npm i vuepress-plugin-archive@1.1.2 -f
npm i vuepress-plugin-bubble@1.0.3 -f
npm i vuepress-plugin-coze@1.7.9 -f
npm i vuepress-plugin-player@1.1.6 -f 
npm i vuepress-theme-aurora@1.12.7 -f
npm i vuepress-webpack@2.0.0-beta.29 -f 
npm i vuepress@2.0.0-beta.29 -f
```



::: details ps

![image-20220102221619062](https://ooszy.cco.vin/img/blog-note/image-20220102221619062.png)

你可以直接将上面这些，全部复制，然后直接在命令行窗口中，粘贴就行，不用一条一条的张贴

:::



::: details 不推荐下面这种

```json
"vuepress": "2.0.0-beta.29",
"vuepress-plugin-archive": "1.1.2",
"vuepress-plugin-bubble": "1.0.3",
"vuepress-plugin-coze": "1.7.9",
"vuepress-plugin-player": "1.1.6",
"vuepress-theme-aurora": "1.12.7",
"vuepress-webpack": "2.0.0-beta.29"
```

上面这种修改`package.json`文件的依赖版本号，容易出问题，并不推荐这种方式

:::



## 3. 修改打包工具

因为vuepress在`2.0.0-beta.29`默认的打包工具是`vite`，但是`vuepress-plugin-coze`插件目前并不能使用`vite`，所以还需要将打包工具切换到`webpack`



### 安装vuepress-webpack

运行下面命令，安装`vuepress-webpack`

```sh
npm i vuepress-webpack@2.0.0-beta.29 -f 
```



### 修改config.js

进入到`docs/.vuepress/config.js`文件中，将下面配置项加入

```js
bundler: '@vuepress/bundler-webpack',
```

![image-20220102222804481](https://ooszy.cco.vin/img/blog-note/image-20220102222804481.png)





然后你现在就可以运行`npm run dev`试试



如果还是报错的话，你看一下`package-lock.json`文件里面的`vuepress`版本是不是`2.0.0-beta.29`

![image-20220102223156176](https://ooszy.cco.vin/img/blog-note/image-20220102223156176.png)