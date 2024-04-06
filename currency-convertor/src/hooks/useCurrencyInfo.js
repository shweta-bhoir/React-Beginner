import {useEffect,useState} from 'react'

function  useCurrencyInfo(currency){
    const [data,setData]=useState([]);
      useEffect(()=>{
      fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`).
      then((response)=>response.json()).
      then((response)=> setData(response["rates"]));
       
    },[currency])

    return data;
}

export default useCurrencyInfo;