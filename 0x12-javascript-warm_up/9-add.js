#!/usr/bin/node
// a script that prints the addition of 2 integers

function add (a, b) {
  const sum = a + b;
  console.log(sum);
}

add(Number(process.argv[2]), Number(process.argv[3]));
