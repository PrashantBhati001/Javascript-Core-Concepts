//Debouncing VS throttling
//They both are used for performance optimization by limiting the rate of number of function calls.
//In debouncing if the difference between any two ket press is greater than some delay ,then we  will ake an API call,where as in 
// throttling we will make an API call only  after some fixed time only.



const getData=()=>
{
    console.log("API calling!!")
}

const throttle=function(func,d)
{
    let flag=true
    return function()
    {
        let args=arguments
        if(flag)
        {
            func.apply(this,args)
            flag=false
            setTimeout(()=>{flag=true},d)
        }

    }
}


const betterFunction=throttle(getData,2000)