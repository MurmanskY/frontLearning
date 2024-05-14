[TOC]

# CSS基础

- 不同类型的选择器
	| 选择器名称                           | 选择的内容                                                   | 示例                                                         |
  | :----------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
  | 元素选择器（也称作标签或类型选择器） | 所有指定类型的 HTML 元素                                     | `p` 选择 `<p>`                                               |
  | ID 选择器                            | 具有特定 ID 的元素。单一 HTML 页面中，每个 ID 只对应一个元素，一个元素只对应一个 ID | `#my-id` 选择 `<p id="my-id">` 或 `<a id="my-id">`           |
  | 类选择器                             | 具有特定类的元素。单一页面中，一个类可以有多个实例           | `.my-class` 选择 `<p class="my-class">` 和 `<a class="my-class">` |
  | 属性选择器                           | 拥有特定属性的元素                                           | `img[src]` 选择 `<img src="myimage.png">` 但不是 `<img>`     |
  | 伪类选择器                           | 特定状态下的特定元素（比如鼠标指针悬停于链接之上）           | `a:hover` 选择仅在鼠标指针悬停在链接上时的 `<a>` 元素        |

- 使css代码发挥作用 html头部
  ```html
  <link href="styles/style.css" rel="stylesheet" />
  ```
  
- 字体和文本，html头部
  ```html
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans"
    rel="stylesheet" />
  ```
  
- 盒子模型
  ![image-20240512112803694](/Users/mac/Library/Application Support/typora-user-images/image-20240512112803694.png)

- 图片居中
  body元素是**块级**元素，意味着它占据了页面的空间并且能够赋予外边距和其他改变间距的值。而图片是**行级**元素，不具备块级元素的一些功能。所以为了使图像有外边距，我们必须使用 `display: block` 给予其块级行为。

  ```css
  /* 图片居中 */
  img {
      display: block;
      margin: 0 auto;
  }
  ```

- padding和margin多个参数意义
  ![image-20240512113632073](/Users/mac/Library/Application Support/typora-user-images/image-20240512113632073.png)



# CSS第一步

## 什么是CSS

- Cascading Style Sheets

- 可以改变列表前面显示的形状（示例代码为正方形）
  ```css
  li {
    list-style-type: square;
  }
  ```

- ***<u>根据类名确定样式（ . ）</u>***

  ```css
  <li class="special">项目二</li>
  
  /*  选中每个special类的li元素  */
  li.special {
    color: orange;
    font-weight: bold;
  }
  
  /*  选中每个special类的li元素与em元素  */
  li.special,
  span.special {
    color: orange;
    font-weight: bold;
  }
  ```

- <u>***根据元素在文章中的位置确定样式（ space + ）***</u>

  ```css
  <li>项目 <em>三</em></li>
  
  /*  该选择器将选择<li>内部的任何<em>元素  */
  li em {
    color: rebeccapurple;
  }
  ```

  HTML 文档中设置直接出现在标题后面并且与标题具有相同层级的段落样式，为此需在两个选择器之间添加一个 `+` 号 (成为 **相邻选择符**)

  ```css
  h1 + p {
    font-size: 200%;
  }
  ```

- <u>***根据状态确定样式（ : ）***</u>
  每个标签可能存在不同的状态，对这些状态进行定位

  ```css
  /* 没有被访问过的链接是粉色 */
  a:link {
    color: pink;
  }
  
  /* 链接如果被访问过就变变成绿色 */
  a:visited {
    color: green;
  }
  
  /* 鼠标悬停 */
  a:hover {
    text-decoration: none;
  }
  ```

- <u>***同时使用选择器和选择符***</u>

   ```css
   /* selects any <span> that is inside a <p>, which is inside an <article>  */
   article p span { ... }
   
   /* selects any <p> that comes directly after a <ul>, which comes directly after an <h1>  */
   h1 + ul + p { ... }
   
   /* 上面的代码为以下元素建立样式：在 <body> 之内，紧接在 <h1> 后面的 <p> 元素的内部，类名为 special */
   body h1 + p .special {
     color: yellow;
     background-color: black;
     padding: 5px;
   }
   ```





## CSS的组成

- 外部样式表（css文件）

- 内部样式表（直接现在html的head中style元素内部）

- 内联样式（写在html的单个元素内部，只对单个元素有效）

- 层叠与优先级
  相同优先级的后面发生更改的会重新改变前面已经写好的
  类选择器是具体的，优先级高于元素选择器

- clac()函数
  允许在CSS中进行简单的计算，例如：

  ```html
  <div class="outer"><div class="box">内部盒子的宽度为 90% - 30px。</div></div>
  ```

  ```css
  .outer {
    border: 5px solid black;
  }
  
  .box {
    padding: 10px;
    width: calc(90% - 30px);
    background-color: rebeccapurple;
    color: white;
  }
  ```

- transform函数
  另一个例子是 [`transform`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform) 的不同取值，如 `rotate()`。

  ```html
  <div class="box"></div>
  ```

  ```css
  .box {
    margin: 30px;
    width: 100px;
    height: 100px;
    background-color: rebeccapurple;
    transform: rotate(0.8turn);
  }
  ```

- @rules，命令，例子如下
  ```css
  /* 将一个css样式表导入到当前的css样式中 */
  @import "styles2.css";
  ```

  

# CSS 基础

## CSS构建

