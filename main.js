const randomwords = require('random-words');

console.log('hello, you are running node');

var words = [];

for(var i = 0; i < 10; i++){
  words.push(randomwords());
  console.log(words[i]);
}

// console.log(word);
