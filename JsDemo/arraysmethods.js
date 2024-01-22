//1. map -- calls the callback fn on each element of the array and returns a new array of result

let arr = [1,2,3,4,5,6]
let dblarr = arr.map((e) => e*2)
console.log(dblarr)

//converting fahrenheit to celcius using map
let tempInFah = [32,68,86,104,212]
let tempInCel = tempInFah.map((e) => (e-32)*(5/9)) //anonymous function
console.log(tempInCel)

//converting fahrenheit to celcius using map - using separate function
let fah = [32,68,86,104,212]
function fahToCel(fah){
    return (fah-32)*(5/9);
}
let cel = fah.map(fahToCel)
console.log(cel)

console.log("-------------")

//2. filter
let employees = [
    {"name":"john","age":30,"gender":"male"},
    {"name":"george","age":35,"gender":"male"},
    {"name":"lena","age":25,"gender":"female"},
    {"name":"lisa","age":28,"gender":"female"},
    {"name":"peter","age":22,"gender":"male"}
]

let femEmp = employees.filter((e) => {return e.age> 25 && e.gender === "female"});
console.log(femEmp)

console.log("-------------")

let scores = [12,13,14,15,16]
let newFilterEvenScore = scores.filter(score => score%2==0)
console.log("new array with Filter: " +newFilterEvenScore)

console.log("-------------")

//3. reduce

let numb = [1,2,3,4,5]
//num --> iterator
//acc --> accumulator
//1 --> initial value of accumulator
let mulResult = numb.reduce((acc,num) => acc*num,1)
console.log("Result of multiplication: " +mulResult)

console.log("-------------")

//max number in the array
let arr1 = [47,29,17,4,98,78]
let m = arr1.reduce((max,num) => {
    if(num > max){
        return num
    }
    else{
        return max
    }
},(arr1[0]))
console.log(m)

console.log("-------------")

let marks = [12,20,30,30,7,5,13]
let totalMarks = marks.reduce((sum,mark) => sum+mark,0)
console.log("Total marks: " +totalMarks)

console.log("-------------")

//min number in the array
let arr2 = [65,8,3,67,32,98,79]
let min = arr2.reduce((m,n) => {
    if(m > n){
        return n;
    }
    else{
        return m;
    }
},arr2[0])
console.log(min)
console.log("-------------")

let cartItems = [{"name":"A", "price":500},
                 {"name":"B", "price":1000},
                 {"name":"C", "price":400},
                 {"name":"D", "price":800},
                 {"name":"E", "price":100},   
]

let totalCost = cartItems.reduce((total,e) => total+e.price, 0)
console.log(totalCost)
console.log("-------------")

arr = [8,15,34,19,3,27]
let ressArr = arr.filter(a => a%2==0).map(a => a*2).reduce((s,a) => s+a,0)
console.log(ressArr)