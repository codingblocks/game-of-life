/**
 * scripts/main.js
 *
 * This is the starting point for your application.
 * Take a look at http://browserify.org/ for more info
 */

'use strict';

var App = require('./app.js');

var app = new App();

// randomize
// var initialState = [];
// for(var j = 0; j < rows; j++) {
//     initialState.push([]);
//     for(var i = 0; i < cols; i++) {
//         initialState[j][i] = (Math.floor((Math.random() * 3) + 1) == 1) ? 1 : 0;
//     }
// }
var initialState = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0],
    [0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0],
    [0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0],
    [0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0],
    [0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0],
    [0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];


// get row / height
// set up the table
var dom = [];
var rows = initialState.length, cols = initialState[0].length, speed = 200, steps = 10, holdFrames = 5;
var table = document.createElement("table");
for(var j = 0; j < rows; j++) {
    dom[j] = [];
    var tr = document.createElement("tr");
    for(var i = 0; i < cols; i++) {
        var td = document.createElement("td");
        td.innerHTML = ""
        tr.appendChild(td);
        td.className = initialState[j][i] === 1 ? "on" : "off";
        dom[j].push(td);
  }
  table.appendChild(tr);
}

document.body.appendChild(table);

// go!
var GameOfLife = require('game-of-life-logic');
var gameOfLife = new GameOfLife(cols, rows)

var states = [];
gameOfLife.copyMatrixAt(0, 0, initialState);
var clone = require('clone');

for(var i = 0; i < holdFrames; i++) {
    states.push(initialState);
}
steps += holdFrames;

for(var i = 0; i < steps; i++) {
    states.push(clone(gameOfLife.matrix));
    gameOfLife.tick();
}

// now backwards!
for(var i = 1; i < steps; i++) {
    var rev = steps - i - 1;
    states.push(clone(states[rev]));
}

var draw = function(matrix) {
    for(var j = 0; j < rows; j++) {
        for(var i = 0; i < cols; i++) {
            if(matrix[j][i]) {
                if(dom[j][i].className == 'on') {
                    dom[j][i].className = 'on-darker';
                } else if(dom[j][i].className == 'on-darker') {
                    dom[j][i].className = 'on-darkest';
                } else {
                    dom[j][i].className = 'on';
                }
            } else {
                dom[j][i].className = 'off';
            }
        }
    }
}

var counter = 0;
setInterval(function() {
    draw(states[counter]);
    counter = (counter + 1) % states.length;
}, speed);