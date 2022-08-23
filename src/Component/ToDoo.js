import React,{useState} from "react";
import './ToDoo.css'
import Todolist from './Todolist'
const ToDoo=()=>{
    const[inputlist, setInputlist]=useState("")
    const[item,setItem]=useState([])
    const ItemEvent =(event)=> {
        setInputlist(event.target.value);
    }
    const SetofItem= ()=> {
setItem((olditems)=> {
    return[...olditems,inputlist]
})
setInputlist("");
    }
    const deleteItems =(id)=>{
        console.log('deleted')
        setItem((olditems)=>{
            return olditems.filter((arrElem,index)=>{
return index !==id;
            })
        })
    }
    
    return(
        <>
        <div className="main_div">
<div className="center_div">
<br/>
<h1 className="h1">ToDoo List</h1>
<br/>
<input type="text"placeholder="Add a Item" onChange={ItemEvent}/>
<button onClick={SetofItem}> + </button>

<ol>
    {/* <li>{inputlist}</li> */}
    {
        item.map ((itemval,index)=>{
          return  <Todolist key={index} id={index} text={itemval}
          onSelect = {deleteItems}/>

        })
    }
</ol>
</div>
        </div>
        </>
    )
}
export default ToDoo;