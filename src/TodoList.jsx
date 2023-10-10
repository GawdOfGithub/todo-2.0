
import { useDispatch, useTasks } from "./contexts/TodoContext"

export default function TodoList() {
const state = useTasks()
const dispatch = useDispatch()
  //to toggle between edit mode ande save mode 
    
  return (
    <>
    {
    state.map((item) =>
    (
    <div key={item.id} className="mt-3">
        <input type="checkbox" className="mr-1" onChange={(e)=>dispatch({
           type:"changed", payload:{...item,checked:e.target.checked},id:item.id
        })}/>
       <label className={item.checked === true ? "line-through text-3xl font-extrabold" : "text-3xl font-extrabold"}>{item.text}</label>

        
       
        
       
    
        <button className="bg-blue-600 hover:bg-blue-950 rounded-xl px-3 ml-2"onClick={()=>dispatch({type:"deleted", id:item.id})} >Delete</button>
    </div>))}

</>)

}

