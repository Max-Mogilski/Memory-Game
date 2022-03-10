const tiles = document.querySelectorAll(".tile");
const popupMenu = document.querySelector(".game-menu");
const score = document.querySelector(".score");
const endGamePopup = document.querySelector(".game-end");
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
const pairToCheck = [];
let checkedPairs = 0;
let ableToClick = true;
let isEventCreated = false;
let isTimerRunning = true;

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
				console.log(isTimerRunning);
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
		score.textContent = `${this.minutesScore}:${this.secondScore}`;
		endGamePopup.style.display = "block";
		isTimerRunning = false;
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
		console.log("Game has started!");

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
				console.log(e.target);
				const tile = e.target.parentElement;
				if (!pairToCheck[0]) {
					pairToCheck.push(tile);
				} else if (!pairToCheck[1]) {
					pairToCheck.push(tile);
					compareTile(...pairToCheck);
					if (checkedPairs >= tiles.length) {
						console.log("Success! You won!");
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
