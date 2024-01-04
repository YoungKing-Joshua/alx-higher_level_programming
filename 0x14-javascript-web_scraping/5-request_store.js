#!/usr/bin/node
// Js script that gets the contents of webpage

const req = require('request');
const fs = require('fs');

const inirl = process.argv[2];
const filep = process.argv[3];

req(inirl, (error, res, body) => {
  if (error) {
    console.log(error);
  } else {
    fs.writeFile(filep, body, 'utf8', (error) => {
      if (error) {
        console.log(error);
      }
    });
  }
});
