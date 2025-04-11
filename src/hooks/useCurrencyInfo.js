import { useState, useEffect } from "react";
//jbhi app custom hook bnaye <--use--> likhdo its a standardized approachp[Unspoken rule](Kind of)

function useCurrencyInfo(currency) {//This hook return us Data
    const [data,setData] = useState({})//empty obj(in case when fetch call nhi aa rhi hain)
    useEffect(() => {//We want to call the Api on load or when we call it
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>{//data ko reg variable mein store nhi kr skte as UI mein update nhi hoga
            return res.json()
        })
        .then((res)=>setData(res[currency]))//its just like res.currency both are same
        console.log(data)
    }, [currency])//This fetch will be called when currency will change eg-usd to inr vice versa
    console.log(data)
    return data  
}

export default useCurrencyInfo