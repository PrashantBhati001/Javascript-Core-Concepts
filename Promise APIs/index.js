const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("P1 is resolved")},3000)
})
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("P2 is  rejected")},1000)
})
const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("P3 is resolved")},2000)
})

Promise.all([p1,p2,p3]).then((data)=>{console.log(data)}).catch((error)=>{console.log(error)})
Promise.allSettled([p1,p2,p3]).then((data)=>{console.log(data)}).catch((error)=>{console.log(error)})
Promise.race([p1,p2,p3]).then((data)=>{console.log(data)}).catch((error)=>{console.log(error)})
Promise.any([p1,p2,p3]).then((data)=>{console.log(data)}).catch((error)=>{console.log(error)})

// 1.Promise.all
// if all of the promises are resolved then it will return an array of the data of those promises.If any of the promise fails 
// then it will give  that error(rejection message).

// 2.Promise.allSettled
// It will wait for all the promises to get settle first and will return an array of the corresponding data or error.More specific 
// it will return an array of object which contains the status and the value of promises.

// 3.Promise.race
// It will return the data or error of any of the promise that gets settled first

// 4.Promise.any
// This will return  the data if any of the promise gets fulfilled.If all of them failed then it will return an aggregator error.s