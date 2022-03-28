const { navbar } = require("./public/navbar");
module.exports = {
    themeConfig: {
        homePageLazyLoadingImg: 'https://picture.xcye.xyz/image-20220328221012634.png',
        navbar: navbar,
        darkMode: false,
        repo: "https://github.com/qsyyke/vuepress-theme-aurora",
        docsRepo: 'https://github.com/qsyyke/aurora-docs/',
        githubActions: true,
        docsBranch: 'main',
        repoLabel: "Aurora",
        editLink: true,
        editLinkText: "edit",
        lastUpdated: true,
        lastUpdatedText: "lastTime",

        //下面的都是主题自己的配置文件
        //logo旁文字颜色
        logoColor: "#2c3e50",

        //样式控制面板字体占位符，如果是国内用户，请使用中文
        showFont: "程",

        //首页中间hero图片地址，默认为https://ooszy.cco.vin/img/blog-public/avatar.jpg
        heroImg: 'https://picture.xcye.xyz/Aurora.png',

        //logo图片地址，默认为https://ooszy.cco.vin/img/ico/yuan.png
        logo: "https://picture.xcye.xyz/avatar.jpg",

        //文章懒加载图片 仅限文章，首页文章占位图片并不是这个
        lazyLoadingImg: "https://picture.xcye.xyz/ljz.gif",

        //是否启用定制首页随机一言，默认未开启，使用随机一言 接口为https://international.v1.hitokoto.cn/?c=b&max_length=45
        customRandomSay: false,

        //定制首页随机一言文字
        customRandomValue: 'Vuepress-theme-Aurora',

        //社交信息，首页PC端至多显示19个，手机端至多显示7个，侧边栏不影响
        socials: [
            {
                //社交链接
                aHref: "tencent://message/?uin=2291308094",
                // imgSrc: "https://ooszy.cco.vin/img/ico/qq.svg", 从v1.3.2开始久移除次配置，以前版本用于社交ico图标配置

                //true为在首页显示，反之
                isHome: true,

                //是否显示此社交信息,如果为false，尽管isHome=true，sidebar=true，也不会显示
                show: true,

                //是否在侧边栏显示
                sidebar: true,

                //使用阿里图标 使用的是阿里图标库，我也挑选部分图标，请进入http://ico.cco.vin/theme查看
                symbol: '#icon-qq',

                //鼠标移入此图标时，显示的图片，适用于微信等通过二维码添加好友
                // showImgSrc: "https://ooszy.cco.vin/img/blog-public/wechat.jpg",
            },
            {
                aHref: "javascript:;",
                //imgSrc: /assets/img/ico/wechat.svg,
                showImgSrc: "https://picture.xcye.xyz/blog-public/wechat.jpg",
                isHome: true,
                show: true,
                symbol: '#icon-weixin',
                sidebar: true
            },
            {
                aHref: "https://github.com/qsyyke/",
                isHome: true,
                show: true,
                sidebar: true,
                symbol: '#icon-github-fill'
            },
            {
                aHref: "https://stackoverflow.com/",
                isHome: true,
                show: true,
                symbol: '#icon-stackoverflow',
                sidebar: true
            },
            {
                aHref: "https://space.bilibili.com/483962286",
                isHome: true,
                show: true,
                sidebar: true,
                symbol: '#icon-bilibili-1'
            },
            {
                aHref: "https://music.163.com/#/user/home?id=1411050784",
                isHome: true,
                show: true,
                symbol: '#icon-wangyiyunyinle',
                sidebar: true
            },
            {
                aHref: "mailto:2291308094@qq.com",
                isHome: true,
                show: true,
                sidebar: true,
                symbol: '#icon-email'
            }
        ],

        // cancelIcoHref: "https://ooszy.cco.vin/img/ico/quxiao.svg", 在v1.3.2中移除

        //logo旁文字 默认值为Aurora
        logoTitle: "Aurora",

        headTitle: "this is headTitle",

        //站点描述
        description: "vuepress-theme-Aurora是一款简洁，美观，功能强大的静态主题",

        //站点关键词，在后续版本中，还需优化 请使用英文状态下的逗号','隔开
        keyword: "vuepress主题,vuepress theme,二次元博客,简约博客,博客主题,静态主题,vuepress-theme,好看博客,动漫博客",

        //样式控制面板打开之后，休眠多长时间自动关闭面板，单位毫秒
        slideTime: 3000,

        //随机一言接口
        randomSaw: "https://international.v1.hitokoto.cn/?c=b&max_length=45",
        //关于页面
        about: [
        {
            bar: false,
            title: "我?",
            describe: [
                "目前是一名大三学生,CS专业,坐标西南边陲",
                "喜欢安静,不喜社交",
                "喜欢听音乐,什么类型都可",
                "喜欢技术,coding",
                "目前正在学习java后端",
                '最喜欢的电影是"忠犬八公的故事",梦想以后独居也能有一只"Hachi"',
                "主题是我自己开发的，前端太菜了，如果有bug，希望大家多多包涵`Σ(￣□￣||)` ",
                "有点懒",
                "目前除了编程没有什么兴趣爱好",
                "正在追的番有《百妖谱》,《致不灭的你》,《少年歌行》,《鬼灭之刃》,《关于我转生变成史莱姆这档事》，《国王排名》，《多罗罗》，《世界顶尖的暗杀者,转生为异世界贵族》...",
                "喜欢小说，喜欢的作者是--十月流年，最喜欢的小说《至尊修罗》,《一念永恒》,《星辰变》",
            ],
            tag: [
                "coding",
                "社恐",
                "番剧",
                "电影",
                "安静",
                "音乐",
                "小说",
                "宅",
                "懒",
            ],
            showTag: true,
        },
        {
            bar: false,
            title: "大三规划",
            describe: [
                "做项目",
                "软考二级",
                "英语四级",
                "想找实习",
                "复习数据结构",
                "驾照",
                "做点什么有意义的事",
            ],
            tag: ["大家加油呀`Σ(￣□￣||)` ..."],
            showTag: true,
        },
        {
            bar: false,
            title: "未来规划",
            describe: ["后端工程师", "..."],
            tag: ["忘记过去，展望未来"],
            showTag: true,
        },
        {
            bar: true,
            title: "技  能",
            describe: [
                {
                    name: "java",
                    score: 70,
                },
                {
                    name: "HTML5",
                    score: 87,
                },
                {
                    name: "javascript",
                    score: 82,
                },
                {
                    name: "css",
                    score: 73,
                },
                {
                    name: "python",
                    score: 20,
                },
                {
                    name: "redis",
                    score: 41,
                },
                {
                    name: "mysql",
                    score: 71,
                },
                {
                    name: "vue",
                    score: 60,
                },
                {
                    name: "spring",
                    score: 61,
                },
                {
                    name: "springMVC",
                    score: 62,
                },
                {
                    name: "springBoot",
                    score: 68,
                },
            ],
            showTag: false,
        },

        {
            showTag: false,
            bar: true,
            title: "掌握框架",
            describe: [
                {
                    name: "spring",
                    score: 65,
                },
                {
                    name: "springMVC",
                    score: 61,
                },
                {
                    name: "springBoot",
                    score: 70,
                },
                {
                    name: "mybatis",
                    score: 67,
                },
                {
                    name: "vue",
                    score: 60,
                },
                {
                    name: "dubbo",
                    score: 30,
                },
            ],
        },
        {
            bar: true,
            showTag: false,
            title: "掌握技能",
            describe: [
                {
                    name: "jetbrains",
                    score: 85,
                },
                {
                    name: "linux",
                    score: 38,
                },
                {
                    name: "git",
                    score: 81,
                },
                {
                    name: "CtrlCV",
                    score: 100,
                },
            ],
        },
        {
            title: "关于主题",
            describe: [
                "vuepress-theme-aurora主题是对vuepress官方默认主题进行大量修改，历时一个多月时间，最终改成了现在这个样子，" +
                "该主题某些页面借鉴于其他大佬的主题，现在这个版本，自己也是很满意，虽然还存在部分bug，但是会在后续版本中解决" +
                "也会加入一些新的功能，因为我主要学习Java，对于前端的技术不太熟悉，如果有不好的地方，请各位大佬多多包涵，" +
                "如果你也喜欢这款主题，想要鼓励我的话，可以通过以下方式`(｀・ω・´)` ",
                "帮忙在Github点个<a href='https://github.com/vuepress-aurora/vuepress-theme-aurora' target='_blank'>star</a>",
                "可以在本页底部请我喝杯奶茶(支持在线支付)",
                "将该主题分享给更多需要的人",
                "保留页脚主题信息",
                "为此主题提建议",
                "你的鼓励和建议是我不断开发的动力"
            ],
            tag: ['想求个star`(⌒▽⌒)`'],
            showTag: true,
        },
        {
            bar: false,
            title: "更新日志",
            describe: [
                '<label class="about-version">v1.9.5</label> 1.解决友情链接页面描述部分未显示 2.导航栏字体使用单独class 3.修复透明度改变，点击评论按钮背景未改变问题',
                '<label class="about-version">v1.9.5</label> 1.优化手机端文章推荐 2.修复使用smoothscroll，build报错 3.编写说说，支持换行',
                '<label class="about-version">v1.9.2</label> 1.优化赞赏样式 2.修复Safari浏览器，sticky失效问题 3.修复Safari滚动不顺滑 3.优化评论 4.增加是否显示pageMeta',
                '<label class="about-version">v1.9.0</label> 1.优化tag页面，自动滚动 2.修复tag单个内容高度 3.优化手机端归档页面样式 4.修复气泡在首页不能展示 5.修复文章标题错位 6.修复图片懒加载 7.文章顶部图片支持自定义封面 8.增加禁用通过文件夹名作为类别名',
                '<label class="about-version">v1.8.0</label> 1.修复说说插件cookie失效 2.修复手机端外部链接失效 3.修复侧边栏和文章页时间不正确 4.修复说说插件排序 5.增加音乐播放器插件 6.增加波浪特效 7.增加文章归档插件 8.增加气泡插件 9.使背景图随机 10增加禁用文章推荐',
                '<label class="about-version">v1.7.0</label> 1.修复coze插件build错误问题 2.修复首页手机端社交图标太靠底部问题 3.修复导航栏下拉框数组间隔太大问题' +
                '4.Coze插件:用户注册成功，撒花效果 5.将侧边栏的头像和首页中间的头像分开，可以进行单独配置',
                '<label class="about-version">v1.6.2</label>1.修复首页文章列表一级标题，二级标题，三级标题等，出现#符号问题 2.修复友情链接页面图片和描述不匹配问题' +
                '3.修复关于页面，社交图片中，需要展示二维码等图片，部分被隐藏的问题 4.主题不再提供/photo路由，改由coze插件提供，该/photo使用说说的图片数据 ' +
                '5.主题所有的文本配置，比如公告，友情链接的message，都支持html，高度自定义 6.主题支持自定义导航图标，详细看文档aurora.xcye.xyz',
                '<label class="about-version">v1.6.1</label> 1.修复coze插件默认注册界面，输入框不对齐情况 2.修复leanCloud中有Talk类，但是没有数据情况下，不能编写说说问题 3.修复快速点赞，数据加减错误问题' +
                '4.修复侧边栏目录，不能获取到标题url问题 5.修复文章链接在在新标签中打开，图片失效问题 6.把主题文件夹移到docs同级，原来的docs/.vuepress/theme还存在，但是代码不在改变' + 
                '7.使用coze插件可以自定义注册，登录，登出等，除了默认提供的插件，额外提供的一个全局组件 8.其他用户也可以在你博客发布说说，但需要允许，默认关闭 ' + 
                '9.说说功能使用插件实现 10.BREAKING CHANGES: 主题的目录被改变，如果你是以前克隆仓库的，需要克隆最新版，并且主题github仓库移到vuepress-aurora组织下',   
                '<label class="about-version">v1.5.4</label> 1.修复页脚版权信息 2.修复文章链接从外部打开，图片失效问题，3.修复搜索样式' + 
                '4.自定义导航栏图标 5.自定义h标签图标',
                '<label class="about-version">v1.5.3</label> 1.修复全局组件auroraglobal导航栏没有动画问题 2.修复友情链接logo与url不匹配问题 3.修复Safari浏览器侧边栏模糊问题',
                '<label class="about-version">v1.5.2</label> 解决部署后，刷新404问题',
                '<label class="about-version">v1.5.1</label> 增加自定义海报图片api接口',
                '<label class="about-version">v1.5.0</label> 1.修改了手机端侧边栏，优化顶部导航样式 2.解决在docs下，md文件不显示问题 3.修改分页组件，使用element-plus 4.新功能，增加自定义首页文章列表懒加载图片',
                '<label class="about-version">v1.4.2</label> 支持自定义页面',
                '<label class="about-version">v1.4.1</label> 修复侧边栏目录bug，修复首页侧边栏友情链接logo和url不匹配问题',
                '<label class="about-version">v1.4.0</label> 1.主题支持修改css样式，支持修改icon图标，使用方法 2.不在需要新增docs/.vuepress/readme.md文件 3.解决新增页面路由刷新404问题' + 
                '4.优化页面样式 5.首页文章列表，增加两个选择，背景色时候跟随样式面板改变还是使用存白色 6.手机端，页面侧边栏是否显示(并不是左上角点开的侧边栏) 7.优化tag页面 8.站点全局圆角，透明度，模糊度增加默认值',
                '<label class="about-version">v1.3.6</label> 修复手机端侧边栏和说说页面',
                '<label class="about-version">v1.3.5</label> 修复tag页面的内容重复问题',
                '<label class="about-version">v1.3.4</label> 1.解决上一版本，获取所有文章时，忘记对photos下的md文件，过滤的问题 2.修改默认主题的edit链接问题',
                '<label class="about-version">v1.3.3</label> 1.解决npm run build命令build成功后，无法自动退出问题 2.解决iPad或者部分设备，站点logo和标题重合情况 3.修复首页文章列表图片和页面顶部图片，在部分iPad和电脑上，显示不美观问题' + 
                '4.添加浏览器兼容设置(火狐浏览器首页出现滚动条，暂未解决) 5.为文章增加发布时间 6.收集站点所有文章数据时，自动过滤掉moods文件夹内的md文件(photos文件夹，忘记了，下一个版本增加)',
                '<label class="about-version">v1.3.2</label> 1.增加侧边栏功能 2.首页增加文章列表 3.修改首页社交图标 4.标签页面增加两种选择 5.修改友情链接列表展示效果 6.修改主题评论框架 7.文章页面增加上一篇，下一篇文章功能 ' + 
                '8.首页移除原来的页脚效果 9.修改默认主题404页面 10.修改文章页面顶部标题，浏览量等样式',
                '<label class="about-version">v1.2.10</label> 修改tag标签的内容显示，解决从tag页进入文章，页脚重复标签bug',
                '<label class="about-version">v1.2.9</label>.为说说页面增加在线添加功能，及修改相册的路由',
                '<label class="about-version">v1.2.8</label> 修改友情链接的列表排序，使用随机排序，修改页脚部分样式',
                '<label class="about-version">v1.2.7</label> 修改百度统计报错',
                '<label class="about-version">v1.2.6</label> 修改海报，标签归档页面样式样式',
                '<label class="about-version">v1.2.2</label> 修改readme.md，以及部分文档',
                '<label class="about-version">v1.2.1</label> 新增相册功能，并解决海报一个bug',
                '<label class="about-version">v1.2.0</label> 为文章，心情增加海报分享功能',
                '<label class="about-version">v1.1.0</label> 重新修改description和keyword的配置，主题内部集成了search功能',
                '<label class="about-version">v1.0.1</label> 修改从tag页面进入文章页面，懒加载无效bug',
                '<label class="about-version">v1.0.0 考古</label> 大概从2021/8/20多号开始写这个博客'
            ],
            tag: ['开发永不止步......'],
            showTag: true,
        },
        {
            title: "TODO",
            bar: false,
            tag: ['不要忘记下面这些bug👻👻👻'],
            showTag: true,
            describe: [
                
            ],
        },
        {
            title: "主题后续计划及闲话",
            bar: false,
            tag: [],
            showTag: false,
            describe: [
                "<label class='about-version about-goal about-success'>未完成</label> 时间轴",
                '<label class="about-version about-goal about-success">已完成</label> 优化SEO',
                '<label class="about-version about-goal about-fail">未完成</label> 优化海报分享功能，目前海报分享功能，对于一些文章，海报的宽度和高度会发生变化，并将海报分享制作成一个插件',
                '<label class="about-version about-goal about-fail">未完成</label> 广告，其实在最初的版本中，就已经实现了广告功能，只是不太理想，就移除了，后续会重新开发',
                '<label class="about-version about-goal about-success">已完成</label> 页面交互动画，我并不擅长写前端，所以此主题的页面动画只是简单的做了一下，会在后续版本中进行优化',
                '<label class="about-version about-goal about-success">已完成</label> 希望将所有的样式配置都进行抽离，比如菜单栏的ico图标等等，可以自己配置，虽然目前也可以更改，但是需要在' +
                '源码中进行简单的Unicode替换，其实如果改源码的话，也是非常简单的，只是我想在配置文件中，就可以进行修改',
                '<label class="about-version about-goal about-success">已完成</label> 说说功能感觉在本地编写，然后再进行上传发布的话，并不是很方便，说说应该是一个随时能发布，修改的功能，所以在后续版本中，会加入(目前也实现了这个功能，' +
                '只是后端api是我自己写的，目前只能我自己使用，在后续版本中，希望能够找到解决办法),该功能已开发为<a target="_blank" href="https://www.npmjs.com/package/vuepress-plugin-coze">vuepress-plugin-coze插件</a>',
                '<label class="about-version about-goal about-fail">未完成</label> 暗夜模式，最初在修改默认主题的时候，就被我移除了，但是一些用户可能还会使用到，所以也会在后续版本中，添加此功能',
                '<label class="about-version about-goal about-success">已完成</label> 优化首页文章列表',
                '<label class="about-version about-goal">hope</label> 同时如果你们想要新的功能或者建议，可以到github提交一个issue'
            ],
        },
    ],

        //拿取对象 在后续版本中，会对此项进行优化
        randomSawQuery: "hitokoto",
        method: "get",

        //这是配置随机背景；颜色 可以不设置，有默认值
        randomColor: [
            "#ffcad4", "#d8e2dc", "#8d99ae", "#b8f2e6", "#84c7d0", "#aed9e0", "#00b4d8",
            "#caf0f8", "#fbc4ab", "#fdc5f5", "#84dcc6", "#a9def9", "#fcf6bd", "#f0a6ca",
            "#b9faf8", "#42a5f5", "#ff9800", "#b39ddb", "#6d45bb", "#b388ff", "#1565c0",
            "#26c6da", "#5e548e", "#90f1ef", "#5b5f97", "#bbe6e4", "#42bfdd", "#72ddf7",
            "#8093f1", "#9ed8d8", "#7ea8be", "#ef90b3", "#b892ef", "#c0b9dd", "#c0d9dd",
            "#75c9c8", "#ded9e2", "#b5e2fa", "#62b6cb", "#5fa8d3", "#0fa3b1", "#b5e2fa",
            "#5fa8d3", "#62b6cb", "#b892ff",
        ],

        //样式控制面板至多显示多少个字体和字体颜色，推荐不超过8个
        maxFontColorArr: 8,

        //在样式控制面板中，显示的字体颜色集合
        fontColor: [
            "#2c3e50", "#42a5f5", "#8093f1", "#FF6EC7", "#FF7F00", "#8FBC8F", "#EAADEA",
            "#3299CC", "#CDCDCD", "#CC3299", "#FF7F00", "#2F4F4F",
        ],

        //友情链接数组
        friendLinks: [
            {
                title: '小姐姐(也是大佬)',
                links: [
                    {
                        //网站标题
                        title: "XI溪",

                        //站点链接
                        url: "http://www.xiaoxuya.top",

                        //站点logo
                        logo: "https://www.xiaoxuya.top/img/logo.png",

                        //站点描述
                        describe: "人生若只是初见,何事秋风悲画扇",
                        cover: 'https://picture.xcye.xyz/image-20211106100103898.png?x-oss-process=style/pictureProcess1'
                    },
                    {
                        title: "皮皮凛の小窝",
                        url: "https://owomoe.net/",
                        logo: "https://cdn.jsdelivr.net/gh/AyagawaSeirin/Assets/img/logo.jpg",
                        describe: "永远相信美好的事情即将发生~",
                        cover: 'https://picture.xcye.xyz/image-20211106100608395.png?x-oss-process=style/pictureProcess1'
                    },
                ]
            },
            {
                title: '大佬',
                links: [
                    {
                        title: 'Colsrch',
                        url: 'https://colsrch.cn',
                        logo: 'https://cdn.jsdelivr.net/gh/Colsrch/images/Colsrch/avatar.jpg',
                        describe: '愿多年以后，我可以酌一杯清酒，烂醉如泥，梦中回到我们的曾经',
                        cover: 'https://picture.xcye.xyz/image-20211112172343574.png?x-oss-process=style/pictureProcess1'
                    },
                    {
                        title: '叫我詹躲躲',
                        describe: '岂能尽如人意，但求无愧于心',
                        logo: 'https://zhanhongzhu.top/avatar.jpg',
                        url: 'https://zhanhongzhu.top',
                        cover: 'https://picture.xcye.xyz/image-20211112172438812.png?x-oss-process=style/pictureProcess1'
                    },
                    {
                        title: '神邸 - Zendee.cn',
                        describe: '加入神邸,精彩由你！',
                        logo: 'https://www.zendee.cn/favicon.ico',
                        url: 'https://www.zendee.cn',
                        cover: 'https://picture.xcye.xyz/image-20211112172927025.png?x-oss-process=style/pictureProcess1'
                    },
                    {
                        title: "W4J1e's blog",
                        logo: 'https://cdn2.hin.cool/pic/my/dl3.png',
                        url: 'https://www.hin.cool',
                        describe: '总是偏爱不务正业',
                        cover: 'https://picture.xcye.xyz/image-20211112172956300.png?x-oss-process=style/pictureProcess1'
                    },
                ]
            },
            {
                title: '小伙伴',
                links: [
                    {
                        title: "[ Blog We]",
                        url: "https://blogwe.com/",
                        logo: "https://blogwe.com/favicon.ico",
                        describe: "博客大全-做最好的博客导航！",
                        cover: "https://picture.xcye.xyz/image-20211106100344348.png?x-oss-process=style/pictureProcess1"
                    },
                    {
                        title: "Davinci的红茶馆",
                        url: "https://davincievans.top/",
                        logo: "https://cdn.jsdelivr.net/gh/DavinciEvans/Imgs-bed@master/gallery/avatar.jpg",
                        describe: "You are all stardust.",
                        cover: 'https://picture.xcye.xyz/image-20211106100502873.png?x-oss-process=style/pictureProcess1'
                    },
                    {
                        title: "月月月子喵",
                        url: "https://haozi.moe",
                        logo: "https://haozi.moe/css/images/logo_christmas.png",
                        describe: "可爱的月子酱",
                        cover: 'https://picture.xcye.xyz/image-20211112173329874.png?x-oss-process=style/pictureProcess1'
                    },
                    {
                        title: "I Am I",
                        url: "https://5ime.cn",
                        logo: "https://cdn.jsdelivr.net/gh/5ime/img/avatar.jpg",
                        describe: "永远相信美好的事情即将发生",
                        cover: 'https://picture.xcye.xyz/image-20211112173356961.png?x-oss-process=style/pictureProcess1'
                    },
                    {
                        title: "左眼会陪右眼哭の博客",
                        url: "http://qkongtao.cn/",
                        logo: "http://qiniu.qkongtao.cn/2020/12/d11-e1628358435552.png",
                        describe: "干嘛这么想不开，要在脸上贴个输字！",
                        cover: 'https://picture.xcye.xyz/image-20211112174944751.png?x-oss-process=style/pictureProcess1'
                    },
                    {
                        title: "HuTao’s Blog",
                        url: "https://www.rulsm.com/",
                        logo: "https://www.rulsm.com/HuTao.png",
                        describe: "太阳出来我晒太阳！",
                        cover: 'https://picture.xcye.xyz/blog-note/image-20211112191153938.png?x-oss-process=style/pictureProcess1'
                    },
                ]
            },
    ],

        //自己的站点信息 我自己的站点描述 会显示在友情链接的底部
        siteInformation: {
            //站点标题
            title: "Aurora-theme",

            //自己站点链接
            url: "https://aurora.xcye.xyz",

            //自己站点logo
            logo: "https://picture.xcye.xyz/avatar.jpg",

            //自己站点描述
            describe: "vuepress-theme-Aurora是一款简洁，美观，功能强大的静态主题",
            cover: 'https://picture.xcye.xyz/image-20211106100103898.png?x-oss-process=style/pictureProcess1',

            //自己的头像
            contact: "如果你已经添加我站点，我很长时间还未添加，请联系我QQ: 2291308094,或者在说说处告诉我(先注册用户http://localhost:8080/aurora-register/，在发布说说/mood)，别评论",
            otherDescribe: [
                '申请友链请按照下面格式，在此页面评论或者先<a href="/register">注册</a>，再到<a href="/mood">说说</a>处留下你站点，我看到就会进行添加',
                '<label class="about-version friend-tag">博客名称</label><label class="about-version friend-tag">博客地址</label><label class="about-version friend-tag">博客描述</label><label class="about-version friend-tag">博客logo</label><label class="about-version friend-tag">博客封面</label>',
                '友链申请要求',
                '<label class="about-version about-goal about-fail">拒绝涉政/涉黄/太多广告/盈利性站点</label>',
                '<label class="about-version">站点能正常访问</label>',
            ]
        },

        //需要排除的标签，自动生成的标签中，不会有这个标签，这是一个数组
        excludeTag: ["note"],

        //样式控制面板显示的字体，有默认值
        fontFamily: [
            "-apple-system", "hlt", "tzt", "sst", "lf", "xsf", "lsf", "cgt",
        ],

        //页脚信息，支持HTML，这是一个数组
        footer: [
            "Copyright © by qsyyke All Rights Reserved.",
            "<a target='_blank' href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=53060202000142' style='display:inline-block;text-decoration:none;height:20px;line-height:20px;'><img src='' style='float:left;'/><p style='float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px;'>滇公网安备 53060202000142号</p></a>",
        ],

        //是否显示页脚，控制全局
        isShowFooter: true,

        //是否显示主题信息在页脚，为false关闭
        isShowThemeCopyright: true,

        //是否展示运行时间
        isShowRunTime: true,

        //网站开始时间，请按照以下格式进行
        startRunTime: "8/7/2021 12:22:00",

        //网站运行时间前缀
        prefixRuntime: "小破站已运行",

        //公告，是一个数组，支持图片，HTML
        message: [
            'v1.13.0版本增加了两个说说页面，路径分别是/mood和/next-mood，看你自己喜欢哪个页面，在顶部导航栏中加入就行',
            '如果运行<label class="about-version">npm run build</label>命令报<a href="https://ooszy.cco.vin/img/blog-note/image-20220119200825560.png" target="_blank">此图</a>错误，请运行命令<label class="about-version">npm i mini-css-extract-plugin@2.4.7</label>安装低版本的npm i mini-css-extract-plugin插件',
            '<label class="about-version">使用注意</label>写文章的时候，最好设置手动设置一个文章发布时间，否则文章发布时间，会随着git commit的提交记录，每次都会变，手动设置时间<a href="/learn/frontmatter.html">请看</a>',
            '博客已加入<label class="about-version">浪漫气泡，音乐播放器，时间轴功能</label>，需要使用插件，点击顶部导航栏 ---> 插件进行配置',
            '站点已开启说说功能体验,请先进行<a href="/aurora-register">注册</a>,然后在<a href="/mood">说说页面</a>点击点赞旁的那个编写，就可以发布了,或者直接使用体验账号密码登录: username: <label class="about-version">user</label>,&nbsp;&nbsp;password: <label class="about-version">user123456</label>',
            '你如果运行npm run dev，控制台报Error: spawn *\\node_modules\\esbuild\\esbuild.exe ENOENT，请先运行node ./node_modules/esbuild/install.js',
            "主题交流群: 681602026，欢迎各位大佬进群交流",
            '<img src="https://picture.xcye.xyz/image-20211015134525708.png"/>'
        ],

        //文章底部最大推荐文章数 默认值为30
        recommendPageLength: 30,

        //推荐列表标题为空时，就会使用这个进行代替，默认是`╮(￣▽￣)╭`
        recommendNoTitle: "╮(￣▽￣)╭",

        //tag页，没有标题时，代替文字 默认是下面这个
        tagNoTitle: "暂时还没有标题哟",

        //首页中间框的话语
        mood: "青衫烟雨客",

        //默认打开网站时的毛玻璃状态，TRUE表示默认开启毛玻璃效果
        isFitter: true,

        //tag页面，标签分割符 请不要传入一个空字符串，默认值就是' ' 一个空格
        split: "~",

        //赞赏信息
        donate: {

            //赞赏页面，支付二维码，推荐放置两张图片链接
            donateImg: [
                "https://ooszy.cco.vin/img/blog-public/wxpay.png",
                "https://ooszy.cco.vin/img/blog-public/zfbpay.jpg",
            ],

            //是否在文章页面显示赞赏 默认显示
            articlePage: true,

            //是否在关于页面显示 默认显示
            aboutPage: true,

            //显示在赞赏页面的信息
            donateProduct: [
                {
                    //名字
                    name: "古茗",

                    //图片地址
                    img: "https://picture.xcye.xyz/image-20211112154421146.png?x-oss-process=style/pictureProcess1",

                    //价格
                    price: 10,

                    //前缀
                    prefix: "￥",
                },
                {
                    name: "烧奶珍珠奶茶",
                    img: "https://picture.xcye.xyz/image-20211112154955370.png?x-oss-process=style/pictureProcess1",
                    price: 9,
                    prefix: "￥",
                },
                {
                    name: "酸奶",
                    img: "https://picture.xcye.xyz/image-20211112155844042.png?x-oss-process=style/pictureProcess1",
                    price: 4,
                    prefix: "￥",
                },
                {
                    name: "其他",
                    img: "https://picture.xcye.xyz/image-20211112160135405.png?x-oss-process=style/pictureProcess1",
                    price: '自定义',
                    prefix: "￥",
                },
            ],

            //是否显示在线支付的订单信息，如果需要开启，请自己写支付接口，自己修改源码，默认关闭
            onlineList: true,

            //用户赞赏列表数组
            donateList: [
                {
                    name: "冰糖指蜂蜜",
                    msg: "",
                    img: "https://picture.xcye.xyz/image-20211112163454335.png?x-oss-process=style/pictureProcess1",
                    price: 10,
                    prefix: "￥",
                },
            ],
        },

        //评论配置 请自己查看文档配置 https://aurora.cco.vin/config/comment/
        comment: {
            //是否显示评论
            showComment: true,
            serverURL: 'https://theme-intr.vercel.app/',
            emojis: [
                'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/qq',
                'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/alus',
                'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/bilibili'
            ],
            avatar: 'monsterid'
        },

        //海报分享配置
        poster: {
            //博客描述
            description: "vuepress-theme-Aurora是一款简洁，美观，功能强大的静态主题",

            //作者
            author: "qsyyke",

            //博客前缀
            preBlog: "Aurora",

            //海报博客名称后缀
            suffixBlog: " theme",

            //头像，请放置在docs/public目录下，或者请保证此图片链接能够跨域访问，否则头像不能正常显示
            avatar: "/avatar.jpg",
        },

        //是否展示从网络上请求回来的说说 如果启用，请自己写后台服务，修改源码，目前暂未在主题中加入，期望在将来能够实现，组件位置docs/.vuepress/theme/lib/client/components/Mood.vue
        showOnlineMood: false,

        //是否开启在线添加说说功能，如果需要，请自己写后台，修改源码，目前在主题内部暂未加入 组件位置docs/.vuepress/theme/lib/client/components/child/AddMood.vue
        showMoodEdit: false,

        //此项仅限我自己的增加说说请求配置，暂未提供注册服务，目前仅限自己使用，可能在以后完善之后，你们只需要简单配置下，就能使用了，期待
        addMood: {
            siteName: "aurora.cco.vin",
            appId: "lnZxmObbJSp3o8Zea2KXxPwat",
            appKey: "6TleVWdLeVwpOKv9eXtTQUam7",
        },

        //自定义顶部图片
        customTopImg: {
            //是否启用定制顶部图片，控制全局，如果关闭，那么将使用随机图片，随机图片接口可以自己设置
            custom: false,

            //文章顶部图片，数组，每次从数组中随机选择一张
            page: [
                "https://picoss.cco.vin/animate/wall/555260.png",
                'https://picoss.cco.vin/animate/wall/404901.png',
                'https://picoss.cco.vin/animate/wall/734386.png'
            ],
            //友情链接页面
            friend: [
                "https://picoss.cco.vin/animate/wall/669.png",
                'https://picoss.cco.vin/animate/wall/5332.png'
            ],
            //标签页面
            tag: [
                "https://picoss.cco.vin/animate/wall/763311.png"
            ],
            //心情页面
            mood: [
                "https://picoss.cco.vin/animate/wall/5849.png"
            ],
        },

        //首页背景图片数组，考虑到使用随机图片，打开网站速度变慢，所以移除随机图片，使用自己设置的图片链接
        homeWps: [
            "/animate/1.jpg",
            "/animate/6.jpg",
            "/animate/7.jpg",
            "/animate/8.jpg",
            "/animate/10.jpg",
            "/animate/13.jpg",
            "/animate/14.jpg",
            "/animate/17.jpg",
            "/animate/18.jpg",
            "/animate/22.jpg",
        ],

        //手机端首页背景图片
        homeWpsMobile: [
            "/animate/8.jpg",
            "/animate/10.jpg",
            "/animate/13.jpg",
            "/animate/14.jpg",
            "/animate/17.jpg",
            "/animate/18.jpg",
            "/animate/22.jpg",
        ],
        //首页文章显示条数，默认为4，此值不推荐设置太大
        pageSize: 5,

        //侧边栏配置
        //github地址
        githubUrl: "https://github.com/qsyyke/vuepress-theme-aurora",

        //最新文章数量，默认为6
        latestPageSize: 6,

        //首页是否显示文章图片，默认关闭，如果显示的话，首页加载会非常慢 已弃用，从v1.3.2开始，直接移除首页文章内容图片
        showHomePageImg: false,

        //文章侧边栏自动获取的层次 默认为1，也就是http://localhost:8080/config/feature/donate.html,只会自动生成feature目录下的文件
        sidebarCatalogLevel: 1,

        //首页文章列表封面图api接口
        homePageImgApi: "https://pic-tool.xcye.xyz/pic/rmimg",

        //手机端侧边栏横线分割文字，默认为Aurora
        mobileCutText: "Aurora",

        //侧边栏标签处显示还是分类还是标签，，只有两个值，默认为分类，如果为tag，那么就显示为分类，否则显示为标签
        sidebarTag: "tag",

        //额外的功能，也就是样式控制面板上面那个，默认是关闭的
        showAddMood: false,
        //生成海报的顶部图片api接口，请注意，该接口需要直接返回图片地址，不能有跨域问题，设置之前，可以先使用ajax看是否存在跨域
        postImgApi: 'https://pic-tool.xcye.xyz/pic/rmimg?type=bing',
        sidebarAvatar: '/avatar.jpg',

        //v1.8.0新增配置项
        //是否展示文章推荐 默认展示
        showRecommend: true,

        //文章页面是否显示上一页，下一页 默认展示
        articlePagination: true,

        global: {
            sidebar: {
                showStatus: true,
                perData: false,
                social: false,
                friendLink: true,
                navbar: false,
                latestPage: true,
                message: false,
                tag: true,
                siteData: false
            },
            footer: false,
        },

        //excludeTag: ["note"], 此配置项，不再需要使用

        //在统计文章，标签，类别的时候，需要排除的路径，只针对于根目录下的路径，
        excludePath: ['/use.html'],

        //首页波浪效果设置
        wave: {
            showWave: true
        },

        //顶部图片的气泡控制
        bubble: {
            show: true,

            //气泡数量 推荐0(不包括)到1之前的小数，
            bubbleNumber: 0.14,

            //气泡透明度 0到1之间的小数
            bubbleAlpha: 0.6,

            //透明度变化速度，越接近于0越好
            alphaChangeSpeed: 0.00001,

            //气泡大小，推荐0到1之间的值
            size: 0.4,

            //气泡大小变化速度 越小越好
            sizeChangeSpeed: 0.0002,

            //气泡上升速度
            riseSpeed: 0.4,

            //气泡颜色，白色rgb(255,255,255) 请传入255,255,255
            color: '255,255,255'
        },
        showPageMeta: true



        /*
        * 下面这些是在v1.3.2中移除的配置，但是在V1.3.2之前的版本中，可能还可以使用，某些配置我不确定具体在哪个
        * 版本中被移除的，并且在v1.3.2版本中，才把主题配置移到docs/.vuepress/config.js中，之前所有版本都是在
        * docs/readme.md中进行配置，并不推荐使用V1.3.2之前的版本，没有侧边栏，可能还存在一些bug
        * 同时你可能会发现上面的某些配置项并不是很好，比如随机一言的配置，我最开始想的就是希望能在配置项中，通过简单的配置
        * 就能从api接口返回回来的复杂json数据中，获取到想要的值，但是目前此配置项，特别不方便，在后续版本中，会继续对此项
        * 进行优化
        *
        * 未来:
        * 此博客主题目前也拥有博客的最基本功能，但是某些功能，我目前并没有实现，在后续版本中，如果使用此主题的用户多的话
        * 我都会逐一实现，此项目我会一直维护，以下便是在后续版本中，需要实现或者优化的
        *
        * 1.时间轴
        * 2.优化SEO
        * 3.优化海报分享功能，目前海报分享功能，对于一些文章，海报的宽度和高度会发生变化，并将海报分享制作成一个插件
        * 4.广告，其实在最初的版本中，就已经实现了广告功能，只是不太理想，就移除了，后续会重新开发
        * 5.页面交互动画，我并不擅长写前端，所以此主题的页面动画只是简单的做了一下，会在后续版本中进行优化
        * 6.希望将所有的样式配置都进行抽离，比如菜单栏的ico图标等等，可以自己配置，虽然目前也可以更改，但是需要在
        * 源码中进行简单的Unicode替换，其实如果改源码的话，也是非常简单的，只是我想在配置文件中，就可以进行修改
        * 7.说说功能感觉如果在本地编写，然后再进行上传发布的话，并不是很方便，说说应该是一个随时能发布，修改的功能，
        * 所以在后续版本中，会加入(目前也实现了这个功能，只是后端api是我自己写的，目前只能我自己使用，在后续版本中，希望能
        * 够找到解决办法)
        * 8.暗夜模式，最初在修改默认主题的时候，就被我移除了，但是一些用户可能还会使用到，所以也会在后续版本中，添加此功能
        * 9.优化首页文章列表
        *
        * 最后:该主题最开始只是想魔改vuepress默认主题供自己使用，但是后面又想继续完善供所有需要的人使用，由于我对前端特别
        * 菜，源码和页面中有很多不规范的地方，请各位大佬多多担待`(｀・ω・´)`
        * */

        // heroLogo: "https:/  /ooszy.cco.vin/img/blog-public/avatar.jpg", 在v1.3.2中被移除
        //faviconIco: https://ooszy.cco.vin/img/ico/yuan.png 已弃用
        //faviconIco: https://github.githubassets.com/favicons/favicon.svg 已弃用
        // showHomeMood: false,在v1.3.2中已移除
        // defaultTitleColor: "#8093f1", 默认文章页，标题颜色 在v1.3.2中移除
        //animeOption 配置已弃用
        /*animeOption: {
            baseURL: "https://api.vvhan.com/api/acgimg?type=json",
            method: 'get',
            timeout: 5000,
            query: "imgurl",
        },*/
        //随机图片地址，设置背景用 已弃用，在v1.3.2以后，改用自己设置的形式
        //randomWallpaper: https://api.mtyqx.cn/api/random.php
        //randomWallpaperMb: https://api.mtyqx.cn/api/random.php
        /*ico: { 在v1.3.2之后被移除
            linkIco: "https://ooszy.cco.vin/img/ico/tea.svg",
            aboutIco: "https://ooszy.cco.vin/img/ico/cat.svg",
            homeWelcome: [
                "https://ooszy.cco.vin/img/ico/love2.svg",
                "https://ooszy.cco.vin/img/ico/xy.svg",
            ],
        },*/
        // keyRule: 40, 如果没有设置key值，那么就截取描述作为key，keyRule就是截取多少个字 弃用
        // isShowMessage: true,//已弃用，在v1.3.2之后，改用在侧边栏显示公告
        /*adsenseArr: [ 弃用
            {
                position: "right",
                adsenseMessage: "官网用户专享",
                script: "",
                adsenseBackgroundImg: "/img/33.jpg",
            },
            {
                position: 'center',
                adsenseMessage: "官网用户专享1",
                script: '<a href="https://baidu.com">这是中间1</a>',
                adsenseBackgroundImg: "/img/33.jpg",
            },
            {
                position: "center",
                adsenseMessage: "官网用户专享2",
                script: '<a href="https://baidu.com">这是中间2</a>',
                adsenseBackgroundImg: "/img/33.jpg",
            },
        ],*/
        // insertAdsenseRule: 17, 弃用
        // adsenseLength: 3, 每一页文章中，最大广告数 弃用
        // socialMaxLength: 7, 在v1.3.2版本中移除
    }
}