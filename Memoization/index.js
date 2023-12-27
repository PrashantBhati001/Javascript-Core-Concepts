let sum=0;
let calculate=(n)=>{

    for(let i=0;i<=n;i++)
    {
        sum=sum+i;
    }
    return sum
}

//console.log(calculate(5));

let memoize=(fun)=>{
   let cache={}
    return function(...args)
    {

        let n=args[0]
        if(n in cache)
        {
            return cache[n]
        }
        else{
            let result=fun(n)
            cache[n]=result
            return result
        }

    }

}


let ans=memoize(calculate)
console.log(ans(5))