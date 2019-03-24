"use strict";

Point.prototype.moveRight = function(dx) {
        this.x += dx;
        console.log('moved to: ', this.x)
    }
  
  function Point(x, y) {
    this.x = x;
    this.y = y;
  }
  
  let point1 = new Point(3, 5);
  let point2 = new Point(7, 10);

  point1.moveRight(5);
  point2.moveRight(5);
  