#!/usr/bin/node

const fs = require('fs');

const path = process.argv[2];

fs.readFile(path, 'utf8', function (err, content) {
  console.log(err || content);
});
