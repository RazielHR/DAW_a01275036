const fs = require("fs");
const http = require("http");

let arr = [10,20,30,40,50,60,70,80,90,100];
console.log(arr.reduce(	(a,b) => a+b)/arr.length);

let array = [-2, 3, 10, -3, 0, 5, -120];
console.log(array.sort( (a,b) => a-b ));

let string = "Hola desde app.js";
fs.writeFileSync("test.txt",string);

const hostname = "127.0.0.1";
const port = 3000;

const requestListener = (req, res) => {
    fs.readFile(__dirname + '/Lab01/index.html', (err, cont) => {
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(cont);
        res.end();
    });
};

const server = http.createServer(requestListener);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

