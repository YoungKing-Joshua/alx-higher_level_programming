#!/usr/bin/node

// Write a script that prints x times “C is fun”

let c = Number(process.argv[2]);
if (isNaN(c)) {
  console.log('Missing Number of occurrences');
} else if (c > 0) {
  for (c; c > 0; --c) {
    console.log('C is fun');
  }
}
