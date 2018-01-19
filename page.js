var http = require('http');
const randomwords = require('random-words');
const wiki = require('wikijs').default;
const cheerio = require('cheerio');
const wikipedia = require('wikipedia-js');

http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  var word = randomwords();
  var html = "";
  // res.write('<!doctype html>\n<html lang="en">\n' +
  //   '\n<meta charset="utf-8">\n<title>Wiki Wormhole</title>\n' +
  //   '<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' +
  //   '\n\n<h1>Wormhole, suck one</h1>\n' +
  //   '<div id="content"></div>' +
  //   '\n\n'+word);
    // wiki().page(word).then(page => page.html()).then(console.log);
    // console.log(html);
    // console.log(page.info());
    var query = word;
 // if you want to retrieve a full article set summaryOnly to false.
 // Full article retrieval and parsing is still beta
 var options = {query: query, format: "html", summaryOnly: true};
 wikipedia.searchArticle(options, function(err, htmlWikiText){
   if(err){
     console.log("An error occurred[query=%s, error=%s]", query, err);
     return;
   }
   res.write('<!doctype html>\n<html lang="en">\n' +
     '\n<meta charset="utf-8">\n<title>Wiki Wormhole</title>\n' +
     '<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' +
     '\n\n<h1>Wormhole, suck one</h1>\n' +
     '<div id="content"></div>' +
     '\n\n'+word+htmlWikiText);
     res.end();
   // console.log("Query successful[query=%s, html-formatted-wiki-text=%s]", query, htmlWikiText);
   // const $ = cheerio.load(htmlWikiText);
   // res.write(htmlWikiText);
   // $.html();
   // console.log(htmlWikiText);
 });
 // res.write(htmlWikiText);
}).listen(8888, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8888');
