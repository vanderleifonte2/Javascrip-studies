'use strict';
const alphabet = require('./alphabet');
let d = 'FLIUDGHFHVDUABC';
let args = process.argv.slice(2);
if (args.length === 1) d = args[0];
let out = '';

let headChars = {};
let headCharCounter = 3;

const sealedAlphabet = alphabet().slice(26);

for (let i = 0; i < 3; i += 1) {
  let curr = sealedAlphabet[i];
  let alphabetCode = curr.charCodeAt(0);
  let cesarCode = null;
  if (i === 0) {
    cesarCode = sealedAlphabet[sealedAlphabet.length - 3].charCodeAt(0);
  } else if (i === 1) {
    cesarCode = sealedAlphabet[sealedAlphabet.length - 2].charCodeAt(0);
  } else if (i === 2) {
    cesarCode = sealedAlphabet[sealedAlphabet.length - 1].charCodeAt(0);
  }
  headChars[curr] = {
    alphabet: alphabetCode,
    cesar: { code: cesarCode, char: String.fromCharCode(cesarCode) },
  };
  headCharCounter += 1;
}

for (let i = 0; i < d.length; i += 1) {
  if (Object.keys(headChars).indexOf(d[i]) > -1) {
    out += headChars[d[i]].cesar.char;
  } else {
    out += String.fromCharCode(d[i].charCodeAt(0) - 3);
  }
}

console.log(out);