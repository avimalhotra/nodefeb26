function sayHi(){
     return "Hello Node JS";
}

const pi=3.14;


/* CJS Modules */
// exports.hi=sayHi;;
// exports.p=pi;

// module.exports=sayHi;                   /* export single */


/* EJS Modules */
// export default sayHi;

export { pi };
export { sayHi as hi };