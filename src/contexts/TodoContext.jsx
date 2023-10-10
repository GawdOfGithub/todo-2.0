/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";

const TasksContext = createContext(null);
const DispatchContext = createContext(null);

export default function TodoContext({ children }) {
  const initialState = [
    {
      text: "say hello to beautiful",
      checked: "false",
      id: 1,
    },
  ];
  const [state, dispatch] = useReducer(taskManager, initialState);

  return (
    <TasksContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </TasksContext.Provider>
  );
}

function taskManager(state, action) {
    console.log(state)
  switch (action.type) {
    case "added": {
      return [
        ...state,
        {
          text: action.payload,
          checked: "false",
          id: action.id,
        },
      ];
    }
    case "changed": {
      return state.map((item) => {
        if (item.id === action.id) {
          return action.payload;
        } else {
          return item;
        }
      });
    }
    case "deleted":{
        return state.filter (item=>item.id!=action.id)
    }
    default:
      return state;
  }
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useDispatch() {
  return useContext(DispatchContext);
}
