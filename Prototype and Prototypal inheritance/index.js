let arr=["Prashant","Priyanka"]
/*
console.log(arr.__proto__);
console.log(Array.prototype);
console.log(arr.__proto__.__proto__);
console.log(Object.prototype);
console.log(arr.__proto__.__proto__.__proto__);
*/

let obj={
    name:"Prashant",
    rollno:"1MV17CS082",
    getname:function()
    {
        console.log(this.name +" "+this.rollno +" "+this.city);
    }
}

/*
console.log(obj.__proto__);
console.log(Object.prototype);
console.log(obj.__proto__.__proto__);

*/

function fun()
{
    console.log("Prashant Bhati");
}

/*
console.log(fun.__proto__);
console.log(Function.prototype);
console.log(fun.__proto__.__proto__);
console.log(Object.prototype);

*/


/*
let obj1={
    name:"rahul",
    city:"mumbai",
    __proto__:obj
}

console.log(obj1.getname());

*/


let obj1={
    name:"rahul",
    city:"mumbai"
}


obj1.__proto__=obj;

console.log(obj1.getname());
