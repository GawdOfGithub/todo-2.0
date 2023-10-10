import { useState } from "react"
import { useDispatch } from "./contexts/TodoContext"

export default function AddTasks()
{
    
   
    const[text,setText] = useState("")
    const dispatch = useDispatch()
    return(
        <div>
            <input  className="border-4 border-sky-300" type="text" value={text} onChange={(e)=>setText(e.target.value)} ></input>
            <button className=" ml-3 btn bg-pink-500 hover:bg-pink-700" onClick={()=>
            
              { dispatch({
               type:"added",  payload:text,id:nextID++
              })
            }  
            }>Add Todo</button>
        </div>


    )
}

let nextID=2