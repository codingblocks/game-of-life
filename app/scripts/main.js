/**
 * scripts/main.js
 *
 * This is the starting point for your application.
 * Take a look at http://browserify.org/ for more info
 */

'use strict';

var App = require('./app.js');

var app = new App();

app.beep();

// get row / height
// set up the table
var dom = [];
var rows = 27, cols = 48;
var table = document.createElement("table");
for(var j = 0; j < rows; j++) {
    dom[j] = [];
    var tr = document.createElement("tr");
    for(var i = 0; i < cols; i++) {
        var td = document.createElement("td");
        td.innerHTML = "&nbsp;"
        tr.appendChild(td);
        dom[j].push(td);
  }
  table.appendChild(tr);
}

document.body.appendChild(table);

// randomize
var initialState = [];
for(var j = 0; j < rows; j++) {
    initialState.push([]);
    for(var i = 0; i < cols; i++) {
        initialState[j][i] = (Math.floor((Math.random() * 3) + 1) == 1) ? 1 : 0;
    }
}

// go!
var GameOfLife = require('game-of-life-logic');
var gameOfLife = new GameOfLife(cols, rows)
gameOfLife.copyMatrixAt(1, 1, initialState);

setInterval(function() {
    gameOfLife.tick();
    for(var j = 0; j < rows; j++) {
        for(var i = 0; i < cols; i++) {
            dom[j][i].className = gameOfLife.matrix[j][i] ? 'on' : 'off';
        }
    }
}, 100);