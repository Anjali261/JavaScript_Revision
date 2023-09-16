const name = "anjali"
const repoCount = 20

// console.log(name + repoCount);

const gameName = new String("Anjali")
//calculate Length
//   console.log(gameName.length)
  //Find the position of Character
//   console.log(gameName.indexOf('l'));
//Find at which position which character is stored
// console.log(gameName.charAt(1));

// subString =>cant give negative values
let str = 'Hello World'
// console.log(str.substring(0,5))

//Slice - can take negative values

console.log(str.slice(-8,-5))
//Trim ==> Remove spaces.
//It takes start and end value also
const newString = "      anjali    "
// console.log(newString.trim())

//Replace
const url = "https://localhost:3000/anjali.com/anjali%20kumari"
// console.log(url.replace('%20','-'))

//includes
// console.log(url.includes('anjali'))

//Conver value to array basend on dashed .
//split

const Name = "anjali-akela"
console.log(Name.split('-'))