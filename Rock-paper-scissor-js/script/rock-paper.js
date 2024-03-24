let computerMove = "";

const results = JSON.parse(localStorage.getItem("results")) || {
  wins: 0,
  lose: 0,
  draw: 0,
};

function getComputerMove() {
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 0.33) {
    computerMove = "rock";
  } else if (randomNumber >= 0.33 && randomNumber < 0.66) {
    computerMove = "paper";
  } else {
    computerMove = "scissor";
  }

  console.log(computerMove);
}

function playGames(playerMove) {
  getComputerMove();
  console.log(playerMove);

  let result = "";

  if (computerMove === "rock") {
    if (playerMove === "rock") {
      result = "draw";
    } else if (playerMove == "scissor") {
      result = "lose";
    } else if (playerMove === "paper") {
      result = "win";
    }
  }

  if (computerMove === "scissor") {
    if (playerMove === "rock") {
      result = "win";
    } else if (playerMove == "scissor") {
      result = "draw";
    } else if (playerMove === "paper") {
      result = "lose";
    }
  }

  if (computerMove === "paper") {
    if (playerMove === "rock") {
      result = "lose";
    } else if (playerMove == "scissor") {
      result = "win";
    } else if (playerMove === "paper") {
      result = "draw";
    }
  }

  document.querySelector(
    ".js-result-display"
  ).innerHTML = `<p>You Choose</p> <img src="images/${playerMove}.png"/>
    <p class="computer-moves">Computer Choose</p> <img src="images/${computerMove}.png"/>
    `;

  updateScore(result);
}

function updateScore(result) {
  if (result === "win") {
    results.wins += 1;
  } else if (result === "lose") {
    results.lose += 1;
  } else if (result === "draw") {
    results.draw += 1;
  }

  localStorage.setItem("results", JSON.stringify(results));

  document.querySelector(".js-score").innerHTML = `<p>wins=${results.wins}</p>
    <p>loose=${results.lose}</p>
    <p>draw=${results.draw}</p>
    `;
}

function resetResult() {
  results.wins = 0;
  results.lose = 0;
  results.draw = 0;

  document.querySelector(".js-score").innerHTML = `<p>wins=${results.wins}</p>
    <p>loose=${results.lose}</p>
    <p>draw=${results.draw}</p>
    `;
  
    document.querySelector('.js-result-display').innerHTML='';
}

function showScore() {
  document.querySelector(".js-score").innerHTML = `<p>wins=${results.wins}</p>
    <p>loose=${results.lose}</p>
    <p>draw=${results.draw}</p>
    `;
}
