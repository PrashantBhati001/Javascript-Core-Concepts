/* Hoisting  is a phenomena in JS where we can access the functions and  variables even before initialising them */

/*
var a=7;
function getname()
{
    console.log("Function is called");
}

console.log(a);
getname();

*/

/////////////////////////////////////////////////////////////////////////////////

/*
console.log(a);
getname();

var a=7;
function getname()
{
    console.log("Function is called");
}

*/

/////////////////////////////////////////////////////////////////////////////////
/*console.log(a);//will give the reference error
getname();

//var a=7;
function getname()
{
    console.log("Function is called");
}
*/
/////////////////////////////////////////////////////////////////////////////////

