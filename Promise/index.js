/* To prevent callback hell and inversion of control promises are used 
const promise=createorder(cart)

whenever the compiler will see this line ,it will  return a promise.A promise is an empty object {data:undefined}
and when the data will be available ,it will fill  this object with that data.Once this data is filled then only
that callback function will be executed.Javascript ensures that the callback function will be execeuted after the 
data is filled in  the object 

promise.then(callback function)

There are three status of the promise
1.pending
2.fulfilled
3.rejected

Promise object is immutable

Promise is an object which represents the eventual completion of an asyncronous operation or a container for future
value or a placeholder which will be filled later.

Promise chaining is used to prevent callback hell
createOrder(cart).then(function(orderId)
{
     return proceedtopayment(orderId)
})
.then(function(paymentInfo)
{
    return showorderSummary(paymentInfo)
})

*/

//Creating a Promise,chaining,error handling

const cart=["shoes","pants","kurta"]

const promise=createOrder(cart)  //returns orderId
//console.log(promise)
promise.then(function(orderId)
{
    console.log(orderId);
})
.catch(function(err)
{
    console.log(err.message)
})


function createOrder(cart)
{
    const pr=new Promise(function(resolve,reject)
    {
       if(validcart(cart))
       {
        const orderId="12345"
        resolve(orderId)
       }
       else{
        const err=new Error("cart is not valid")
        reject(err)
       }
    })
    return pr
}

function validcart(cart)
{
    //return true
    return false;
}

/*IMPORTANT POINT
 .catch() will only catch the error if any above it ,if there are .then() below that ,those will be executed 
*/



