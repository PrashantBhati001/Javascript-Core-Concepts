//Function Statement

/*
function a()
{
    console.log("a is called");
}
a()

*/

//Function Expression

/*
let a=function()
{
    console.log("Function expression")
}
a()


The difference between function expression and function declaration comes in hoisting.
*/

//Function Declaration

/*Same as function expression */

//Anonymous Function

/*Function without name is called anonymous function*/

//Named function expression
/*
var b=function c()
{
    console.log("Named function expression");
}
b()
//c()  --this is wrong

*/

//First Class function
/*First class functions are also called as first class citizens,its the ability to  be used as values,pass them as arguments 
to functiosn and also return from a function 



function b(c)
{
    c()
}
function a()
{
    console.log("a is called");
}
b(a)
*/

//CALLBACK FUNCTIONS

/*Callback functions are functions that can be passed as an argument to other functions,eg setTimeout,the main use of these 
comes in asyncronous functions */

//The below code count the number of times the button is clicked
function click()
{
count=0;
document.getElementById("btn").addEventListener("click",function callback(){
    console.log("Button is called");
    console.log(++count);
})
}

click()





