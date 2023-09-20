// Objects are declared in two type. i.e. as a constructor or as a literal
// humesa Constructor se hi singleton banega

// Object Literal

// const mySym = Symbol("Key1")

// const JsUser ={
//     name:"Anjali",
//     age:"23",
//    [mySym]:"myKey1",
//     email:"anjali@google.com",
//     isLoggedIn:false,
//     lastLoginDays:["Monday", "saturday"]

// }
// console.log(JsUser["email"])
// console.log(JsUser.email)
// console.log(JsUser[mySym])
// // Change the Object Properties
// JsUser.email ="anjalikumari@gmail.com"
// // Freeze/Lock the Object.
// // Object.freeze(JsUser);
// JsUser.email ="chatgpt@gmail.com"
// console.log(JsUser.email);
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello Js Users")
// }
// console.log(JsUser.greeting)
// console.log(JsUser.greeting())


// // Declare using constructor and it is a singleton object
// const tinderUser = new Object();
// console.log(tinderUser);
// tinderUser.id="123abc"
// tinderUser.name="sam"
// tinderUser.isLoggedIn=false
// console.log(tinderUser);


// const regularUser ={
//     email:"some@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"anjali",
//             lastname:"kumar"
//         }
//     }
// }

// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname.lastname)

// const obj1={1: "a", 2:"b"}
// const obj2={3: "a", 4:"b"}

// // const obj3 ={obj1, obj2}
// // console.log(obj3)

// // Assign 
// const obj3 = Object.assign({},obj1, obj2)
//  console.log(obj3)

// //  OR
// const obj4 = {...obj1,obj2}
// console.log(obj4)


// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

// Destructring of Objects

const course = {
    coursename: "Js ",
    price:"999",
    courseteacher :"hitesh"
}

const {courseteacher} = course;
console.log(courseteacher)
// O/P --> Hitesh
// You can rename couseteacher as anything else also

const {courseteacher: instructor} =course
console.log(instructor)

// Object Destructuring
// const navbar = ({company}) =>{

// }
// navbar(company = "hitesh")
