// Topics Convered
// 1. this inside global space
// 2.this inside a function
// 3.this in strict mode(this substitution)
// 4.this value depends upon how fucntion is called (window)
// 5.this inside a objects method
// 6.call,apply,bind methods(sharing methods)
// 7.this inside arrow fucntion
// 8.this inside nested arraow fucntion
// 9.this inside DOM

// 1.this inside global space
"use strict"
console.log(this)

// this in global space  is the global object.In browsers this global object is the window object and in some other environment 
// global object could be something else

// 2.this inside a function
function x()
{
    console.log(this)
}

x()

// A very important point to note  is  that this keyword inside a function in strictmode is undefined but in non strictmode ,
// it is same window object. 

// 3.this in strictmode(this substitution)
// If the value of this keyword is undefined or null,this keyword will be replaced with the global object only in non strictmode.


// 4.this keyword value depends on how the function is called(window)

x()
window.x()

// 5.this inside an objects's method
const obj={
    a:10,
    x:function()
    {
        console.log(this)
    }
}

obj.x()

//inside an object this points to that object

// 6.call,apply,bind methods--covered in separate video

// 7.this inside an arrow function

const obj1={
    a:10,
    x:()=>{
        console.log(this)
    }
}

obj1.x()

const obj3={
    a:10,
    x:function()
    {
        const y=()=>{
         console.log(this)
        }
        y()
    }
}

obj3.x()

//this keyword inside an arrow function does not provide its own this binding ,it uses the enclosing lexical scope