/*Higher order functions are functions which take another function as an argument or return another function
from it.It is because of these higher order functions that functional programming is possible */

const radius=[1,2,3,4,5]

const area=function(x)
{
    return Math.PI*x*x
}

const circumference=function(x)
{
    return 2*Math.PI*x
}

const diameter=function(x)
{
    return 2*x
}

const calculate=function(radius,logic)
{
    const output=[]
    for(let i=0;i<radius.length;i++)
    {
        output.push(logic(radius[i]))
    }

    return output
}

console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));

console.log(radius.map(area));
console.log(radius.map(circumference));
console.log(radius.map(diameter));

//Can we make calculate to look similar to map

Array.prototype.calculate=function(logic)
{
    const reference=this
    const output=[]
    for(let i=0;i<reference.length;i++)
    {
        output.push(logic(reference[i]))
    }

    return output

}

//Above is polyfill for map fucntion

console.log(radius.calculate(area))