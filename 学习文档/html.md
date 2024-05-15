[TOC]

# 基本元素

- `<p> paragraph </p>`
- `<ul> unordered list </ul>` 
- `<ol> ordered list </ol>`
- `<li> list iterm </li>`
- `<a href="hypertext"> anchor </a>`

# HTML介绍

## 开始学习HTML

- `<em> 斜体emphasis </em>` 
- `<strong> 着重强调 </strong>`

- **块级元素**和**内联元素**的区别

  ```html
  <em>第一</em><em>第二</em><em>第三</em>
  
  <p>第四</p>
  <p>第五</p>
  <p>第六</p>
  ```

  `<em>`是一个内联元素，所以就像你在下方可以看到的，第一行代码中的三个元素都没有间隙的展示在了同一行。而 `<p>` 是一个块级元素，所以第二行代码中的每个 *p* 元素分别都另起了新的一行展现，并且每个段落间都有一些间隔（这是因为默认的浏览器有着展示`<p>` 元素的默认 [CSS 样式](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/First_steps)）。

- **添加属性（以`<a></a>`为例）**

  1. href超链接
  2. title，鼠标悬停显示内容
  3. target，以何种方式打开页面，默认当前页面，_blank新页面

  ```html
  <a href="https://www.mozilla.org/" title="这个是一个链接" target="_blank"
        >这是一个谷歌网站的链接</a
      >
  ```

- 使用**disable**禁止表单输入
  ```html
  <!-- 用它来禁用表单输入元素，这样用户就不能输入了 -->
  <input type="text" disabled="disabled" />
  
  <!-- 使用 disabled 属性来防止终端用户输入文本到输入框中 -->
  <input type="text" disabled />
  
  <!-- 下面这个输入框不包含 disabled 属性，所以用户可以向其中输入 -->
  <input type="text" />
  ```

- **实体引用**

	| 原义字符 | 等价字符引用 |
  | :------- | :----------- |
  | <        | `<`          |
  | >        | `>`          |
  | "        | `"`          |
  | '        | `'`          |
  | &        | `&`          |

- 注释
  ```html
  <!--   注释内容   -->
  ```





## 头里面有什么---HTML元信息

- **`<meta>` 元素**

  1. `name` 属性（页面作者信息）可能在搜索引擎中被搜索到

     ```html
     <meta name="author" content="Chris Mills" />
     <meta
       name="description"
       content="The MDN Web Docs Learning Area aims to provide
     complete beginners to the Web with all they need to know to get
     started with developing web sites and applications." />
     ```

  2. `description` 属性（可能会在搜索引擎结果的简介中出现）

     ```html
     <meta
       name="description"
       content="The MDN Web Docs site
       provides information about Open Web technologies
       including HTML, CSS, and APIs for both Web sites and
       progressive web apps." />
     ```

     <img src="/Users/mac/Library/Application Support/typora-user-images/image-20240512150128227.png" alt="image-20240512150128227" style="zoom:50%;" />

  3. *还有很多种类的元数据，搜索引擎不同，站点不同，标准可能会不同，显示的信息也会不同*

- **为站点自定义图标**
  在index.html相同的根目录下，以`.ico`格式保存，很多浏览器也支持`.gif`和`.png`。在head块中引用

  ```html
  <link rel="icon" href="favicon.ico" type="image/x-icon" />
  ```

  如果图标没有被加载，可能需要检查是不是由于CSP的相应头img-src指令阻止了访问图标

- **应用CSS与JS**

  1. 在head末尾添加
     ```html
     <link rel="stylesheet" href="my-css-file.css" />
     ```

  2. 在body末尾，即`</body>`前一行，添加js文件引用

     ```html
     <script src="my-js-file.js" defer></script>
     ```





## HTML文本处理基础

- 标题最多到h6

- 一个页面中最好只出现一次h1

- **列表**可以进行**嵌套**

  ```html
  <ol>
    <li>
      先用蛋白一个、盐半茶匙及淀粉两大匙搅拌均匀，调成“腌料”，鸡胸肉切成约一厘米见方的碎丁并用“腌料”搅拌均匀，腌渍半小时。
    </li>
    <li>
      用酱油一大匙、淀粉水一大匙、糖半茶匙、盐四分之一茶匙、白醋一茶匙、蒜末半茶匙调拌均匀，调成“综合调味料”。
    </li>
    <li>
      鸡丁腌好以后，色拉油下锅烧热，先将鸡丁倒入锅内，用大火快炸半分钟，炸到变色之后，捞出来沥干油汁备用。
    </li>
    <li>
      在锅里留下约两大匙油，烧热后将切好的干辣椒下锅，用小火炒香后，再放入花椒粒和葱段一起爆香。随后鸡丁重新下锅，用大火快炒片刻后，再倒入“综合调味料”继续快炒。
      <ul>
        <li>
          如果你采用正宗川菜做法，最后只需加入花生米，炒拌几下就可以起锅了。
        </li>
        <li>如果你在北方，可加入黄瓜丁、胡萝卜丁和花生米，翻炒后起锅。</li>
      </ul>
    </li>
  </ol>
  ```

