import React, {useState, useEffect } from "react";
import './NewApi.css';
const NewApi=()=>{
const[user,setUser]=useState([])
    const Get =async()=>{
        const promise=await(await fetch("https://api.covidtracking.com/v1/us/current.json")).json();
        setUser(promise)
        console.log(promise)
    }
    useEffect(()=>{
        Get()
    },[])
    return(
        <div>
            <h1>NewApi</h1>
            <div className={'d-inline-flex'}>
                <table className="table">
                    <tr className="tr">
                        <th className="th">S,No</th>
                        <th>Date</th>
                        <th>States</th>
                        <th>Positive</th>
                        <th>Negetive</th>
                        <th>Pending</th>
                    </tr>
                    {
                        user.map((err,index)=>{
                            return(
                                <tr className="">
                                    <td className="td">{index + 1}</td>
                                    <td>{err.date}</td>
                                    <td>{err.states}</td>
                                    <td>{err.positive}</td>
                                    <td>{err.negative}</td>
                                    <td>{err.pending}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    )
}
export default NewApi;