#!/usr/bin/node

const request = require('request');
const movieEp = process.argv[2];
const pathU = 'https://swapi-api.hbtn.io/api/films/';

request.get(pathU + movieEp, function (error, res, body) {
  if (error) {
    console.log(error);
  }
  const data = JSON.parse(body);
  const charc = data.characters;

  for (const n of charc) {
    request.get(n, function (error, charcRes, charcBody) {
      if (error) {
        console.log(error);
      }
      const dB = JSON.parse(charcBody);
      console.log(dB.name);
    });
  }
});
