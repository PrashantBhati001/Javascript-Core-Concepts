//Arrow function vs normal function

// 1.The first difference between arrow function and normal fucntion is how we write them or their Syntax.

// function regular()
// {
//     console.log("Inside normal function")
// }

// regular()

// const arrow=()=>{
//     console.log("Inside arrow function")
// }
// arrow()


// 2.The second difference between arrow and normal function is in the scope of this keyword.

//"use strict"
// const obj={
//     name:"Prashant",
//     printname:function(){
//         console.log(this.name)
//     }
// }

//obj.printname()
// const temp=obj.printname
// temp()  //The problem over here is that here this keyword  is pointing to the global object,and not to the object

// Consider the below example

// const obj={
//     name:"Prashant",
//     printname:function()
//     {
//         function xyz()
//         {
//             console.log(this.name)
//         }

//         xyz()
//     }

// }

// obj.printname()//The problem over here is that when we are calling the printname and inside that when xyz is called 
// the scope of this over here is the global scope so it is not  able to find  name in the global object.This problem was 
// solved in the ES6 in which arrow function was introduced.This inside an arrow fucntion has lexical context,so here if we 
// change the xyz to arrow function that wil solve our problem.



// const obj={
//     name:"Prashant",
//     printname:function()
//     {
//         const xyz=()=>
//         {
//             console.log(this.name)
//         }

//         xyz()
//     }

// }

// obj.printname()

//3.Regular functions  can count how many arguments we have passed in them where as arrow functions  does not have this capability.
// Consider the below code for the above point

// function abc(name,rollno)
// {
//     console.log(arguments)
//     console.log(name,rollno)
// }
// abc("Prashant","1MV17CS082")

const xyz=(name,rollno)=>{
    console.log(arguments)//this will give an error
    console.log(name,rollno)

}

xyz()

// 4.We cannot make constructor function with arrow functions but the same is possible through regular functions
//5.Hoisting in regular function and arrow function