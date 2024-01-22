//array declaration
let myArray = []; //empty array
let numbers = [1,2,3,4,5]; //array of numbers
let fruits = ["apple","banana","orange"]; //array of strings

let lang = ["java","python","js"];
//1.push -- add at the end of an array
lang.push("Ruby","HTML")
console.log(lang)

//2.pop -- remove an element from end
let nums = [1,2,3,4,5,6]; 
nums.pop()
console.log(nums)

//3.shift -- remove first element
let colors = ["blue","green","red","yellow"]
let fst = colors.shift()
console.log(fst)
console.log(colors)

//4.unshift -- add element at the start
let shapes = ["circle","rectangle","square"]
shapes.unshift("triangle")
console.log(shapes)
shapes.unshift("hexagon","pentagon")
console.log(shapes)
console.log(shapes.length)

//5.splice
let animals = ["cat","dog","bird","fish","lion"]
animals.splice(1,1,"duck","horse") //index,number of items to be removed,new elements to be added
console.log(animals)
animals.splice(0,0,"owl","cow")
console.log(animals)

//6.slice
let arr1 = [1,2,3,4,5,6,7]
console.log(arr1.slice(1,5))

//7.concat
let fr  = ["kiwi","grapes","pineapple"]
let num = [1,2,3,4]
let mixedArr = fr.concat(num)
console.log(mixedArr)

// let shape = ["circle","rectangle","square"]
// shape.unshift(fr)
// console.log(shape)

//8.indexOf -- return index(first occurrence) of the element
let clr = ["black","red","green","blue","yellow","green"]
console.log(clr.indexOf("green"))
console.log(clr.indexOf("green",3))
console.log(clr.indexOf("white")) //return -1 if element not present

//9.includes -- returns true if the element is included in the array
let test = ["admin","rep","customer","seller","vendor"]
let flag = test.includes("seller","customer")
console.log(flag)

//10.foreach
let n = [1,2,3,4,5,6,7]
n.forEach(element => {
    console.log(element*2)
});

