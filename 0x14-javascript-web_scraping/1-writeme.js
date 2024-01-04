#!/usr/bin/node
// Js script tht write string to file

const fs = require('fs');

const filep = process.argv[2];
const ctext = process.argv[3];

fs.writeFile(filep, ctext, 'utf8', (error) => {
  if (error) {
	  console.log(error);
  } else {
	  console.log(`Successfully written to ${filep}`);
  }
});
