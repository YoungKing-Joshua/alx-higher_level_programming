#!/usr/bin/node
// Js script that displays the status code of a GET request

const req = require('request');
const link = process.argv[2];

req(link, (error, res) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`code: ${res.statusCode}`);
  }
});
