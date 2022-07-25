"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3012],{3822:(n,e,s)=>{s.r(e),s.d(e,{data:()=>a});const a={key:"v-41ed1ae4",path:"/feature/seo.html",title:"SEO",lang:"en-US",frontmatter:{date:"2021/9/19"},excerpt:"",headers:[{level:2,title:"首页",slug:"首页",children:[]},{level:2,title:"文章页面",slug:"文章页面",children:[]},{level:2,title:"社交信息配置",slug:"社交信息配置",children:[]}],git:{updatedTime:1658732501e3,contributors:[{name:"qsyyke",email:"2291308094@qq.com",commits:1}]}}},5046:(n,e,s)=>{s.r(e),s.d(e,{default:()=>o});var a=s(6252);const p=(0,a.uE)('<h1 id="seo" tabindex="-1"><a class="header-anchor" href="#seo" aria-hidden="true">#</a> SEO</h1><p>主题已对搜索引擎进行初步优化，主要就是自动设置关键词和描述，如果想要更深入的SEO优化，请自行解决</p><h2 id="首页" tabindex="-1"><a class="header-anchor" href="#首页" aria-hidden="true">#</a> 首页</h2><p>首页的<code>description</code>和<code>keyword</code>通过以下修改，在<code>readme.md</code>文件中，不推荐在<code>config.js</code>中进行修改</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n\n    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;qsyyke的个人博客，记录生活琐事，学习笔记&#39;</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">keyword</span><span class="token operator">:</span> <span class="token string">&#39;vuepress主题,vuepress theme,生活琐事,二次元博客,简约博客,博客主题,静态主题&#39;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="文章页面" tabindex="-1"><a class="header-anchor" href="#文章页面" aria-hidden="true">#</a> 文章页面</h2><p>对于文章页面，你可以通过<code>frontmatter</code>语法在每个<code>.md</code>文件上进行修改，可以参照官方<a href="https://v2.vuepress.vuejs.org/zh/reference/config.html#description">description</a></p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>\n<span class="token key atrule">description</span><span class="token punctuation">:</span> 这是一个测试description项\n<span class="token key atrule">keyword</span><span class="token punctuation">:</span> key1<span class="token punctuation">,</span>key2<span class="token punctuation">,</span>key3<span class="token punctuation">,</span>key4<span class="token punctuation">,</span>key5\n<span class="token punctuation">---</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>description: String</li><li>keyword: 数组</li></ul><p>如果你没有在该<code>.md</code>文件中，没有对description或者keyword进行修改，那么默认通过获取当前文章的部分h2标签和部分p标签内容进行组合</p><p>description字符默认为<code>1220</code>，暂未在<code>config.js</code>中提供修改</p><p>keyword字符默认为90</p><h2 id="社交信息配置" tabindex="-1"><a class="header-anchor" href="#社交信息配置" aria-hidden="true">#</a> 社交信息配置</h2>',13),t=(0,a.Uk)("社交信息配置"),r={},o=(0,s(3744).Z)(r,[["render",function(n,e){const s=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[p,(0,a._)("p",null,[(0,a.Wm)(s,{to:"/feature/social.html"},{default:(0,a.w5)((()=>[t])),_:1})])],64)}]])}}]);