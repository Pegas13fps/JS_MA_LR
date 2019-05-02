"use strict";

function warnTheSheep(queue) {
    queue = queue.reverse().indexOf('wolf');
    return (queue === 0) ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ queue }! You are about to be eaten by a wolf!`;
}

warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]);
warnTheSheep(["sheep", "sheep", "wolf"]);