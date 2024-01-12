//Deep copy vs shallow copy
// First of all lets understand what is the problem with the normal copy that we do  as below:

// const obj1={
//     name:"Prashant",
//     rollno:"1MV17CS082"
// }

// console.log(obj1);

// const obj2=obj1
// obj2.name="Mohit"
// console.log(obj1)

// Here both obj1 and obj2 are pointing to the same object or same memory location.So how can we make different copies of these.
// so here comes the concept of deep copy and shallow copy where we create separate copies of these.

//shallow copy


// const obj1={
//     name:"Prashant",
//     rollno:"1MV17CS082"
// }

// //There are two ways to create shallow copies
// const  newobj1={...obj1}//using spread operator
// const newobj2=Object.assign({},obj1)//using Object.assign() method

// console.log(obj1)
// console.log(newobj1)
// console.log(newobj2)


// But their a small problem with this method which is that we can make copies to only one level ,if there are nested objects 
// then those will be copied by reference.



const obj1={
    name:"Prashant",
    rollno:"1MV17CS082",
    address:{
        city:"Noida",
        state:"UP"
    }
}

// const obj2={...obj1}

// obj2.address.city="Gurgaon"

// console.log(obj1)

// So to prevent this as well we use deep copy
//We do deep copy in the below way:


// const user=JSON.parse(JSON.stringify(obj1))
// user.address.city="Mumbai"
// console.log(obj1)
// console.log(user)

// But the above method also has problems like if we have functions as value then they are not copied or ignored in deep  copy.
// So to prevent this we make use of lodash package of npm.

const  deepcopy= _.cloneDeep(obj1)// for using this _.cloneDeep we need to install the lodash package
console.log(deepcopy)

