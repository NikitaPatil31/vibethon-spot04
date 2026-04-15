/* ================= NAVIGATION ================= */
function goTo(page) {
  window.location.href = page + ".html";
}

/* ================= TOAST ================= */
function showToast(msg) {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);

  setTimeout(() => t.remove(), 3000);
}

/* ================= CODE RUN ================= */
function runCode() {
  const out = document.getElementById("codeOutput");
  out.innerText = "Running...";

  setTimeout(() => {
    out.innerText = "Slope: 1.96\nIntercept: 0.22\nDone!";
    showToast("Code executed!");
  }, 800);
}

/* ================= QUIZ ================= */
let quizData = [
  {q:"2+2?", ans:"4"},
  {q:"3+3?", ans:"6"}
];

let current = 0;

function loadQuiz() {
  current = 0;
  showQuestion();
}

function showQuestion() {
  if (current >= quizData.length) {
    document.getElementById("quizArea").innerHTML = "Finished!";
    return;
  }

  let q = quizData[current];
  document.getElementById("quizArea").innerHTML =
    `<p>${q.q}</p>
     <button onclick="nextQ()">Next</button>`;
}

function nextQ() {
  current++;
  showQuestion();
}

/* ================= GAME SYSTEM ================= */

// SWITCH BETWEEN MULTIPLE GAMES
function loadGame(name) {
  const games = ["tree", "guess", "quiz"];

  games.forEach(g => {
    const el = document.getElementById("game-" + g);
    if (el) el.style.display = "none";
  });

  const active = document.getElementById("game-" + name);
  if (active) active.style.display = "block";
}

/* --------- GAME 1: DECISION TREE --------- */
function treeStep(step) {
  const el = document.getElementById("step" + step);
  if (el) el.style.display = "block";
}

function treeWin() {
  document.getElementById("result").style.display = "block";
  showToast("🌳 Correct! +25 pts");
}

function resetTree() {
  for (let i = 1; i <= 3; i++) {
    let el = document.getElementById("step" + i);
    if (el) el.style.display = "none";
  }
  document.getElementById("result").style.display = "none";
}

/* --------- GAME 2: GUESS NUMBER --------- */
let randomNum = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
  const user = document.getElementById("guessInput").value;
  const res = document.getElementById("guessResult");

  if (!user) {
    res.innerText = "Enter a number!";
    return;
  }

  if (user == randomNum) {
    res.innerText = "🎉 Correct! +20 pts";
    showToast("Nice guess!");
  } else {
    res.innerText = "❌ Wrong! Try again";
  }
}

/* --------- GAME 3: QUIZ GAME --------- */
function quizGameAns(correct) {
  const res = document.getElementById("quizGameResult");

  if (correct) {
    res.innerText = "✅ Correct! +10 pts";
    showToast("Smart answer!");
  } else {
    res.innerText = "❌ Wrong answer";
  }
}

/* ================= INIT ================= */
console.log("MindML Loaded ✅");