import React, { useState,useEffect } from "react";
const Newcovid=()=>{

    const[data,setData]=useState()
    const Get=async()=>{
        try{
        const promise = await(await fetch("https://data.gov.in/apis/9d25dfe2-8935-405b-b2af-b0c0b0bc040e")).json();
        const actualdata =await promise.json();
setData(actualdata.statewise[0])

//console.log(promise)
    }catch(promise){
        console.log(promise)
    }
    useEffect(()=>{
        Get()
    },[])
    return(
        <div>
            <h1>NewCovidApi</h1>
        </div>
    )
}}
export default Newcovid;