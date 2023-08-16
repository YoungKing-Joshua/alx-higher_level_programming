#!/usr/bin/node

//a script that prints a square

if (process.argv[2] === undefined || isNaN(process.argv[2])) {
  console.log('Missing size');
} else {
  const x = Number(process.argv[2]);
  let s = 0;
  while (s < x) {
    console.log('X'.repeat(x));
    s++;
  }
}
