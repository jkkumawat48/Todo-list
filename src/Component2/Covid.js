import React,{useState,useEffect} from "react";

const Covid=()=>{
    const [usedata,setuseData]=useState(null)
    const[dist,setDist]=useState(null)
    const Getdata=async()=>{
        const responce= await (await fetch('https://data.covid19india.org/v4/min/data.min.json')).json();
        setuseData(responce)
        console.log()
         setDist(responce[Object.keys(responce)[0]].districts)
    }
    useEffect(()=>{
Getdata()
    },[])
    
    const showDist=(key)=>{
        let selectedState =  usedata[key]
        setDist(selectedState.districts)
    }

    return(
        <div>
            <h1>Covid Results</h1>
            <div className={'d-inline-flex'}>
            <table className={"border: 2px solid forestgreen"}>
                <tr>
                    <th>S,No</th>
                    <th>State</th>
                    <th>Delta</th>
                    <th>Action</th>
                </tr>
                {
                    usedata && Object.keys(usedata).map((stateKey,index)=>{
                        return(
                            <tr>
                                <td>{index + 1}</td>
                                <td>{stateKey}</td>
                                <td>{stateKey.delta}</td>
                                <td>{stateKey.districts}</td>
                                <td>
                                    <button onClick={()=> showDist(stateKey)}>Show Dist</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
            </div>
            <div className={"d-inline-flex"}> 
            <table className={"border: 2px solid forestgreen"}>
                <tr>
                    <th>S,No</th>
                    <th>District</th>
                    <th>Tested</th>
                    <th>Recovered</th>
                    <th>Vaccinated 1</th>
                    <th>Vaccinated 2</th>
                </tr>
                {
                    dist && Object.keys(dist).map((val,index)=>{
                        return(
                            <tr>
                                <td>{index + 1}</td>
                                <td>{val}</td>
                                <td>{dist[val].total.tested}</td>
                                <td>{dist[val].total.recovered}</td>
                                <td>{dist[val].total.vaccinated1}</td>
                                <td>{dist[val].total.vaccinated1}</td>
                                <td>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
            </div>
        </div>
    )
}
export default Covid;