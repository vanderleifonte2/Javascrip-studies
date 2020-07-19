'use strict';
const alphabet = require('./alphabet');
let d = 'CIFRADECESARXYZ';
let args = process.argv.slice(2);
if (args.length === 1) d = args[0];
let out = '';

let lastChars = {};
let lastCharCounter = 3;

const sealedAlphabet = alphabet().slice(26);

for (let i = sealedAlphabet.length - 3; i < sealedAlphabet.length; i += 1) {
  let curr = sealedAlphabet[i];
  let alphabetCode = curr.charCodeAt(0);
  let cesarCode = null;
  if (lastCharCounter === 3) {
    cesarCode = sealedAlphabet[0].charCodeAt(0);
  } else if (lastCharCounter === 2) {
    cesarCode = sealedAlphabet[1].charCodeAt(0);
  } else if (lastCharCounter === 1) {
    cesarCode = sealedAlphabet[2].charCodeAt(0);
  }
  lastChars[curr] = {
    alphabet: alphabetCode,
    cesar: { code: cesarCode, char: String.fromCharCode(cesarCode) },
  };
  lastCharCounter -= 1;
}

for (let i = 0; i < d.length; i += 1) {
  if (Object.keys(lastChars).indexOf(d[i]) > -1) {
    out += lastChars[d[i]].cesar.char;
  } else {
    out += String.fromCharCode(d[i].charCodeAt(0) + 3);
  }
}

console.log(out);