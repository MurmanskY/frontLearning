const select = document.querySelector('select');
const html = document.querySelector('.output');

select.addEventListener('change', () => {
  const choice = select.value;
  switch(choice){
    case "white":{
      update("white", "black");
      break;
    };
    case "black":{
      update("black", "white");
      break;
    };
    case "purple":{
      update("purple", "black");
      break;
    };
    case "yellow":{
      update("yellow", "black");
      break;
    };
    case "psychedelic":{
      update("psychedelic", "black");
      break;
    };
    default:
      ;
  };
  // ADD SWITCH STATEMENT
})

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}