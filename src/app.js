/* CJS modules import */
// const os=require("os");
// const colors=require("colors");
// const x = require("./data");


/* EJS import */
import os from "node:os";
import colors from "colors";

// import sayHi from './data.js';                       // single
import {pi, hi} from "./data.js";                           // multiple


console.log(process.version);
console.log( os.cpus().length );

console.log( "Alert".red );
console.log( "Warning".yellow);
console.log( "Info".blue);

// console.log( x.hi() );
// console.log( x.p );

console.log( pi );
console.log( hi() );