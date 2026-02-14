// console.log(__filename);
// console.log(__dirname);

// console.log(process.version);
// console.log(process.versions);

console.time("t");
const fs = require('fs');

// const data = fs.readFileSync('src/data.txt',{encoding:'utf-8'});
// console.log(data);  

fs.readFile('src/data.txt',{encoding:"utf-8"},(err,output)=>{
    if(err){
        console.warn("error");
    }
    else{
        console.log(output);
    }
});

console.timeEnd("t");