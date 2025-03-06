import { useContext } from "react";
import { TaskContext } from "../../context/taskContext";
import Button from "../button/Button";

const TaskList = () => {
    const {taskList, deleteTask} = useContext(TaskContext)
    return ( 
        <div>
            <ul>
                {taskList.map((task)=>{
                    return(
                        <li key={task.id}>{task.value} <Button text="удалить" action={()=>{deleteTask(task.id)}}/></li>
                        
                    )
                })}
            </ul>
        </div>
     );
}
 
export default TaskList;