#!/usr/bin/node

const request = require('request');

const movieEp = process.argv[2];
const pathU = 'https://swapi-api.hbtn.io/api/films/';


request(pathU + movieEp, function (error, response, body) {
  if (!error) {
    const charc = JSON.parse(body).characters;
    printCharc(charc, 0);
  }
});

function printCharc (charc, index) {
  request(charc[index], function (error, response, body) {
    if (!error) {
      console.log(JSON.parse(body).name);
      if (index + 1 < charc.length) {
        printCharc(charc, index + 1);
      }
    }
  });
}
