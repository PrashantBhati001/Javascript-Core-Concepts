const getData=()=>{
    //API calling
    console.log("Api called on keyup");
}


const debounce=function(fn,d)
{
    let timer
    return function()
    {
        let args=arguments
        clearInterval(timer)
        timer=setTimeout(()=>{ 
            fn.apply(this,args)
        },d)
    }
}





const betterFunction=debounce(getData,300)