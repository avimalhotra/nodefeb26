import fs from "node:fs";
import path from "node:path";
import EventEmitter from "node:events";
const emitter=new EventEmitter();

import { fileURLToPath } from 'url';
import { dirname } from 'node:path';
import { log } from "node:console";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// console.log(path.normalize("./src"));
// console.log(path.normalize("./src//img"));
// console.log(path.normalize("./src/img/../"));

// console.log( path.basename("src/app") );
// console.log( path.basename("src/app.js") );
// console.log( path.basename("src/public/home.html",".html") );
// console.log( path.basename("file:///C:/Users/Aashutosh/Desktop/techaltum%20assignment/arrays.html") );
// console.log(path.basename('C:\\temp\\myfile.html'));

// console.log( path.dirname("src/app/") );

// console.log( path.extname("src/app.js") );

// console.log( path.resolve("src/app.js") )
// console.log( path.resolve(__dirname) );
// console.log( path.resolve(__filename) );

// console.log(path.resolve("src","app"));

// console.log(path.join("./src","app"));


/* build in events */

// fs.ReadStream("./src/data.txt").on("open",()=>{
//      console.log("file open");
// });

// fs.ReadStream("./src/data.txt").on("error",()=>{
//      console.log("error found");
// });



/* custom events */

// emitter.on("setup",(user="user")=>{
//      console.log(`Setup done by ${user}`);
// });
// emitter.on("setup",(user="user")=>{
//      console.log(`again setup done by ${user}`);
// });

// emitter.emit("setup","avi");
// emitter.emit("setup","isha");


//  emitter.on("done",(x)=>{
//      console.log(`done ${x} `);
//  });
//   emitter.on("done",(x)=>{
//      // console.log(`done ${x} `);
//      if(x){ console.log(`done ${x} `); }
//  });


emitter.once("done",(x)=>{
     console.log(`done ${x} `);
 });
 

 emitter.emit("done",true);
 emitter.emit("done",true);
