#!/usr/bin/node
/*
 * a script that prints a message depending of the number of arguments passed
 */

if (process.argv.length < 3) {
  console.log('No argument');
} else if (process.argv.length > 3) {
  console.log('Arguments found');
} else {
  console.log('Argument found');
}
