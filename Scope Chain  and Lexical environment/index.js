/*
var a=10

function b()
{
    console.log(a);
}

b();

*/

/* Lexical environment is the local memory of the execution context and the lexical environment of the parent */
/*Scope means where we can access our variable in our code */


function a()
{
    var b=100;
    function c()
    {
        console.log(b);
    }

    c()
}

a()

