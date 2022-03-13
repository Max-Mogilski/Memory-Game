const tiles = document.querySelectorAll(".tile");
const popupMenu = document.querySelector(".game-menu");
const score = document.querySelector(".score");
const endGamePopup = document.querySelector(".game-end");
const leaderboardPopup = document.querySelector(".score-board");
const leaderBoardPopupLI = leaderboardPopup.querySelectorAll("li");
const recordMessage = document.querySelector(".record-info");
const recordScoreInfo = document.querySelector(".record-score");
const gameData = JSON.parse(localStorage.getItem("gameData"));
const images = [
	"assets/img/18072173_011_a82d.jpeg",
	"assets/img/21144782_020_a433.jpeg",
	"assets/img/32764908_005_3a31.jpeg",
	"assets/img/61546582_001_9d2b.jpeg",
	"assets/img/66546318_005_890a.jpeg",
	"assets/img/81941066_016_0cb2.jpeg",
	"assets/img/18072173_011_a82d.jpeg",
	"assets/img/21144782_020_a433.jpeg",
	"assets/img/32764908_005_3a31.jpeg",
	"assets/img/61546582_001_9d2b.jpeg",
	"assets/img/66546318_005_890a.jpeg",
	"assets/img/81941066_016_0cb2.jpeg",
	// "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
	// "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
	// "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
	// "https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
	// "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
	// "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
	// "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
	// "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
	// "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
	// "https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
	// "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
	// "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
];
const scoreBoard = gameData ? [...gameData] : [];
const pairToCheck = [];
let checkedPairs = 0;
let ableToClick = true;
let isEventCreated = false;
let isTimerRunning = true;
let currentScore = 0;
class Leaderboard {
	constructor() {
		console.log("Making new leaderboard");
		this.renderLeaderboard();
	}
	sortLeaderBoard() {
		scoreBoard.sort(function (a, b) {
			if (a > b) return 1;
			if (a < b) return -1;
			return 0;
		});
	}
	saveLeaderboard() {
		const scoreToLocalStorage = [];
		for (let i = 0; i < 5; i++) {
			if (scoreBoard[i]) {
				scoreToLocalStorage.push(scoreBoard[i]);
			}
		}
		localStorage.setItem("gameData", JSON.stringify(scoreToLocalStorage));
	}
	loadLeaderboard() {
		if (gameData) {
		}
	}
	renderLeaderboard() {
		this.loadLeaderboard();
		let scoreMin = 0;
		let scoreSec = 0;
		for (let i = 0; i < leaderBoardPopupLI.length; i++) {
			if (scoreBoard[i]) {
				if (scoreBoard[i] >= 60) {
					scoreMin = scoreBoard[i] / 60;
					scoreSec = scoreBoard[i] % 60;
				} else {
					scoreSec = scoreBoard[i];
					scoreMin = 0;
				}
				if (scoreMin < 10) {
					scoreMin = "0" + scoreMin;
				}
				if (scoreSec < 10) {
					scoreSec = "0" + scoreSec;
				}
				leaderBoardPopupLI[i].textContent = `${scoreMin}:${scoreSec}`;
			}
		}
	}
	setLeaderboard() {
		let shouldAdd = true;
		if (scoreBoard[0]) {
			scoreBoard.forEach((score) => {
				if (score === currentScore) {
					shouldAdd = false;
				}
			});
		}
		if (shouldAdd) {
			scoreBoard.push(currentScore);
		}
		this.sortLeaderBoard();
		this.saveLeaderboard();
	}
}

