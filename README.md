# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @alvintol/lotide`

**Require it:**

`const _ = require('@alvintol/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual()`: Returns a string confirming if two provided arrays are equal.
* `assertEqual()`: Returns a string confirming if two elements are equal.
* `assertObjectsEqual()`: Returns a string confirming is two objects are equal.
* `countLetters()`: Returns the length of the provided element
* `countOnly()`: Returns the total number of times a provided element shows up in an array.
* `eqArrays()`: Returns true/false if two arrays are equal.
* `eqObjects()`: Returns true/false if two objects are equal.
* `findKey()`: Returns the target key of an object using a callback function.
* `findKeyByValue()`: Returns the target key of an object by it's value.
* `flatten()`: Returns all elements into a single array, by removing all sub-arrays.
* `head()`: Returns the first element of a given value. 
* `letterPositions()`: Returns the index of the target element.
* `map()`: Returns a new array of outcome values, when all respective elements of the original array pass through a callback function.
* `middle()`: Returns the middle value(s) of a given array.
* `tail()`: Returns every element of a given array, except for the first.
* `takeUntil()`: Returns a new array of every element of the original array until a callback function returns true.
* `without()`: Returns a copy of the original array, without target elements 