#!/usr/bin/node

// function that prints the number of arguments
exports.logMe = (() => {
  let count = 0;

  return (item) => {
    console.log(`${count++}: ${item}`);
  };
})();

