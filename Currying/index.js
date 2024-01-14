//What is currying?
// Currying is a technique where we transform a function having multiple arguments,to several functions with single argument in sequence.
// Advantages of Currying
// 1.Reduces the chances of error in our function by dividing it into multiple several functions that can handle one responsibility.
// 2.Makes the code readable,modular and reusable.

//1.Using bind

const multiplybind=function(x,y)
{
    console.log(x*y);
}

const multiplybytwo=multiplybind.bind(this,2)
multiplybytwo(3)

//2.Using closure

const multiply=function(x)
{
    return function(y)
    {
        console.log(x*y)
    }
}

multiply(2)(3)