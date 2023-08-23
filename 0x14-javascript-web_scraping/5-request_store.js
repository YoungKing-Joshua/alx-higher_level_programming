#!/usr/bin/node
const fs = require('fs');
const request = require('request');

const pathU = process.argv[2];
const pathF = process.argv[3];

request(pathU).pipe(fs.createWriteStream(pathF));
