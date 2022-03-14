const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const assertArraysEqual = (first, second) => eqArrays(first, second) ? console.log(`✅ Assertion Passed: [${first}] === [${second}] ✅`) : console.log(`🛑 Assertion Failed: [${first}] !== [${second}] 🛑`);

module.exports = eqArrays;