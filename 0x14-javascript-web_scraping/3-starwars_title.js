#!/usr/bin/node
// Js script that prints the title of a Star Wars movie by movie ID

const req = require('request');

const mId = process.argv[2];
const apiUrl = 'https://swapi-api.hbtn.io/api/films/';

req(apiUrl + mId + '/', (error, res, body) => {
  const mD = JSON.parse(body);
  if (error) {
    console.log(error);
  } else {
    console.log(mD.title);
  }
});
