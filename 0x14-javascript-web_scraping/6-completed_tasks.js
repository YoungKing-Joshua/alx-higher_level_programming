#!/usr/bin/node
// Js script that computes the number of tasks

const req = require('request');
const inirl = process.argv[2];

req(inirl, (error, res, body) => {
  if (error) console.log(error);
  else {
    const sp = {};
    const urc = JSON.parse(body);

    for (let i = 0; i < urc.length; i++) {
      if (urc[i].completed === true) {
        if (sp[urc[i].userId] === undefined) {
          sp[urc[i].userId] = 0;
        }
        sp[urc[i].userId]++;
      }
    }

    console.log(sp);
  }
});
