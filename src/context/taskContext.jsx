import { createContext, useEffect, useState } from "react";
import {v4 as uuidv4} from "uuid"

export const TaskContext = createContext()

export const TaskProvider = ({children}) =>{

    const [newTask, setNewTask] = useState("")
    const [taskList, setTaskList] = useState(() =>{
        const savedTasks = localStorage.getItem("tasks")
        return savedTasks ? JSON.parse(savedTasks ): []
    })

    const [filter, setFilter] = useState("all")
    

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(taskList))
    }, [taskList])

    const addTask = () =>{
        const taskObj = {
            id: uuidv4(),
            value: newTask,
            status: false
        }
        
        const addNewTask = [taskObj, ...taskList]
        setTaskList(addNewTask)
        setNewTask("")
    }

    const deleteTask = (id) => {
        let del = taskList.filter((e) => e.id !== id)
        setTaskList(del)
    }

    const toggleTask = (id) =>{
        let toggelSatus = taskList.map((e) => e.id === id ? {...e , status : !e.status} : {...e})
        setTaskList(toggelSatus)

    }

    const getFilteredTasks = () => {
        switch (filter) {
            case "active":
                return taskList.filter((task) => !task.status);
            case "completed":
                return taskList.filter((task) => task.status);
            default:
                return taskList;
        }
    };
   

    return(
        <TaskContext.Provider value={{newTask, setNewTask, addTask, taskList, deleteTask, toggleTask, filter, setFilter, getFilteredTasks}}>
            {children}
        </TaskContext.Provider>
    )

}
