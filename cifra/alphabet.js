let alphabet = [];

for (let i = 97; i <= 97+25; i += 1) {
  alphabet.push(String.fromCharCode(i));
}

for (let i = 65; i <= 65+25; i += 1) {
  alphabet.push(String.fromCharCode(i));
}

if (!module.parent)
  console.log(alphabet);

module.exports = function alphabetHandler() { return alphabet; };