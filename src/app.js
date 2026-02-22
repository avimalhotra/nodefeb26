import os from "node:os";
import fs from "node:fs";
import xlsx from 'node-xlsx';

// console.log( os.cpus().length );
// console.log( os.arch() );
// console.log( os.totalmem()/1073741824 );
// console.log( os.freemem()/1073741824 );
// console.log(os.networkInterfaces());
// console.log(os.platform());
// console.log(os.type());
// console.log(os.uptime()/3600);
// console.log(os.userInfo());


// const data= fs.readFileSync("src/data.txt",{encoding:'utf-8'});
// console.log( data );


// fs.readFile("src/data.csv",{encoding:"utf-8"},(err,data)=>{
//      if(err){ console.warn(err) }
//      else{console.log(data)}
// });

// fs.stat("src/data.txt",(err,stat)=>{
//      if(err){ console.warn(err) }
//      else{
//           console.log(stat.size);
//           console.log(stat.isFile());
//           console.log(stat.isDirectory());
//      }
// });

// fs.writeFile("src/data.txt","hello avi",'utf-8',(err)=>{
//      console.log(err)
// });

// fs.appendFile("src/data.txt",`hello ${new Date().toLocaleString()}, \n`,'utf-8',(err)=>{
//      console.log(err)
// });


// fs.unlink("src/demo.html",(err)=>{
//      if(err){
//           console.warn(err);
//      }
//      else{
//           console.log("file deleted")
//      }
// });


// parseXlsx("src/data.xlsx").then(data=>{
//      console.log(data);
// });


// const workSheetsFromFile = xlsx.parse(`src/data.xlsx`);
// console.log(workSheetsFromFile[0].data);


console.log( "done" );