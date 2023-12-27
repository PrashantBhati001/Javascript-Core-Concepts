/* var let and const are hoisted*/
/* Temporal dead zone is the time between when the memory is allocated at a different memory location and  when the 
variable  is initilaised.
*/

//REFERENCE ERROR

/*
console.log(a);//This will give reference error
let a=10
*/

//SYNTAX ERROR

/*
let a=10
let a=5

const b
b=5
*/

//TYPE ERROR

/*
const d=100
d=180

*/

/////////////////////////////////////////////////////////////////////

//BLOCK SCOPE AND SHADOWING IN JAVASCRIPT

//VAR has functional scope whereas let and const has block scope but remember that the concept of lexical scope will work here as well

/*
{
    var a=10
    let b=20
    let c=30

    console.log(a);
    console.log(b);
    console.log(c);
    
}

console.log(a);
console.log(b);
console.log(c);

*/

/*
var a=10
{
    var a=5;
    let b=3;
    let c=1;
    console.log(a);
    console.log(b);
    console.log(c);

}
console.log(a);

Above is example of shadowing
*/

let b=100;
{
    var a=10;
    let b=2;
    const c=5;

    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(b);


/*illegal shadowing */

let a=100
{
    var a=10;
}