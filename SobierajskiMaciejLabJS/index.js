//Zad1
/*const wait = 3000;
console.log("Początek skryptu...");
setTimeout(function(){
 console.log("Upłynęły minimum 3 sek...")
}, wait);
console.log("koniec skryptu..."); */

//Zad2
/* const fs = require("fs");
const data = fs.readFileSync('package.json');
console.log("Początek skryptu.");
console.log(data.toString());
console.log("Koniec skryptu.");*/

/* 
const fs = require("fs");
console.log("Początek skryptu.");
fs.readFile('package.json', function (err, data) {
 if (err) return console.error(err);
 console.log(data.toString());
});
console.log("Koniec skryptu.");*/


//Zad3
/*const http = require('http');
const hostname = '127.0.0.1';
const port = 8888;
const server = http.createServer(function(request, response) {
 response.statusCode = 200;
 response.setHeader('Content-Type', 'text/plain');
 response.end('Witaj, z serwera node.js !\n');

});
server.listen(port, hostname, () => {
 console.log(`Server running at http://${hostname}:${port}/`);
});*/

/*
const http = require('http');
const path = require("path");
const util = require("util");
const v8 = require("v8");
const hostname = '127.0.0.1';
const port = 8888;
const server = http.createServer((request, response) => {
 response.statusCode = 200;
 response.setHeader('Content-Type', 'text/plain');
 response.end('Hello, from node.js serwer !\n');

});
server.listen(port, hostname, () => {
 util.log(v8.getHeapStatistics());
 console.log(path.basename(__filename));
 util.log(path.join(__dirname, 'uploads','images'));
 console.log(`Server running at http://${hostname}:${port}/`);
});

*/

//Zad4
import normalizeUrl from 'normalize-url';
console.log("Moduł normalize-url jest używany do normalizacji URL-i, co oznacza, że przekształca różne formy URL-i do jednolitego formatu. Jest to przydatne, gdy chcesz: \nWyświetlać URL-e w spójny sposób. \nPrzechowywać je w bazach danych bez duplikatów. \nPorównywać URL-e w różnych kontekstach.\nUżywa się go importując normalizeUrl z modułu normalize-url i przy pomocy funkcji normalizeUrl wrzucamy tam Stringa z URlem i zostanie przeksztalcony w znormalizowany URL\n")
const urls = [
    'HTTP://www.Example.com:80/./path/to/resource?query=123#fragment',
    'https://user:password@sindresorhus.com',
    'www.example.com/path/to/resource',
    'http://example.com/?utm_source=example&utm_medium=example'
];

urls.forEach(url => {
    const normalizedUrl = normalizeUrl(url);
    console.log(`Oryginalny URL: ${url}`);
    console.log(`Znormalizowany URL: ${normalizedUrl}\n`);
});