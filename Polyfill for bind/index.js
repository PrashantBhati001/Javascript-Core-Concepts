//What is a polyfill
// Polyfill is a function which is created for the replacement of an existing  function to make it compatible with the old browsers.

//First lets see the basic implementation of bind

// const student={
//     name:"Prashant",
//     roll:"1mv17cs082"
// }

// const printName=function()
// {
//     console.log(this.name+" "+this.roll);
// }

// const newfunction=printName.bind(student)
// newfunction()


// Function.prototype.mybind=function(...args)
// {
//     const obj=this
//     return function()
//     {
//          obj.call(args[0])
//     }
// }

// const newbindfunction=printName.mybind(student)
// newbindfunction()




//More accurate polyfill

const student={
    name:"Prashant",
    roll:"1mv17cs082"
}

const printName=function(hometown,state)
{
    console.log(this.name+" "+this.roll+" "+hometown+" "+state);
}

const newfunction=printName.bind(student,"Noida","UP")
newfunction()


Function.prototype.mybind=function(...args1)
{
    const obj=this
    const param=args1.slice(1)
    return function(...args2)
    {
        obj.apply(args1[0],[...param,...args2])

    }
}

const newbindfunction=printName.mybind(student,"Noida")
newbindfunction("UP")
