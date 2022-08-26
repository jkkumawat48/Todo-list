import React,{useState,useEffect} from "react";
import App from "../App";
const Api=()=>{
    const [user,setUsers]=useState([])
    const [dist, setDist] = useState([]);
const getUsers = async ()=>{
const responce = await (await fetch('http://3.108.187.7:3000/geography/state')).json()
setUsers(responce);
}
const showDist = (ele)=> {
    setDist(ele.districts || [])
}
     useEffect (()=>{
getUsers()
    },[])
    return(
        <div>
        <div className={'d-inline-flex'}>
        <table>
        <tr>
          <th>S.No</th>
          <th>state Name</th>
          <th>State Id</th>
          <th>Action</th>
        </tr>
        {
       user && user.map((ele, index)=>{
            return(
        <tr>
          <td>{index + 1}</td>
          <td>{ele.state}</td>
          <td >{ele.stateCode || 20}</td>
          <td><button  onClick={() => {showDist(ele)}}>Show Districts</button></td>
        </tr>
          )
        })
    }
      </table>
      </div>
      <div className={'d-inline-flex'}>
      <table>
        <tr>
          <th>S.No</th>
          <th>Dist Name</th>
          <th>Dist Id</th>
          
        </tr>
        {
       dist && dist.map((ele, index)=>{
            return(
        <tr>
          <td>{index + 1}</td>
          <td>{ele.name}</td>
          <td>{ele.code || 20}</td>
         
        </tr>
          )
        })
    }
      </table>
      </div>
      </div>
    )
}
export default Api;