#!/usr/bin/node

// script that imports a dictionary of occurrences
const { dict } = require('./101-data.js');

const nd = {};

for (const key in dict) {
	if (nd[dict[key]] === undefined) {
		nd[dict[key]] = [];
	}
	nd[dict[key]].push(key);
}

console.log(nd);
