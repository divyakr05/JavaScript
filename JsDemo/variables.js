//global variable
var x = 10;
function test(){
    //local variable
    var y = 20;
    console.log(y);
}
console.log(x);
//console.log(y); //this will thorw error as --> y is not defined
test();

//variable re-declaration is allowed in JS
var browser = "chrome";
var browser = "firefox";
//variable re-initialization is allowed in JS
browser = "edge";
console.log(browser);
//default value of var keyword is 'undefined' if it is not initialized
var a;
console.log(a);
a = "hello world";
console.log(a);

//issue with var
var flag = "hey divya";
var t = 4;
if(t>3){
    var flag = "hey xyz";
}
console.log(flag);//here we cannot get the initial var value as it is re-declared with another value

// "***************************************************************************************"
//scope of let --> block : {}
let msg = "hey how are you?"
let time = 4;
if(time > 3){
    let msg = "hey divya how are you?"
    console.log(msg);
}
console.log(msg);

//default value of const keyword is 'undefined' if it is not initialized
let i;
console.log(i);

//let re-declaration is not allowed in JS
let m = 10;
//let m = 20;//this will throw error 'Identifier 'a' has already been declared'

//let re-initialization is allowed in JS
let n = 10;
n = 15;
console.log(n);

// "***************************************************************************************"

//const re-initialization is not allowed in JS - hrs,days,months,total no.of countries,states etc
const days = 7;
//days = 8; //this will throw error 'Assignment to constant variable'
console.log(days);

//const declaration must be initialized
//const months; //this will throw error

// "***************************************************************************************"

//data type - number,string,boolean,null,undefined,
let q = 4
console.log(q)
console.log(typeof(q))

let p = "hello good morning"
console.log(p)
console.log(typeof(p))

let r = true
console.log(r)
console.log(typeof(r))

let check = null
console.log(check)
console.log(typeof(check))