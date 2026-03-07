import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const port=80;

const app=http.createServer( (req,res)=>{
    // res.write("Hello World");
    // res.write(`<h1>Hello World</h1>`);
    // res.statusCode=200;
    // res.setHeader("Content-Type","text/html");
   
    // res.write(`<h1>`);
    // res.write(`Hello, today is ${new Date().toLocaleString()}, ${req.url}, ${req.method}, ${req.headers.host}`);
    // res.write(`</h1>`);
    // res.end();

    if(req.method=="GET" && req.url=="/"){
        fs.readFile(path.resolve("src/home.html"),{encoding:'utf-8'},(err,data)=>{
            if(err){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("homepage page not found");
                res.end();
            }
            else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data);
                res.end();
            }
        })
    }
    
    else{
            res.writeHead(404,{'Content-Type':'text/html'});
            res.write("Error found");
            res.end();
    }

});

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
});