// what is async?
// what is await?
// how async await work behind the scenes?
// Examples of using async await
// Error handling
// Interview
// Async await vs Promise.then/.catch


// Async is a keyword which is used before a function to create an async function

// syntax--->async function getData()


// An important point to note is that an async function will always return a Promise.Either you return a promise directly or
// if you are returning a value then the function will bind that into a promise and will return it


//The below fucntion is returning a value
// async function getData()
// {
//     return "Namaste Javascript"
// }

// const promise=getData()
// console.log(promise)//a promise is returned
// promise.then((data)=>console.log(data));




//The below code is returning a promise
// const p=new Promise((resolve,reject)=>{
//    resolve("Promise is resolved")
// })

// async function getData()
// {
//     return p
// }

// const promise=getData()
// console.log(promise)
// promise.then((data)=>{console.log(data)})


//Async and await are like sugar coating on promises.Now we will see how we used to handle promises earlier and now how we 
// handle them now using async and await


// const p=new Promise((resolve,reject)=>{
//     resolve("Promise resolved successfully")
// })

// async function getData()
// {
//     return p
// }

// const promise=getData()
// promise.then((data)=>{console.log(data)})



//  const p=new Promise((resolve,reject)=>{
//      resolve("Promise resolved successfully")
//  })

//  async function getData()
//  {
//     const data=await p
//     console.log(data);
//  }

//  getData()



//VERY VERY CORE CONCEPT 
// const p=new Promise((resolve,reject)=>{
//     setTimeout(()=>{resolve("promise resolved successfully")},10000)
// })

// function getData()
// {
//     p.then((data)=>{console.log(data)})
//     console.log("Namaste developer")
// }
// getData()


// Here  namaste developer was printed first and then promise resolved successfully was printed after 10sec,please note 
// the Js engine was not waiting for the promise to resolve

// now consider the below code


// const p=new Promise((resolve,reject)=>{
//     setTimeout(()=>{resolve("promise resolved successfully")},10000)
//  })

//  async function getData()
//  {
//     const data=await p
//     console.log("Namaste developer");
//     console.log(data);
//  }

//  getData()


//  Here the most important  point to note is that at await the JS engine is waiting for the promise to resolve.Here after 10 sec
// it will print namaste developer and  promise resolved successfully.More technically the JS engine is not waiting but it is suspending the execution
// until the primise is not resloved so that the main thread is not blocked.


//Consider the below cases---important
// 1.
// const p=new Promise((resolve,reject)=>{
//     setTimeout(()=>{resolve("Promise resolved after 10 secs")},10000)
// })

// async function getData()
// {
//     console.log("Hello World");
//     const val1=await p;
//     console.log("Namaste Javasript");
//     console.log(val1);
//     const val2=await p;
//     console.log("Namaste javascript");
//     console.log(val2)
// }

// getData()


// Here the important point to note is that hello world will be printed immediately,and then the Js engine will wait for 10 sec 
// for the promise to resolve,once it will resolve all the lines below it will be printed.Note that  the JS engine will not wait for 
// the second await as it  is already resolved 



// 2.

// const p1=new Promise((resolve,reject)=>{
//          setTimeout(()=>{resolve("Promise resolved after 10 secs")},10000)
//  })

//  const p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{resolve("Promise resolved after 5 secs")},5000)
// })


// async function getData()
// {
//     console.log("Hello World");
//     const val1=await p1;
//     console.log("Namaste Javasript");
//     console.log(val1);
//     const val2=await p2;
//     console.log("Namaste javascript");
//     console.log(val2);
// }

// getData()


// Here the hello world will be printed immediately.Then the JS engine will wait for 10 sec for P1 to resolve.By this time 
// P2 would have already resolved but the JS engine will wait till the 10 sec expires.Once they are expired all the lines below
// P1 will be printed.



// 3.

// const p1=new Promise((resolve,reject)=>{
//          setTimeout(()=>{resolve("Promise resolved after 5 secs")},5000)
//  })

//  const p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{resolve("Promise resolved after 10 secs")},10000)
// })



// async function getData()
// {
//     console.log("Hello World");
//     const val1=await p1;
//     console.log("Namaste Javasript");
//     console.log(val1);
//     const val2=await p2;
//     console.log("Namaste javascript");
//     console.log(val2);
// }

// getData()




// // Here the hello world is printed immediately,at the first await the JS engine will wait for 5 sec and then will print the next
// two set of lines and then once extra 5 sec are passed the second promise is resolved and  the next set of lines is printed



//CORE CONCEPT
// Whenever the JS engine sees await it will suspend the execution of that function until the promise is not resolved.If the
// promise is already resolved then the fucntion will not be suspended.Once the suspended promise is resolved the JS engine will 
// continue its execution from where it left