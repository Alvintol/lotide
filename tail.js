const assertEqual = require('./assertEqual');

const tail = array => array.slice(1);

console.log(tail(["Yo Yo", "Lighthouse", "Labs"]))
console.log(tail([1, 2, 3]))
assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertEqual(tail([1, 2, 3]), [2, 3]);
// assertEqual(tail(["Yo Yo", "Lighthouse", "Labs", 'test']), ["Lighthouse", "Labs", 'test']);

module.exports = tail;