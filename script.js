const numberDisplay = document.getElementById("numberDisplay");
const inputSection = document.getElementById("inputSection");
const userInput = document.getElementById("userInput");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");
const restartBtn = document.getElementById("restartBtn");
const levelDisplay = document.getElementById("level");

let generatedNumbers = [];
let currentLevel = 1;

function generateNumbers(length) {
  const nums = [];
  while (nums.length < length) {
    nums.push(Math.floor(Math.random() * 9) + 1); // angka 1-9
  }
  return nums;
}

function startLevel() {
  levelDisplay.textContent = `📈 Level: ${currentLevel}`;
  generatedNumbers = generateNumbers(currentLevel + 2); // Level 1 = 3 angka
  numberDisplay.textContent = generatedNumbers.join("");
  inputSection.style.display = "none";
  result.textContent = "";
  restartBtn.style.display = "none";
  userInput.value = "";

  setTimeout(() => {
    numberDisplay.textContent = "❓".repeat(generatedNumbers.length);
    inputSection.style.display = "block";
  }, 3000);
}

submitBtn.addEventListener("click", () => {
  const userAnswer = userInput.value.trim();

  if (userAnswer === generatedNumbers.join("")) {
    result.textContent = "🎉 Benar! Naik level!";
    result.style.color = "lime";
    currentLevel++;
    setTimeout(startLevel, 1500);
  } else {
    result.textContent = `❌ Salah! Jawabannya: ${generatedNumbers.join("")}`;
    result.style.color = "red";
    restartBtn.style.display = "inline-block";
  }
});

restartBtn.addEventListener("click", () => {
  currentLevel = 1;
  startLevel();
});

startLevel();

