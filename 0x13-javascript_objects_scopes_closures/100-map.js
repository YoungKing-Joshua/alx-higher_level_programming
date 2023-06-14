#!/usr/bin/node

// script that import array and computes a new array
const { list } = require('./100-data.js');

const nl = list.map((item, index) => item * index))

console.log(list);
console.log(nl);