- 两种**强调**也可以**嵌套**（这两种强调是有语义的）

  ```html
  <p>
    这杯液体<strong>毒性很大</strong>——如果饮用了它，你<strong>可能<em>会死</em></strong>。
  </p>
  ```

- 斜体，粗体字，下划线（没有语义的表象元素）
  只有在没有何时的元素事才会使用`<b>  <i>  <u>` 
  尽量使用`<strong>  <em>  <mark>  <span>`



## 创建超链接

- **存在块级链接**

  ```html
  <a href="https://developer.mozilla.org/zh-CN/">
    <h1>MDN Web 文档</h1>
  </a>
  <p>自从 2005 年起，就开始记载包括 CSS、HTML、JavaScript 等网络技术。</p>
  ```

  <img src="/Users/mac/Library/Application Support/typora-user-images/image-20240512160301995.png" alt="image-20240512160301995" style="zoom:50%;" />

- **图片链接（用`<a>`包裹`<img>`元素）**

  ```html
  <a href="https://developer.mozilla.org/zh-CN/">
    <img src="mdn_logo.svg" alt="MDN Web 文档主页" />
  </a>
  ```

- **文档链接**
  连接到html文件中的特定部分

  ```html
  <h2 id="Mailing_address">邮寄地址</h2>
  
  <!-- 不同html文档 -->
  <p>
    要提供意见和建议，请将信件邮寄至<a href="contacts.html#Mailing_address"
      >我们的地址</a
    >。
  </p>
  
  <!-- 同一html文档 -->
  <p>本页面底部可以找到<a href="#Mailing_address">公司邮寄地址</a>。</p>
  ```



## 文本格式进阶

- **描述列表（description list）**

  描述列表使用与其他列表类型不同的闭合标签——`dl`；此外，每一项都用 `dt`（description term）元素闭合。每个描述都用 `dd`（description definition）元素闭合。
  ```html
  <dl>
    <dt>内心独白</dt>
    <dd>
      戏剧中，某个角色对自己的内心活动或感受进行念白表演，这些台词只面向观众，而其他角色不会听到。
    </dd>
    <dt>语言独白</dt>
    <dd>
      戏剧中，某个角色把自己的想法直接进行念白表演，观众和其他角色都可以听到。
    </dd>
    <dt>旁白</dt>
    <dd>
      戏剧中，为渲染幽默或戏剧性效果而进行的场景之外的补充注释念白，只面向观众，内容一般都是角色的感受、想法、以及一些背景信息等。
    </dd>
  </dl>
  ```

  浏览器会在term和definition之间产生缩进（*单个术语可以有多个定义*）每个定义之间不会产生额外的缩进
  <img src="/Users/mac/Library/Application Support/typora-user-images/image-20240512162233938.png" alt="image-20240512162233938" style="zoom:50%;" />

- 引用
  使用`<blockquote>`元素包裹起来，在cite属性里用URL来指向引用资源

  ```html
  <p>Here is a blockquote:</p>
  <blockquote
    cite="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/blockquote">
    <p>
      The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
      <em>HTML Block Quotation Element</em>) indicates that the enclosed text is
      an extended quotation.
    </p>
  </blockquote>
  ```

  <img src="/Users/mac/Library/Application Support/typora-user-images/image-20240515152141509.png" alt="image-20240515152141509" style="zoom:50%;" />

- 缩略语
  使用`<abbr>`元素来包裹一个缩略语或者缩写，并提供缩写的解释（放在title里）

  ```html
  <p>
    我们使用
    <abbr title="超文本标记语言（Hyper text Markup Language）">HTML</abbr>
    来组织网页文档。
  </p>
  
  <p>
    第 33 届<abbr title="夏季奥林匹克运动会">奥运会</abbr>将于 2024 年 8
    月在法国巴黎举行。
  </p>
  ```

  <img src="/Users/mac/Library/Application Support/typora-user-images/image-20240515152520947.png" alt="image-20240515152520947" style="zoom:50%;" />

- 标记联系方式
  使用`<address> code </address>`

- 上标与下标
  上标`<sup> code </sup>`

  下标`<sub> code </sub>`

- 