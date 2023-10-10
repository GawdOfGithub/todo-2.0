
import AddTasks from './AddTasks';
import TodoList from './TodoList';
import TodoContext from './contexts/TodoContext';
export default function App() {
  return (
    <>

    <TodoContext>
      
      <div className='flex flex-col items-center min-h-screen bg-slate-300 '>
      <div className='font-extrabold bg-yellow-500 mb-4 text-2xl ' >
        Awesome Todo 🐲
      </div>
    <AddTasks/>
    <div className='mt-3'>
    <TodoList/>
    </div>
    </div>
   
    </TodoContext>
    </>
  )
}
