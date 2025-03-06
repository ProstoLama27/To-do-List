import { useContext } from "react";
import { TaskContext } from "../../context/taskContext";
import Button from "../button/Button";

const TaskList = () => {
    const {taskList, deleteTask, toggleTask} = useContext(TaskContext)
    console.log(taskList);
    return ( 
        <div>
            <ul>
                {taskList.map((task)=>{
                    return(
                        <li key={task.id}>
                            {/* сделать изменнениея стиля задачи */}
                            <p >{task.value}</p>
                            <Button text="удалить" action={()=>{deleteTask(task.id)}}/>
                            <input type="checkbox" onClick={()=>{toggleTask(task.id)}}/>

                        </li>
                        
                    )
                })}
            </ul>
        </div>
     );
}
 
export default TaskList;