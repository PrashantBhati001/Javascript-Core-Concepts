//Call

// const obj1={
//     firstname:"Prashant",
//     lastname:"Bhati",
//     printName:function()
//     {
//         console.log(this.firstname+" "+this.lastname);
//     }
// }
// obj1.printName()

// const obj2={
//     firstname:"Smriti",
//     lastname:"mehta"
// }

// obj1.printName.call(obj2);



//Lets take that function out

// const obj1={
//     firstname:"Prashant",
//     lastname:"Bhati",
    
// }

// const obj2={
//     firstname:"Smriti",
//     lastname:"mehta"
// }

//  function printname()
//     {
//         console.log(this.firstname+" "+this.lastname);
//     }

// printname.call(obj1);
// printname.call(obj2);



// const obj1={
//     firstname:"Prashant",
//     lastname:"Bhati",
    
// }

// const obj2={
//     firstname:"Smriti",
//     lastname:"mehta"
// }

//  function printname(hometown,state)
//     {
//         console.log(this.firstname+" "+this.lastname+" from "+hometown+","+state);
//     }

// printname.call(obj1,"Noida","Uttarpradesh");
// printname.call(obj2,"Chandigarh","Punjab");


//apply
//apply is same as call ,just the arguments after the first arguments are passesed as an array



// const obj1={
//     firstname:"Prashant",
//     lastname:"Bhati",
    
// }

// const obj2={
//     firstname:"Smriti",
//     lastname:"mehta"
// }

//  function printname(hometown,state)
//     {
//         console.log(this.firstname+" "+this.lastname+" from "+hometown+","+state);
//     }

// printname.apply(obj1,["Noida","Uttarpradesh"]);
// printname.apply(obj2,["Chandigarh","Punjab"]);

//bind
// bind will give a copy of that function which could be called later.Consider the below example


const obj1={
    firstname:"Prashant",
    lastname:"Bhati",
    
}

const obj2={
    firstname:"Smriti",
    lastname:"mehta"
}

 function printname(hometown,state)
    {
        console.log(this.firstname+" "+this.lastname+" from "+hometown+","+state);
    }

    // const newfunction=printname.bind(obj1,"Mumbai","UttarPradesh");
    // newfunction()
    // OR
    const newfunction=printname.bind(obj1);
    newfunction("Mumbai","UttarPradesh")
