/*
Variable are containers for storing Data
const cannot be changed, redeclared, reassigned
Always use const if the type should not be changed.
Let and Const are not Hoisted
Prefer not to use var because of issue in block and functional scope
*/

// const accountId = 12345
// let accountEmail = "anjali@gmail.com"
// var accountPassword = "123345"

// accountId = 5432

// console.table([accountId, accountEmail ,accountPassword ])


// const car; ===>> const can not be only declared. when you declare const you have to assign the value
// var fruits;
// let shopping;
// console.table([ fruits,shopping ])
// O/p => undefined for both

// fruits=['apple','banana']
// fruits = 'kiwi'
// console.table([ fruits,shopping ])
//  O/p => Kiwi,undefined

//If you

// var car = "volvo";
// console.log(car);
// var car="BMW";
// console.log(car)
// O/p => volvo then BMW . but again when you will replace with only quotes. it will have previous value. It will not loose the value.
 
// var car = "volvo";
// console.log(car);
// var car="";
// console.log(car)
// O/p=>volvo

/*
LET dataype

1. Let can be reassigned but cannot be redeclared.
2.It is Block Scope
*/
// let x = 10;

// You can use myVar here
// console.log(myVar); 
// Output: 10

// You cannot redeclare myVar in the same scope
// let x= 30; 
// Syntax error


/*
var x = 10;
// Here x is 10
console.log("Before Block scope",x)

{
var x = 2;
console.log("Inside  Block",x)

// Here x is 2
}
console.log(x)
console.log("After Block i.e is Outside Block",x)

// Here x is 2

*/

/*
let x = 10;
// Here x is 10
console.log("Before Block scope",x)

{
let x = 2;
console.log("Inside  Block",x)

// Here x is 2
}
console.log("After Block i.e is Outside Block",x)

// Here x is 10
*/

const x = 20;
console.log(x);
x=50;
console.log(x);