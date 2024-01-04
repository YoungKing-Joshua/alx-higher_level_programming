#!/usr/bin/node
// Js script that prints all characters of a Star Wars

const req = require('request');
const inirl = `https://swapi-api.hbtn.io/api/films/${process.argv[2]}/`;

req(inirl, (error, res, body) => {
  if (error) console.log(error);
  const urs = JSON.parse(body).characters;
  getC(urs, 0);
});

// Ensure character names are printed
const getC = function (inirl, j) {
  req(inirl[j], (error, res, body) => {
    if (error) {
      console.log(error);
    } else {
      console.log(JSON.parse(body).name);
      if (++j < inirl.length) {
        getC(inirl, j);
      }
    }
  });
};
