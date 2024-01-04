#!/usr/bin/node
// Js script that prints the number of movies

const req = require('request');
const apiUrl = process.argv[2];

req(apiUrl, (error, res, body) => {
  if (error) console.log(error);
  else {
    let n = 0;
    const urc = JSON.parse(body).results;
    for (let i = 0; i < urc.length; i++) {
      const mC = urc[i].characters;
      for (let j = 0; j < mC.length; j++) {
        if (mC[j].search('18') > 0) {
          n++;
        }
      }
    }
    console.log(n);
  }
});
