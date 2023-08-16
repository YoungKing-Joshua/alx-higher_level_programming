#!/usr/bin/node
// a script that prints the first argument passed to it



const value = process.argv[2];
if (value === undefined) {
  console.log('No argument');
} else {
  console.log(value);
}
