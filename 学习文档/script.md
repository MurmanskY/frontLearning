[TOC]

# javascript基础

- 在html的 `</head>` 前面一行添加js文件的链接
  ```js
  <script src="scripts/main.js" defer></script>
  ```

## 数据类型

	| 变量                                                         | 解释                                                         | 示例                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| [String](https://developer.mozilla.org/zh-CN/docs/Glossary/String) | 字符串（一串文本）：字符串的值必须用引号（单双均可，必须成对）括起来。 | `let myVariable = '李雷';`                                   |
| [Number](https://developer.mozilla.org/zh-CN/docs/Glossary/Number) | 数字：无需引号。                                             | `let myVariable = 10;`                                       |
| [Boolean](https://developer.mozilla.org/zh-CN/docs/Glossary/Boolean) | 布尔值（真 / 假）： `true`/`false` 是 JS 里的特殊关键字，无需引号。 | `let myVariable = true;`                                     |
| [Array](https://developer.mozilla.org/zh-CN/docs/Glossary/Array) | 数组：用于在单一引用中存储多个值的结构。                     | `let myVariable = [1, '李雷', '韩梅梅', 10];` 元素引用方法：`myVariable[0]`, `myVariable[1]` …… |
| [Object](https://developer.mozilla.org/zh-CN/docs/Glossary/Object) | 对象：JavaScript 里一切皆对象，一切皆可储存在变量里。这一点要牢记于心。 | `let myVariable = document.querySelector('h1');` 以及上面所有示例都是对象。 |

## 运算符

	| 运算符     | 解释                                                         | 符号          | 示例                                                         |
| :--------- | :----------------------------------------------------------- | :------------ | :----------------------------------------------------------- |
| 加         | 将两个数字相加，或拼接两个字符串。                           | `+`           | `6 + 9;"Hello " + "world!";`                                 |
| 减、乘、除 | 这些运算符操作与基础算术一致。只是乘法写作星号，除法写作斜杠。 | `-`, `*`, `/` | `9 - 3;8 * 2; //乘法在 JS 中是一个星号9 / 3;`                |
| 赋值运算符 | 为变量赋值（你之前已经见过这个符号了）                       | `=`           | `let myVariable = '李雷';`                                   |
| 等于       | 测试两个值是否相等，并返回一个 `true`/`false` （布尔）值。   | `===`         | `let myVariable = 3;myVariable === 4; // false`              |
| 不等于     | 和等于运算符相反，测试两个值是否不相等，并返回一个 `true`/`false` （布尔）值。 | `!==`         | `let myVariable = 3;myVariable !== 3; // false`              |
| 取非       | 返回逻辑相反的值，比如当前值为真，则返回 `false`。           | `!`           | 原式为真，但经取非后值为 `false`： `let myVariable = 3;!(myVariable === 3); // false` |

## 条件语句
  ```js
  let iceCream = 'chocolate';
  if(iceCream === 'chocolate') {
    alert('我最喜欢巧克力冰淇淋了。');
  } else {
    alert('但是巧克力才是我的最爱呀....');
  }
  ```

## 函数
  ```js
  function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }
  ```

## 事件
  ```js
  document.querySelector("html").addEventListener("click", function () {
    alert("别戳我，我怕疼。");
  });
  ```

  刚刚我们传递给 `addEventListener()` 的函数被称为*匿名函数*，因为它没有名字。匿名函数还有另一种我们称之为*箭头函数*的写法，箭头函数使用 `() =>` 代替 `function ()`：
  ```js
  document.querySelector("html").addEventListener("click", () => {
    alert("别戳我，我怕疼。");
  });
  ```






# JavaScript第一步

## **循环Loop**

  ```js
  const fruits = ["apples", "bananas", "cherries"];
  for (const fruit of fruits) {
    console.log(fruit);
  }
  ```

  即使const是一个常量，我们也可以更改其内部的属性

- var与let的区别

- 字符串和数字连接时，会将数字自动转化成字符串。

## **字符串方法**

  1. 长度
     ```js
     string.length
     ```

  2. 通过index检索字符串
     ```js
     string[index]
     ```

  3. 通过内容检索子字符串的index
     ```js
     string.indexOf("substr")
     ```

  4. 提取子字符串
     ```js
     string.slice(index1, index2); // [index1, index2)
     string.slice(index); //[index, length-1]
     ```

  5. 大小写切换
     ```js
     string.toUpperCase();
     string.toLowerCase();
     ```

  6. 替换字符串某部分

     ```js
     string.replace("sourceSubStr", "targetSubStr");
     ```

  7. 字符串拼接 concat
     ```js
     const str1 = 'Hello';
     const str2 = 'World';
     
     console.log(str1.concat(' ', str2));
     // Expected output: "Hello World"
     
     console.log(str2.concat(', ', str1));
     // Expected output: "World, Hello"
     ```

## **数组方法**

  1. 长度
     ```js
     array.length
     ```

  2. 字符串与数组之间的转换
     ```js
     let myData = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
     
     // 切分操作 split()  string --> array
     let myArray = myData.split(",");
     console.log(myArray);
     
     // 相反的操作 join()  array --> string
     let myNewString = myArray.join(",");
     console.log(myNewString);
     
     // toString()函数。array --> string
     let dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
     console.log(dogNames.toString()); //Rocket,Flash,Bella,Slugger
     ```

  3. 添加与删除元素
     ```js
     // push()添加在末尾 直接在数组上进行操作，返回值是数组长度
     var newLength = myArray.push("Bristol");
     console.log(myArray);
     console.log(newLength);
     
     
     // pop()删除最后一个元素  直接在数组上进行操作，返回值是已删除的项目
     let removedItem = myArray.pop();
     console.log(myArray);
     console.log(removedItem);
     
     
     // unshift()添加在开头 直接在数组上进行操作，返回值是数组长度
     var newLength = myArray.unshift("Edinburgh");
     console.log(myArray);
     console.log(newLength);
     
     
     // pop()删除开头一个元素  直接在数组上进行操作，返回值是已删除的项目
     let removedItem = myArray.shift();
     console.log(myArray);
     console.log(removedItem);
     
     
     // splice()在指定位置插入元素
     array.splice(start, deleteCount, item1, item2, ...)
     //start: 指定修改的开始位置。
     //deleteCount: 表示从开始位置起要删除的元素数量。如果设置为0，则不删除元素。
     //item1, item2, ...: 在开始位置插入的新元素。
     let fruits = ['apple', 'banana', 'mango'];
     // 在索引1处插入多个水果
     fruits.splice(1, 0, 'orange', 'grape');
     console.log(fruits); // 输出 ['apple', 'orange', 'grape', 'banana', 'mango']
     
     
     // splice()在指定位置删除元素
     let fruits = ['apple', 'orange', 'banana', 'mango'];
     // 在索引1处删除两个元素(往后)，并添加两个新的水果
     fruits.splice(1, 2, 'grape', 'kiwi');
     console.log(fruits); // 输出 ['apple', 'grape', 'kiwi', 'mango']
     
     
     ```

## 笑话生成器

```js
const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector("p");

var storyText =
  "今天气温 34 摄氏度，:inserta:出去遛弯。当走到:insertb:门前时，突然就:insertc:。人们都惊呆了，李雷全程目睹但并没有慌，因为:inserta:是一个 130 公斤的胖子，天气又辣么热。";
var insertX = ["怪兽威利", "大老爹", "圣诞老人"];
var insertY = ["肯德基", "迪士尼乐园", "白宫"];
var insertZ = ["自燃了", "在人行道化成了一坨泥", "变成一条鼻涕虫爬走了"];

function randomValueFromArray(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

randomize.addEventListener("click", result);

function result() {
  let newStory = storyText;
  let xIterm = randomValueFromArray(insertX);
  let yIterm = randomValueFromArray(insertY);
  let zIterm = randomValueFromArray(insertZ);
  newStory = newStory.replace(":inserta:", xIterm);
  newStory = newStory.replace(":inserta:", xIterm);
  newStory = newStory.replace(":insertb:", yIterm);
  newStory = newStory.replace(":insertc:", zIterm);
  if (customName.value !== "") {
    let name = customName.value;
    newStory = newStory.replace("李雷", name);
  }

  if (document.getElementById("american").checked) {
    let temperature = Math.round((34 / 5) * 9 + 32);
    let weight = Math.round(130 * 2.20462);
    newStory = newStory.replace("34 摄氏度", `${temperature} 华氏度`);
    newStory = newStory.replace("130 公斤", `${weight} 英镑`);
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}
```



# JavaScript基础

## 图片库项目





