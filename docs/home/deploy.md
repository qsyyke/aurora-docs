---
tag: [部署,deploy,Github Page,自定义域名]
date: 2021/12/10 20:50
---

# 部署

在部署之前，请先看一下[vuepress官方介绍](https://v2.vuepress.vuejs.org/zh/guide/deployment.html)，请先看一下[vuepress官方介绍](https://v2.vuepress.vuejs.org/zh/guide/deployment.html)，请先看一下[vuepress官方介绍](https://v2.vuepress.vuejs.org/zh/guide/deployment.html)，请先看一下[vuepress官方介绍](https://v2.vuepress.vuejs.org/zh/guide/deployment.html)，请先看一下[vuepress官方介绍](https://v2.vuepress.vuejs.org/zh/guide/deployment.html)，请先看一下[vuepress官方介绍](https://v2.vuepress.vuejs.org/zh/guide/deployment.html)...

在你部署到任意平台之前，请确保你已经运行`npm run build`命令了，此命令会自动将你博客编译成静态文件(`html,css,js,静态图片等`)，然后这些静态文件，会自动存放在`docs/.vuepress/dist`目录下，此目录是运行`npm run build`命令自动生成的，不需要你自己创建

![](https://picture.xcye.xyz/image-20211210204953034.png?x-oss-process=style/pictureProcess1)



## 部署到自己的服务器

如果你需要部署到自己的服务器，我已经安装了宝塔，如果你没安装宝塔，那么请先安装好宝塔面板,链接[宝塔linux面板，一键安装LAMP/LNMP/SSL/Tomcat (bt.cn)](https://www.bt.cn/download/linux.html)



![](https://picture.xcye.xyz/image-20211116091011851.png?x-oss-process=style/pictureProcess1)



![](https://picture.xcye.xyz/image-20211116091139240.png?x-oss-process=style/pictureProcess1)



![](https://picture.xcye.xyz/image-20211116091358145.png?x-oss-process=style/pictureProcess1)



![](https://picture.xcye.xyz/image-20211116091544820.png?x-oss-process=style/pictureProcess1)



![](https://picture.xcye.xyz/image-20211116091648397.png?x-oss-process=style/pictureProcess1)



![](https://picture.xcye.xyz/image-20211116091821466.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20211116092045376.png?x-oss-process=style/pictureProcess1)



![](https://picture.xcye.xyz/image-20211116092136984.png?x-oss-process=style/pictureProcess1)



![](https://picture.xcye.xyz/image-20211116092213963.png?x-oss-process=style/pictureProcess1)





![](https://picture.xcye.xyz/image-20211116092350381.png?x-oss-process=style/pictureProcess1)





::: tip 问题

1. 我使用域名或者ip建立站点之后，那个文件夹名并不是`aurora.xcye.xyz`

   > 这个文件夹名是根据你ip或者域名命名的



不推荐使用这种方式进行部署，麻烦

:::



## GitHub Pages



::: tip

Github pages就是会自动将你的静态文件托管在github，然后可以直接使用github提供的一个域名`<your github username>.github.io`或者使用你的自定义域名就行访问

在使用之前，请先看一下[vuepress官方介绍](https://v2.vuepress.vuejs.org/zh/guide/deployment.html)，请先看一下[vuepress官方介绍](https://v2.vuepress.vuejs.org/zh/guide/deployment.html)，请先看一下[vuepress官方介绍](https://v2.vuepress.vuejs.org/zh/guide/deployment.html)，请先看一下[vuepress官方介绍](https://v2.vuepress.vuejs.org/zh/guide/deployment.html)...

:::

在 `docs/.vuepress/config.js` 中设置正确的 `base`。

如果你打算发布到 `https://<USERNAME>.github.io/`，则可以省略这一步，因为 `base` 默认即是 `"/"`。

如果你打算发布到 `https://<USERNAME>.github.io/<REPO>/`（也就是说你的仓库在 `https://github.com/<USERNAME>/<REPO>`），则将 `base` 设置为 `"/<REPO>/"`。

1. 进入github，新建一个仓库，用于托管`npm run build`打包之后的HTML文件

    ![](https://picture.xcye.xyz/image-20210831133913906.png?x-oss-process=style/pictureProcess1)

    将`docs/.vuepress/dist`下的所有文件使用git命令push到该仓库中

    > 如何push？？
    >
    > 请点击[这里](https://cn.bing.com/search?q=git+push到github仓库&cvid=b51557dbd8cc44b190988babb925d3ee&aqs=edge..69i57j69i64.10400j0j1&pglt=163&FORM=ANNTA1&PC=U531)

2. 进入settings-->pages

    进行第二步之前，表示你已经将dist目录中的文件，已push到此仓库中

    ![](https://picture.xcye.xyz/image-20210831134813016.png?x-oss-process=style/pictureProcess1)

    ![](https://picture.xcye.xyz/image-20210831134956617.png?x-oss-process=style/pictureProcess1)

    然后你就可以点击上面的那个连接，进行访问了，现在就已经将打包后的静态文件部署到github page
    
    
    
    ::: details 哪个链接??
    
    ![](https://picture.xcye.xyz/image-20211116103319349.png?x-oss-process=style/pictureProcess1)
    
    :::



::: tip

第一次使用github pages，不推荐直接使用自定义域名，不推荐直接使用自定义域名，不推荐直接使用自定义域名，请先使用github提供的域名，能正确的访问到博客页面之后，再改成自定义域名

:::



### deploy.sh



> `下面的内容，请确保你已经能使用github提供的地址或者自定义域名访问到博客页面之后，在使用下面这种比较快速的方式`



在你的项目中，创建一个如下的 `deploy.sh` 文件（请自行判断去掉高亮行的注释）

```sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```



下面这个是使用自定义域名进行部署的`deploy.sh`文件

```sh
set -e

cd docs/.vuepress/dist
echo 'blog.cco.vin' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/qsyyke/blog.git master:gh-pages

cd -
```

::: tip

请自己看一下自己的github仓库地址，更改上面对应的值，比如`git push -f https://github.com/qsyyke/blog.git master:gh-pages`的地址，还有分支等

:::



然后进入到`package.json`文件中，输入以下内容到`scripts`

```json
"deploy": "bash deploy.sh"
```

> `请注意看一下这个.sh文件名是不是deploy.sh，如果不是，请改一下"deploy": "bash deploy.sh"，将后面的deploy.sh改成自己的.sh文件名就可以`



::: details 改变package.json文件之前?

![](https://picture.xcye.xyz/image-20211116104440846.png?x-oss-process=style/pictureProcess1)

:::



::: details 改变package.json文件之后

![](https://picture.xcye.xyz/image-20211116104605535.png?x-oss-process=style/pictureProcess1)

:::



> `为何你的package.json和我的不一样，package内容不需要和我的一模一样...`



然后你现在就可以运行`npm run deploy`命令，然后就会依次执行`npm run build`,进入dist内`git add . && git commit -m "..." && git push ... `，之后如果一切正常的话，你就可以在你github对应分支处看到dist目录下的所有内容



不能直接在比如vscode的终端处运行`npm run deploy`，否则会出现下面错误，执行此命令，你需要在cmd或者git的`Git Bash Here`

::: details  错误信息

![](https://picture.xcye.xyz/image-20211116105934737.png?x-oss-process=style/pictureProcess1)

:::

### 部署到自定义域名

部署到自定义域名也是一样的方法，只是需要在github的settings-->pages中，添加自定义域名就可以



#### 步骤

1. 到阿里云，腾讯云，或其他服务商处，申请一个域名，如果使用国内服务器，域名需备案

    > 如何申请?[点这里](https://cn.bing.com/search?q=如何申请域名&cvid=c0c1efa1ddc84c3dacba8acc079f915c&aqs=edge..69i57j0l4.5982j0j3&FORM=ANAB01&PC=U531)

2. 进入到仓库中的`Setting ---> Pages`

    ![](https://picture.xcye.xyz/image-20210831135358064.png?x-oss-process=style/pictureProcess1)

3. 如果出现下面这个，那就证明你没有为这个自定义域名，添加一个`CNAME`解析

    ![](https://picture.xcye.xyz/image-20211116110931450.png?x-oss-process=style/pictureProcess1)

    就表示，该`newblog.cco.vin`域名并没有添加一个CNAME解析，进入到域名解析处

    ![](https://picture.xcye.xyz/image-20210831135743656.png?x-oss-process=style/pictureProcess1)

    对newblog添加`CNAME`记录，指向`<user>.github.io.`就可以了

    > `我上面的这个域名解析面板在哪?`
    >
    > 我使用的是腾讯云，所以你进入腾讯云，点击对应域名后面解析，就会出现这个，如果你使用的是其他域名服务商，请点击下面链接，改一下服务商
    >
    > [点击这里，记得在搜索框中改一下内容](https://cn.bing.com/search?q=阿里云如何为域名添加CNAME解析&cvid=29db0c50b2574863ab82e0b0a603bfd9&aqs=edge..69i57.604425j0j4&FORM=ANAB01&PC=U531)



![](https://picture.xcye.xyz/image-20211116111632322.png?x-oss-process=style/pictureProcess1)





## Github Actions完成自动部署

如何使用Github Actions进行自动部署，请查看我自己写的[文章](https://aurora.xcye.xyz/home/deploy.html#Github%20Actions%E5%AE%8C%E6%88%90%E8%87%AA%E5%8A%A8%E9%83%A8%E7%BD%B2)，如果你觉得不够详细的话，可以再在搜索引擎中，搜索`vuepress github actions`关键字

推荐使用Github Actions完成自动部署，你只需要将站点中，除`node_modules,docs/.vuepress/.cache,docs/.vuepress/.temp,docs/.vuepress/dist`外的内容，push到你的仓库，然后简单设置下，就可以自动在github中，下载依赖，已经运行`npm run build`，从而完成自动部署，步骤为

### 获取token

![](https://picture.xcye.xyz/image-20211026232416988.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20211026232442304.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20211026232532647.png?x-oss-process=style/pictureProcess1)



![](https://picture.xcye.xyz/image-20211026232831517.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20211026232853598.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20211026232948093.png?x-oss-process=style/pictureProcess1)



### 上传到github

![](https://picture.xcye.xyz/image-20211026233551543.png?x-oss-process=style/pictureProcess1)

::: tip

这里你只需要上传`package.json`和`docs`就可以了，你也可以排除`docs/.vuepress/.cache,docs/.vuepress/.temp,docs/.vuepress/dist`文件

:::



![](https://picture.xcye.xyz/image-20211026233853901.png?x-oss-process=style/pictureProcess1)



然后将下面的内容，复制替换下图中的内容

![](https://picture.xcye.xyz/image-20211026234059132.png?x-oss-process=style/pictureProcess1)

```yaml
name: Build and Deploy
on: 
  push:
      branches:
        - main #push到哪个分支时触发自动部署，推荐main
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@master

    - name: vuepress-deploy
      uses: jenkey2011/vuepress-deploy@master
      env:
        ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
        TARGET_BRANCH: gh_pages
        BUILD_SCRIPT: npm install && npm run build
        BUILD_DIR: docs/.vuepress/dist
```





### 设置Actions secrets

![](https://picture.xcye.xyz/image-20211026234643018.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20211026234710492.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20211026234805318.png?x-oss-process=style/pictureProcess1)



然后你在本地或者github中，随便在`main`分支下，修改一个文件的内容，然后`git commit...`，`git push ...`后，你便可以看到已经开始运行了

![](https://picture.xcye.xyz/image-20211026235130337.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20211026235518279.png?x-oss-process=style/pictureProcess1)

只有这个状态变成绿色之后，才便是部署成功，如果红色，你可以看一下报错信息

你可以在`master`分支看一下，build之后的文件

![](https://picture.xcye.xyz/image-20211026235929559.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20211027000105500.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20211027000121171.png?x-oss-process=style/pictureProcess1)





## Vercle

除了使用上面方式进行托管你的博客外，我们还可以使用`vercel`进行部署，vercel和`github actions`很相似，都是通过将博客的所有必须文件（包括`package.json,docs`等）push到github的某个仓库仓库中，然后在vercel中创建一个项目，导入此仓库，之后的一切就交给`vercel`去做了



并且vercel还能够自动部署，如果你commit了新的内容，vercel监测到有新的`commit`之后，便会重新运行`npm run build`命令进行部署，你只需要将新的修改，从本地`push`到github便可以了（比如新增一篇文章），而不需要像`github pages`，`服务器部署`那样，每次新增文章，都需要在本地运行`npm run build`，然后再将`docs/.vuepress/dist`目录中的所有文件，上传到github或者服务器中才能完成博客新内容的改变



而且vercel还自带`cdn`加速，在速度上比使用通过`github pages`托管，通过`xxx.github.io/xxx`访问的速度快，除此以外，还可以自定义域名，可以使用我们自己的域名





### 使用

#### 需知

在这一步默认你已经在本地搭建好博客了，并且能够正常访问，如果本地访问出错的话，在vercel部署会失败



> 目前主题最新最新版是`v1.13.2`，我记得在`v1.13`版本以前，依赖没有锁住的时候，在vercel中部署会失败，如果你并没有使用最新版的主题或者博客目录中，不存在`npm-shrinkwrap.json`文件，那么你可以按照下面步骤锁定依赖版本号



::: warning

如果你博客目录中，存在`npm-shrinkwrap.json`文件(在`package.json`文件那里)，就不需要做下面这一步了，直接跳到[修改config.js](#修改config.js)位置便可以了



如果你博客目录中，存在`npm-shrinkwrap.json`文件(在`package.json`文件那里)，就不需要做下面这一步了，直接跳到[修改config.js](#修改config.js)位置便可以了

:::



1. 确保你博客在本地能够正常运行

    > 运行`npm run dev`后在浏览器中打开网页，能看到正常的画面，还有就是运行`npm run build`命令，能够成功

2. 如果上一步都ok的话，那么在命令行窗口中，运行``npm shrinkwrap``命令（就是你运行npm run dev那个位置）

    ![](https://picture.xcye.xyz/image-20220313211740939.png)

3. 然后就可以了



### 修改config.js

打开`docs/.vuepress/config.js`文件，在对应位置，添加下面内容

![](https://picture.xcye.xyz/image-20220313212229538.png)

```js
dest: "public",
```

> 此配置的作用就是，运行`npm run build`命令后，打包后的文件，将会放在`public`目录中，默认是`docs/.vuepress/dist`目录，此`public`目录和`docs`目录同级





### push到github

1. 新建一个`.gitignore`文件，将下面内容添加到此文件总

    ```
    /node_modules
    /.idea
    **/.cache
    docs/.vuepress/dist
    **/.temp
    /public
    ```

2. 然后就将你博客（包含docs,pageage.json等文件）push到github某个仓库中，这一步自己解决



![image-20220313212907442](/Users/aurora/Library/Application%20Support/typora-user-images/image-20220313212907442.png)



### vercel

#### 登录

进入[Vercel](https://vercel.com/login)官网，点击使用github登录

![](https://picture.xcye.xyz/image-20220313213046299.png)

![](https://picture.xcye.xyz/image-20220313214346948.png)



![](https://picture.xcye.xyz/image-20220313214549476.png)

![](https://picture.xcye.xyz/image-20220313214658063.png)

> 一定要设置上图这个，一定



![](https://picture.xcye.xyz/image-20220313214748416.png)

然后就等待部署，差不多两分钟左右，如果部署失败的话，截图在群里问我



![](https://picture.xcye.xyz/image-20220313214906771.png)

### 部署成功

![](https://picture.xcye.xyz/image-20220313215046556.png)

出现这个画面，就表示你已经部署成功了，现在点击那个`go to dashboard`就可以进入到控制面板中

![](https://picture.xcye.xyz/image-20220313215229071.png)



#### 简单使用

![](https://picture.xcye.xyz/image-20220313215322998.png)

点击这里，可以重新部署

![](https://picture.xcye.xyz/image-20220313215359234.png)

点击这里，可以设置自定义域名



### 测试

我最开始也说了，vercel可以监测到github中的commit记录，如果有新的commit记录的话，vercel就会自动重新部署，重新部署这一步不需要我们操作

我们直接在github上，随便修改一下，然后点击提交

![](https://picture.xcye.xyz/image-20220313215624690.png)

然后我们回到vercel中，便可以看到，已经有一个新的部署在执行了，等待部署成功，我们便可以在博客中刷新，看到我们刚刚修改的内容

![](https://picture.xcye.xyz/image-20220313215754907.png)

