"use strict";
import Card from "./card.js";
//const { default: Card } = require("./card");

let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");

const CANVAS_WIDTH = 800; //px
const CANVAS_HEIGTH = 600; //px

let card = new Card();
card.draw(context);

let lastTime = 0;

function gameLoop(timeStamp) {
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGTH);
    //==========Update and draw stuff in here============
    card.draw(context);
    //===================================================

    requestAnimationFrame(gameLoop);
}

gameLoop();
