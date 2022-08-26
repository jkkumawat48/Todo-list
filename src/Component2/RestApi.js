import React, {useState, useEffect } from "react";
const RestApi=()=>{
const [data,setData]=useState(null)
const [dist,setDist]=useState(null)
    const Getuser=async()=>{
        try{
            const promise = (await fetch('https://data.covid19india.org/data.json'));
            const actualdata=await promise.json();
            console.log(actualdata.statewise[0]);
setData(actualdata.statewise[0])
        }catch(promise){
            console.log(promise)
        }
    }
    useEffect(()=>{
Getuser()
    },[])
    const showDist=()=>{
        setDist(data)
    }
    return(
        <div>
            <h1>Covid Api Online</h1>
            <div className="{'d-inline-flex'}">
<table>
    <tr>
        <th>S,No</th>
        <th>Active</th>
        <th>CONFIRMED</th>
        <th>DEATH</th>
        <th>DELTACONFIRMED</th>
        <th>DElTHADEATHS</th>
    </tr>
    {
      
      data && Object.keys(data).map((data,index)=>{
            return(
                <tr>
                    <td>{index + 1}</td>
<td>{data.active}</td>
<td>{data.confirmed}</td>

                </tr>
            )
        })
    }
</table>
            </div>
        </div>
    )
}
export default RestApi;