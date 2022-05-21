"use strict";

const canvas = document.querySelector("canvas");

const GAME_WIDTH = window.innerWidth;
const GAME_HEIGHT = window.innerHeight;

if(canvas){
    // const ctx = canvas.getContext("2d");
    canvas.width = GAME_WIDTH;
    canvas.height = GAME_HEIGHT;
}

