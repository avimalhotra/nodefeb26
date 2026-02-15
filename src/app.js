// console.log(__filename);
// console.log(__dirname);

// console.log(process.version);
// console.log(process.versions);

const { log } = require('console');
const fs = require('fs');

// const data = fs.readFileSync('src/data.txt',{encoding:'utf-8'});
// console.log(data);  

// fs.readFile('src/data.txt',{encoding:"utf-8"},(err,output)=>{
//     if(err){
//         console.warn("error");
//     }
//     else{
//         console.log(output);
//     }
// });


/* outside i/o */
// console.log( 1 );
// setTimeout(()=>console.log( 2 ));
// setImmediate(()=>console.log(3));
// Promise.resolve(4).then(i=>console.log(i));
// console.log( 5 );


/* inside i/o */
fs.readFile('src/data.txt',{encoding:"utf-8"},(err,output)=>{
    if(err){
        console.warn("error");
    }
    else{
        console.log(output);
        console.log( 1 );
        setTimeout(()=>console.log( 2 ));
        setImmediate(()=>console.log(3));
        Promise.resolve(4).then(i=>console.log(i));
        process.nextTick(()=>console.log(5));
        console.log( 6 );
    }
});