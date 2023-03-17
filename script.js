// Initialize canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Set up ball
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;

// Set up paddles
var paddleHeight = 75;
var paddleWidth = 10;
var paddle1Y = (canvas.height-paddleHeight)/2;
var paddle2Y = (canvas.height-paddleHeight)/2;

// Set up keys
var upPressed = false;
var downPressed = false;
var wPressed = false;
var sPressed = false;

// Draw ball function
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

// Draw paddles function
function drawPaddles() {
    ctx.fillStyle = "#0095DD";
    ctx.fillRect(0, paddle1Y, paddleWidth, paddleHeight);
    ctx.fillRect(canvas.width-paddleWidth, paddle2Y, paddleWidth, paddleHeight);
}

// Key down event handler
function keyDownHandler(e) {
    if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = true;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = true;
    }
    else if(e.key == "w" || e.key == "W") {
        wPressed = true;
    }
    else if(e.key == "s" || e.key == "S") {
        sPressed = true;
    }
}

// Key up event handler
function keyUpHandler(e) {
    if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = false;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = false;
    }
    else if(e.key == "w" || e.key == "W") {
        wPressed = false;
    }
    else if(e.key == "s" || e.key == "S") {
        sPressed = false;
    }
}

// Move paddles function
function movePaddles() {
    if (upPressed && paddle2Y > 0) {
        paddle2Y -= 7;
    }
    else if (downPressed && paddle2Y < canvas.height - paddleHeight) {
        paddle2Y += 7;
    }
    if (wPressed && paddle1Y > 0) {
        paddle1Y -= 7;
    }
    else if (sPressed && paddle1Y < canvas.height - paddleHeight) {
        paddle1Y += 7;
    }
}

// Collision detection function
function collisionDetection() {
    // Ball hits top or bottom of canvas
    if(y + dy < ballRadius || y + dy > canvas.height-ballRadius) {
        dy = -dy;
    }
    // Ball hits paddle 1
    else if
