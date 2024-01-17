// document.getElementById("GrandParent").addEventListener("click",()=>{console.log("GrandParent called")})
// document.getElementById("Parent").addEventListener("click",()=>{console.log("Parent called")})
// document.getElementById("Child").addEventListener("click",()=>{console.log("Child called")})

//There is a third argument also that we pass to the above function,which is true or false.
//True--event capturing will occur
//false or nothing is mentioned ie default behaviour--event bubbling

document.getElementById("GrandParent").addEventListener("click",()=>{console.log("GrandParent called")},true)
document.getElementById("Parent").addEventListener("click",()=>{console.log("Parent called")},false)
document.getElementById("Child").addEventListener("click",()=>{console.log("Child called")},true)

//The default behaviour is that first we go down and event capturing is done and then we move upwards and  during this event 
// bubbling is done

// e.stopPropagation is used to stop the propagation and is written inside the callback function
//event capturing is also known as trickling