#!/usr/bin/node
// Js script that prints all characters of a Star Wars movie

const req = require('request');

const mId = process.argv[2];
const inirl = 'https://swapi-api.hbtn.io/api/films/';
const rl = inirl + mId + '/';

req(rl, (error, res, body) => {
  if (error) {
    console.log(error);
  } else {
    const urs = JSON.parse(body).characters;
    for (let i = 0; i < urs.length; i++) {
      req(urs[i], (error, res, body) => {
        if (error) {
          console.log(error);
        } else {
          console.log(JSON.parse(body).name);
        }
      });
    }
  }
});
