import { useState } from "react"
import { useDispatch, useTasks } from "./contexts/TodoContext"

export default function TodoList() {
const state = useTasks()
const dispatch = useDispatch()
const[edit,setEdit] = useState()
    
  return (
    <>
    {
    state.map((item) =>
    (
    <div key={item.id}>
        <input type="checkbox" className="mr-1" onChange={(e)=>dispatch({
           type:"changed", payload:{...item,checked:e.target.checked},id:item.id
        })}/>
        <label className="line-through">{item.text}</label>
        <input type ="text" className="w-20"/>
        <button className="bg-blue-600 hover:bg-blue-950 rounded-xl px-4 ml-1">Edit</button>
        <button className="bg-blue-600 hover:bg-blue-950 rounded-xl px-3 ml-2"onClick={()=>dispatch({type:"deleted", id:item.id})} >Delete</button>
    </div>))}

</>)

}

