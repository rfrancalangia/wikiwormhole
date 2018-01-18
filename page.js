var http = require('http');
const randomwords = require('random-words');
const wiki = require('wikijs').default;
http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  var word = randomwords();
  res.write('<!doctype html>\n<html lang="en">\n' +
    '\n<meta charset="utf-8">\n<title>Test web page on node.js</title>\n' +
    '<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' +
    '\n\n<h1>Euro 2012 teams</h1>\n' +
    '<div id="content"><p>The teams in Group D for Euro 2012 are:</p><ul><li>England</li><li>France</li><li>Sweden</li><li>Ukraine</li></ul></div>' +
    '\n\n'+word);
    wiki().page(word).then(page => page.html()).then(console.log);
    // console.log(page.info());
  res.end();
}).listen(8888, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8888');
