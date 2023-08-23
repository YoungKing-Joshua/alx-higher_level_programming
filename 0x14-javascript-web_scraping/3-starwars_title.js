#!/usr/bin/node

const request = require('request');

const movieEp = process.argv[2];
const apiUrl = 'https://swapi-api.hbtn.io/api/films/';

request(apiUrl + movieEp, function (err, response, body) {
  if (err) {
    console.log(err);
  } else if (response.statusCode === 200) {
    const responseData = JSON.parse(body);
    console.log(responseData.title);
  } else {
    console.log('Error code: ' + response.statusCode);
  }
});
