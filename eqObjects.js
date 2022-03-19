const assertEqual = require('./assertEqual');

const eqObjects = (object1, object2) => {
  if (typeof object1 !== 'object' && typeof object2 !== 'object'){
    return object1 === object2;
  }
  if (typeof object1 === 'object' && typeof object2 !== 'object'||
  typeof object1 !== 'object' && typeof object2 === 'object'||
  Object.keys(object1).length !== Object.keys(object2).length) {{
    return false;
  }}
  for (const key in object1) {
    if (!Object.keys(object2).includes(key) ||
    !eqObjects(object1[key], object2[key])){
      return false;
    }
  } 
  return true
};

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true)
assertEqual(eqObjects({ a: { y: 5, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false)
assertEqual(eqObjects({ a: { y: 5, z: 1 }, b: 2 }, { a: 1, b: 2 }), false)

module.exports = eqObjects;