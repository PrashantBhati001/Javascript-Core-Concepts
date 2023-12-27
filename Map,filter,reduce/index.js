//Map,filter and reduce are higher order functions

//MAP returns a new array

const arr=[1,2,3,4,5]

const double=function(x)
{
    return 2*x
}

const triple =function(x)
{
    return 3*x
}

console.log(arr.map(double));
console.log(arr.map(triple));

//Filter will also return an array but based on the condition

function isodd(x)
{
    return x%2
}

function iseven(x)
{
    return x%2===0
}

console.log(arr.filter(iseven));
console.log(arr.filter(isodd));


//Reduce will always return a single value

const sum=arr.reduce(function(acc,curr)
{acc=acc+curr;
return acc;
}
,0)

console.log(sum);

const max=arr.reduce(function(acc,curr){if(curr>acc)
{
    acc=curr;
    return acc;
}},0)

console.log(max)