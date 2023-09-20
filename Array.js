// Array Deceleration
const array = [0,1,3,8,true,"anjali"]
const myHeroes = ["shaktman",'naagraj']
console.log(array)
console.log(array[0]);

//Array Decelaration in Different Ways
let arr2= new Array() //empty array
console.log("Array 2" ,arr2);
var arr4=[5]  ///single element array
let arr3 = new Array(1,2,3,4,5,6,7,8,9)
console.log("Array 3 : " ,arr3)
console.log("Array 3 : " ,arr3.length)

// Shallow copy - changes which are made will also be changed in original array.
//Deep copy -  Deep copy of an object is a copy whose properties donot share the same reference point. i.e.  the changes are not saved in Original aarray. 

// Push Element in Array
myHeroes.push('sachin')   //add sachin to the end of the list
console.log(myHeroes)

// Pop -- Remove last element
myHeroes.pop();
console.log(myHeroes)

// Unshift - Add Element  at the Begining of the Array
myHeroes.unshift('Krish')    //Add <NAME> at beginnig of the List
console.log(myHeroes)

//Shift --> Remove element from the begining of the array

const fruits = new Array('Apple','Banana','Guavava','Mango','Litchi')
fruits.shift();
console.log(fruits)

// Includes ==> Give result in Boolean form whether it is present or not

console.log(fruits.includes('Banana'))
console.log(fruits.includes('Apple'))

// Index - give the index number of the element
// If doesn't exist then give -1;

console.log(fruits.indexOf('Litchi'))

// Join --> Bind the array and convert it into String, comma seperate

const newArray = fruits.join();
console.log(`New Array: ${newArray}`)
console.log(typeof(newArray));
console.log(typeof(fruits));

// Slice ==> 

console.log("A",fruits );
const myn1 = fruits.slice(1,3)
console.log("B ",myn1 );

// Splice -- > Add / Remove array Elements. It Overwrite the original Array
//  Remove whole portion in tyhe given range including last lements also.

const numbers = ["one","two","three","Four","five","six","seven"]

numbers.splice(2,0,"twelve","thirteen")
// At position 2 remove 0 element and add the rest element
console.log(numbers);
numbers.splice(2,2);
console.log(numbers);


const marvel_heroes = ["thor" , "Ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]
 
// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes)
// Taken array inside array
// O/P => [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

 const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes )
// O/P =>[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// Spread
const all_newHeroes = [...marvel_heroes , ...dc_heroes]
console.log( "All New  Heroes : " , all_newHeroes);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Hitesh"));
// Array.from() => convert it into Array
console.log(Array.from("Hitesh"))

// console.log(Array.from({name:"anjali"})) --> will return empty array. you have to specify on key or value you have to make the element

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))

// O/P => [ 100, 200, 300 ]