// Fisher–Yates Shuffle Algorithm
function shuffle(array) {
	let m = array.length,
		t,
		i;

	// While there remain elements to shuffle…
	while (m) {
		// Pick a remaining element…
		i = Math.floor(Math.random() * m--);

		// And swap it with the current element.
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}

	return array;
}
const sec = document.getElementById("seconds");
const min = document.getElementById("minutes");
class Timer {
	constructor() {}
	reset() {
		sec.textContent = "00";
		min.textContent = "00";
	}
	start() {
		this.reset();
		let seconds = 0;
		let minutes = 0;
		const interval = setInterval(function () {
			if (isTimerRunning === false) {
				clearInterval(interval);
				return;
			}
			seconds++;

			if (seconds >= 60) {
				seconds = 0;
				minutes++;
			}

			if (seconds < 10) {
				sec.textContent = "0" + seconds;
			} else {
				sec.textContent = seconds;
			}
			if (minutes < 10) {
				min.textContent = "0" + minutes;
			} else {
				min.textContent = minutes;
			}

			this.secondScore = sec.textContent;
			this.minutesScore = min.textContent;
		}, 1000);
	}
	stop() {
		currentScore = +this.secondScore + +this.minutesScore * 60;
		if (currentScore < scoreBoard[0] || !scoreBoard[0]) {
			recordMessage.textContent = "New record!";
			recordScoreInfo.textContent = "";
		}
		if (currentScore >= scoreBoard[0]) {
			recordMessage.textContent = "Personal best:";
			recordScoreInfo.textContent = leaderBoardPopupLI[0].textContent;
		}
		score.textContent = `${this.minutesScore}:${this.secondScore}`;
		endGamePopup.style.display = "block";
		isTimerRunning = false;
		leaderboard.setLeaderboard();
		leaderboard.renderLeaderboard();
	}
}

class Game {
	constructor() {
		this.timer = new Timer();
		this.start();
	}

	// tiles rest, and filling with shuffled images
	fillTiles() {
		tiles.forEach((tile) => {
			tile.firstElementChild.style.display = null;
			tile.classList.add("animation-hover");
		});
		const randomImages = shuffle(images);
		if (tiles.length === images.length) {
			for (let i = 0; i < tiles.length; i++) {
				tiles[i].style.backgroundImage = `url("${randomImages[i]}")`;
			}
		}
	}

	// Making new timer, filling tiles, starting timer
	start() {
		this.fillTiles();
		if (isTimerRunning === false) {
			isTimerRunning = true;
		}
		this.timer.start();

		// Comparing background path of two selected tiles
		function compareTile(previous, current) {
			if (previous.style.backgroundImage === current.style.backgroundImage) {
				checkedPairs += 2;
				previous.classList.remove("animation-hover");
				current.classList.remove("animation-hover");
			} else {
				ableToClick = false;
				setTimeout(() => {
					previous.firstElementChild.style.display = "block";
					current.firstElementChild.style.display = "block";
					ableToClick = true;
				}, 1000);
			}
			pairToCheck.pop();
			pairToCheck.pop();
		}

		function clickHandler(e) {
			if (ableToClick && e.target.classList.contains("placeholder")) {
				const tile = e.target.parentElement;
				if (!pairToCheck[0]) {
					pairToCheck.push(tile);
				} else if (!pairToCheck[1]) {
					pairToCheck.push(tile);
					compareTile(...pairToCheck);
					if (checkedPairs >= tiles.length) {
						this.end();
						checkedPairs = 0;
					}
				}
				if (e.target.classList.contains("placeholder")) {
					e.target.style.display = "none";
				}
			}
		}

		const board = document.getElementById("board");

		//I couldn't remove eventListener so I made global variable and if xD I hope I'll fix it later
		if (isEventCreated === false) {
			board.addEventListener("click", clickHandler.bind(this));
			isEventCreated = true;
		}
	}
	end() {
		setTimeout(this.timer.stop, 0);
	}
}
const leaderboard = new Leaderboard();
document.getElementById("start-btn").addEventListener("click", () => {
	new Game();
	popupMenu.classList.toggle("hide");
});

document.querySelector(".back-btn").addEventListener("click", () => {
	popupMenu.classList.toggle("hide");
	setTimeout(() => {
		endGamePopup.style.display = "none";
	}, 1000);
});
document.querySelector(".reset").addEventListener("click", () => {
	endGamePopup.style.display = "none";
	new Game();
});
document.getElementById("leaderboard").addEventListener("click", () => {
	leaderboardPopup.classList.toggle("hide");
});
document.querySelector(".score-board-back").addEventListener("click", () => {
	leaderboardPopup.classList.toggle("hide");
});
