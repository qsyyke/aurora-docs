"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3845],{1544:(s,n,e)=>{e.r(n),e.d(n,{data:()=>a});const a={key:"v-4cf350f9",path:"/base/docs.html",title:"docs目录详解",lang:"en-US",frontmatter:{date:"2021/12/8 16:37",title:"docs目录详解"},excerpt:"",headers:[{level:2,title:"文章",slug:"文章",children:[]},{level:2,title:"主题配置文件",slug:"主题配置文件",children:[]}],git:{updatedTime:1658732501e3,contributors:[{name:"qsyyke",email:"2291308094@qq.com",commits:1}]}}},3457:(s,n,e)=>{e.r(n),e.d(n,{default:()=>t});var a=e(6252);const c=(0,a.uE)('<p>目录结构</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docs-\n    │  style.md <span class="token comment">#文章</span>\n    │  \n    ├─.vuepress <span class="token comment"># 必须</span>\n    │  │  clientAppEnhance.js <span class="token comment">#根据自己的需要，扩展文件</span>\n    │  │  config.js <span class="token comment">#配置文件</span>\n    │  │  \n    │  │      \n    │  ├─dist <span class="token comment"># build命令后，静态文件目录</span>\n    │  ├─public <span class="token comment"># 静态文件目录</span>\n    │  │  │  avatar.jpg\n    │  │  │  \n    │  │  ├─bg\n    │  │  │  │  <span class="token number">1</span>.jpg\n    │  │  │  │  \n    │  │  │  └─animate\n    │  │  │          <span class="token number">1</span>.jpg\n    │  │  │          \n    │  │  └─song\n    │  │          <span class="token number">2</span>.mp3\n    │  │          \n    │  └─styles <span class="token comment"># 覆盖主题默认样式</span>\n    │          index.css <span class="token comment"># 样式</span>\n    │          palette.css\n    │          \n    └─comment <span class="token comment"># 文章</span>\n            README.md <span class="token comment"># 文章</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="文章" tabindex="-1"><a class="header-anchor" href="#文章" aria-hidden="true">#</a> 文章</h2>',3),p=(0,a._)("p",null,[(0,a._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"",originSrc:"https://picture.xcye.xyz/image-20211208165052341.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),l=(0,a.uE)('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>在<code>docs</code>目录中，除了<code>docs/.vuepress</code>文件夹外的文件及文件夹，都是博客文章，<code>docs/.vuepress</code>目录不能删除，里面存放临时文件，build命令生成的文件，以及静态文件，主题配置文件</p></div><p>例如上面的<code>style.md</code>和<code>comment/readme.md</code>文件都是文章，都可以直接通过<code>http://localhost:8080/style.html</code>和<code>http://localhost:8080/comment/index.html</code>进行访问(8080端口不一定和我的一样)</p><blockquote><p><code>readme.md</code>文件，相当于<code>index.html</code></p></blockquote><h2 id="主题配置文件" tabindex="-1"><a class="header-anchor" href="#主题配置文件" aria-hidden="true">#</a> 主题配置文件</h2><p>vuepress中，主题配置文件存放在<code>docs/.vuepress/config.js</code>内，一定不要搞错了</p><blockquote><p><code>docs/.vuepress/config.js</code>是一个文件名么??????????</p></blockquote>',6),r=(0,a._)("p",null,[(0,a._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"",originSrc:"https://picture.xcye.xyz/image-20211208165730551.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),o={},t=(0,e(3744).Z)(o,[["render",function(s,n){return(0,a.wg)(),(0,a.iD)(a.HY,null,[c,p,l,r],64)}]])}}]);