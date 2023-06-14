#!/usr/bin/node

// Square that defines a square and inherits 5-square.js
const shape = require('./5-square.js');

class Square extends shape {
	charPrint (c) {
		if (c === undefined) {
			this.print();
		} else {
			for (let i = 0; i < this.height; i++){
				let result = c.repeat(this.width);
				console.log(result);
			}
		}
	}
}

module.exports = Square;
