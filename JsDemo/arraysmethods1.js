//1. every() --> check every element is satisfying the condition or not

let num = [7,10,54,32,17]
let flag = num.every((e) => e<10)
console.log(flag)

//2. some() --> check atleast one of the elements is satisfying the condition or not

let num1 = [7,5,54,32,17]
let flag1 = num.some((e) => e%2===0)
console.log(flag1)

//3. find() --> returns the first element satisfying the condition
let num2 = [7,3,54,32,17]
let flag2 = num2.find((e) => e%2===0)
console.log(flag2)

let num3 = [7,3,1,33,17]
let flag3 = num3.find((e) => e%2===0)
console.log(flag3)

//4. indexOf() --> returns the index
let fruits = ['apple','watermelon','banana','pear','grapes','banana']
let indexOfOrange = fruits.indexOf('orange')
console.log(indexOfOrange)
let indexOfBanana = fruits.indexOf('banana')
console.log(indexOfBanana)

//5. lastIndexOf() --> returns the index of last element if duplicate elements exist
let lastIndexOfBanana = fruits.lastIndexOf('banana')
console.log(lastIndexOfBanana)

//6. reverse() --> reverse the array
let shapes = ['circle','square','triangle','rectangle']
let rev = shapes.reverse(shapes)
console.log(rev)


//7. sort() --> sort an array based on alphabetical order - numatic, capital, small letters...
let products = ['macbook','imac','samsung','canon','123test','Tshirt']
let prodSort = products.sort()
console.log(prodSort)
