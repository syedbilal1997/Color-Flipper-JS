const colors = ["green", "red", "yellow", "blue", "cyan", "purple", "violet"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click", function () {
  //het random number between 0-3 colors[3]
  const randomNumber = getRandomNumber();
  //   console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
