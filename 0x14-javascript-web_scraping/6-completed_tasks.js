#!/usr/bin/node

const request = require('request');

const pathU = process.argv[2];

request(pathU, function (error, response, body) {
  if (error) {
    console.log(error);
  } else if (response.statusCode === 200) {
    const comTask = {};
    const tasks = JSON.parse(body);

    for (const n in tasks) {
      const task = tasks[n];
      if (task.completed === true) {
        if (comTask[task.userId] === undefined) {
          comTask[task.userId] = 1;
        } else {
          comTask[task.userId]++;
        }
      }
    }
    console.log(comTask);
  } else {
    console.log('An error occured. Status code: ' + response.statusCode);
  }
});
