//There are two types of datatypes based on how the data is kept in the memory and accessed-
//1)Primitive 2)Non-Primitive

// Primitive- call by value
//7 types-
// String, Number, Null,Undefined, BigInt, Boolean, Symbol

//Referenced(Non-Primitive)-
//3 types-
//Array, Objects, Functions

//Javascript is dynamically typed language as we need not to specify the datatype of the variables

// const id=Symbol('123')
// const anotherId=Symbol('123')
// console.log(id===anotherId)

//  const heros=["abc","xyz","pqr"]//array
//  let myObj={
//      name:"Yashika"
//      age :20
//  }//object
// const myFunction= function(){
//     console.log("Hello World")
// }

/*************************************************************************************************** */
//Memory is of two types-
//Stack(Primitive) , Heap(Non-Primitive)
let myYoutubeName="Gate topper"
let anotherName= myYoutubeName
anotherName="Yashika"

console.log(myYoutubeName)
console.log(anotherName)

let userOne={
    email:user@google.com
    upi: "user@ybl"
}
let userTwo= userOne

userTwo.email="xyz@google.com"

console.log(userOne.email
console.log(userTwo.email)