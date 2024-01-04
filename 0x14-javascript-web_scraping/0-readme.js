#!/usr/bin/node
// Node script read and print content of a file

const fs = require('fs');
const filep = process.argv[2];

fs.readFile(filep, 'utf8', (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data.toString());
  }
});
