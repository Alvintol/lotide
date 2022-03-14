const assertEqual = require('../assertEqual');
const tail = require('../tail');

assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length, 2);
assertEqual(tail([1, 2, 3]).length, 2);

//53min