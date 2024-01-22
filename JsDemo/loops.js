//for loop

for(let i=0; i<=10; i++){
    console.log(i);
}
console.log("-------------")

//for...of loop

const array = [1,2,3,4,5]
for(const e of array){
    console.log(e)
}
console.log("-------------")

//using length of array

const arrray1 = [1,2,3,4,5]
for(let i=0; i<arrray1.length; i++){
    console.log(arrray1[i])
}
console.log("-------------")

//using while

let p = 1;
while(p <= 10){
    console.log(p)
    p++
}

console.log("-------------")

//do-while
console.log("inside do - while")
let h = 1;
do{
    console.log(h)
    h++
}
while(h <= 10)

console.log("-------------")

//break

for(let j=1; j<=10; j++){
    if(j%5 == 0){
        console.log("Hi");
        break;
    }
    console.log(j)
}

console.log("-------------")

//for...in loop on object

const user = {
    "name" : "abc",
    "age" : 30,
    "city" : "Munich"

}

for(const key in user){
    console.log(key +" : "+ user[key])
}

console.log("-------------")
//for...in loop on array

const br = ["chrome","ff","edge"]

for(const e in br){
    console.log(e)
    console.log(br[e])
}
