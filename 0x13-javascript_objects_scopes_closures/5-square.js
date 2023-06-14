#!/usr/bin/node

/* class Square that defines a square and inherits
 * from 4-rectangle.js
 */

const shape = require('./4-rectangle');

class Square extends shape {
	constructor(size) {
		super(size, size);
	}
};

module.exports = Square;

