const info = document.querySelector(".fa-info-circle");
const modal = document.querySelector(".modal-outer");
const startBtn = document.querySelector(".start");
canvas = document.querySelector("#canvas");

// Setting up the events for the modal pop-up
info.addEventListener("click", () => {
	modal.classList.remove("fade-out");
	modal.classList.add("fade-in");
});

startBtn.addEventListener("click", () => {
	modal.classList.replace("fade-in", "fade-out");
});

// Setting up the Canvas
ctx = canvas.getContext("2d");

// Setting initial placement randomly
let x = Math.floor(Math.random() * 800);
let y = Math.floor(Math.random() * 400);

// Styling of the dot
ctx.lineWidth = 8;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.strokeStyle = "black";

// Initial placement
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Handling the keys
window.addEventListener("keydown", e => {
	if (e.key.includes("Arrow")) {
		draw(e.key);
		e.preventDefault();
	}
});

// Function to draw on the canvas depending on the key
function draw(key) {
	switch (key) {
		case "ArrowUp":
			y -= 5;
			ctx.moveTo(x, y);
			ctx.lineTo(x, y);
			ctx.stroke();
			break;
		case "ArrowDown":
			y += 5;
			ctx.moveTo(x, y);
			ctx.lineTo(x, y);
			ctx.stroke();
			break;
		case "ArrowLeft":
			x -= 5;
			ctx.moveTo(x, y);
			ctx.lineTo(x, y);
			ctx.stroke();
			break;
		case "ArrowRight":
			x += 5;
			ctx.moveTo(x, y);
			ctx.lineTo(x, y);
			ctx.stroke();
			break;
	}
}
