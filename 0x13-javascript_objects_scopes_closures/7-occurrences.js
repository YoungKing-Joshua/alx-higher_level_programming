#!/usr/bin/node

// function that returns the number of occurrences
exports.nbOccurences = function (list, searchElement) {
	return list.filter((element) => element === searchElement).length;
};
