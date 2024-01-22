//Because event bubbling exist event delegation is possible.

//But why event delegation?lets say we have a parent element  and there  are many child elements of this parent ,so instead of adding event listeners 
// to every child elements we can add eventListener to the parent,this will indirectly  improve the performance.

//Example 

document.getElementById("category").addEventListener("click",(e)=>{window.location.href="/"+e.target.id})

// Here in the above example instead of adding eventlistener to every li,we have added the eventlistener to the parent of them



// Advantages of Event Delegation
// 1.Saves Memory
// 2.less code 

// Disadvantage
// 1.Not all events are propagated or bubbled up.
// 2.If at some place you have stopped the propagation then you have to ve careful at that place.