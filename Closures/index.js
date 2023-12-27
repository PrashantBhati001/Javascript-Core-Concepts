/*Closures is the local memory of the function and the lexical environment of it */

//Example of closure

function b()
{
    var a=101;

    function c()
    {
        console.log(a);
    }

    return c
}

let z=b()
//z() 
//b()()




//Program to display 1,2,3,4,5 after 1 second interval

/*
function print()
{
  for(var i=1;i<=5;i++)
  {
    setTimeout(()=>{console.log(i)},i*1000);
  }
}

print()
*/

/*The above code is printing 6 6 6 6 6 6  ,to solve this problem we have to use let instead of var*/

/*
function print()
{
  for(let i=1;i<=5;i++)
  {
    setTimeout(()=>{console.log(i)},i*1000);
  }
}

print()

*/


//what if we have to use var only,so we will make use of  function here


/*
function print()
{
  for(var i=1;i<=5;i++)
  {
    function timer(i)
    {
      setTimeout(()=>{console.log(i)},i*1000);
    }
    timer(i)  
  }
  
}  

print()
*/


/*Example of data privacy using closures */


function counter()
{
    var count=0
    return function a()
    {
        count++
        console.log(count);
    }
}


var counter1=counter()
counter1()
counter1()

var counter2=counter()
counter2()
counter2()
counter2()








