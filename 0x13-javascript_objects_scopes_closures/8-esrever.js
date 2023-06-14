#!/usr/bin/node

//function that returns the reversed version of a list

exports.esrever = (list) =>{
	const r = [];
	return list.reduceRight((array, current) =>{
		array.push(current);
		return array;
	}, r);
};
