/*callback hell is callback inside another callback,where the code grows horizontally and not vertically
forming what is called as pyramid of doom */

const cart=["kurti",'pajama','shoes']
api.createOrder(cart,function()
{
    api.proceedtopayment(function()
    {
        api.showordersummary(function()
        {
            api.updatebalance()
        })
    })
})

/* The problem over the above code is that the function execution is dependent on some other function,the control is
not in our hand.which is a very big problem .This is also known as INVERSION OF CONTROL */

