'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

 var pieces = '';

function jadenCase(text) {
  var pieces = text.split(" ");
  for (var i = 0; i < pieces.length; i++) {
    var j = pieces[i].charAt(0).toUpperCase();
    pieces[i] = j + pieces[i].substring(1);
  }
  return pieces.join(" ");
}

jadenCase('hello magnificent world')

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(typeof pieces, 'string')
assert.strictEqual(jadenCase('hello magnificent world'), 'Hello Magnificent World')

// End of tests */
