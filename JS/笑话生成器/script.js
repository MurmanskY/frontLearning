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
