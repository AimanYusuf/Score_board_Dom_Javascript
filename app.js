const display1 = document.querySelector("#display1");
const display2 = document.querySelector("#display2");
const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#resetButton");
const winOption = document.querySelector("#winOption");

let p1Score = 0;
let p2Score = 0;
let winPoint = 3;
let isGameOver = false;

p1Button.addEventListener("click", () => {
  if (!isGameOver) {
    p1Score++;
    display1.textContent = p1Score;
    if (p1Score === winPoint) {
      isGameOver = true;
      display1.classList.remove("text-danger");
      display1.classList.add("text-success");
      p2Button.disabled = true;
    }
  }
});

p2Button.addEventListener("click", () => {
  if (!isGameOver) {
    p2Score++;
    display2.textContent = p2Score;
    if (p2Score === winPoint) {
      isGameOver = true;
      display2.classList.remove("text-danger");
      display2.classList.add("text-success");
      p1Button.disabled = true;
    }
  }
});

function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  display1.textContent = 0;
  display2.textContent = 0;
  display1.classList.remove("text-success");
  display2.classList.remove("text-success");
  display1.classList.add("text-danger");
  display2.classList.add("text-danger");
  p1Button.disabled = false;
  p2Button.disabled = false;
}

resetButton.addEventListener("click", reset);

winOption.addEventListener("change", function () {
  winPoint = parseInt(this.value);
  reset();
});
