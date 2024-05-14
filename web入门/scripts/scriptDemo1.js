let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

// 点击图片进行切换
let myImage = document.querySelector("img");
myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc == "./images/firefox-icon.png") {
    myImage.setAttribute("src", "./images/firefox2.png");
  } else {
    myImage.setAttribute("src", "./images/firefox-icon.png");
  }
};

// 切换用户功能
let myButton = document.querySelector("button");
function setUsername() {
  let myName = prompt("请输入你的名字");
  if (myName) {
    // 在对话框有输入，才会在对话中替换名字
    localStorage.setItem("Name", myName);
    myHeading.textContent = "Mozilla 酷毙了， " + myName;
  } else if (!myName){
    //如果在对话框中没有进行输入，则不替换名字
    // myHeading.textContent = "Mozilla Is Cool";
    setUsername();
  }
}

myButton.onclick = function () {
  setUsername();
};
