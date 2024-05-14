const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */
var fileNames = [
  "images/pic1.jpg",
  "images/pic2.jpg",
  "images/pic3.jpg",
  "images/pic4.jpg",
  "images/pic5.jpg",
];

/* Declaring the alternative text for each image file */
var altText = [
  "Closeup of a human eye",
  "alternative textb for pic2",
  "alternative textb for pic3",
  "alternative textb for pic4",
  "alternative textb for pic5",
];

/* Looping through images */
for (let i = 0; i < fileNames.length; i++) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", fileNames[i]);
  newImage.setAttribute("alt", altText[i]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener("click", () => {
    displayedImage.setAttribute("src", fileNames[i]);
    displayedImage.setAttribute("alt", altText[i]);
  });
}

/* Wiring up the Darken/Lighten button */
function changeBrigthness() {
  if (btn.getAttribute("class") === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
}
btn.addEventListener("click", changeBrigthness);
