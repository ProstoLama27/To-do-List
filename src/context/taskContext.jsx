import { createContext, useState } from "react";
import {v4 as uuidv4} from "uuid"

export const TaskContext = createContext()

export const TaskProvider = ({children}) =>{
    const [newTask, setNewTask] = useState("")
    const [taskList, setTasklList] = useState([])

    const addTask = () =>{
        const taskObj = {
            id: uuidv4(),
            value: newTask,
            status: false
        }
        
        const addNewTask = [taskObj, ...taskList]
        setTasklList(addNewTask)
        setNewTask("")
    }

    return(
        <TaskContext.Provider value={{newTask,setNewTask,addTask,taskList}}>
            {children}
        </TaskContext.Provider>
    )

}
