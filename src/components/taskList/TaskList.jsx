import { useContext } from "react";
import { TaskContext } from "../../context/taskContext";
import Button from "../button/Button";
import styles from "./TaskList.module.scss"

const TaskList = () => {
    const { deleteTask, toggleTask, getFilteredTasks} = useContext(TaskContext)
    const taskList = getFilteredTasks()
    
    return ( 
        <div>
            <ul>
                {taskList.map((task)=>{
                    return(
                        <li key={task.id} className={styles.list}>
                            <div className={styles.list__text}>
                            <p>{task.value}</p>
                            </div>
                            <div className={styles.list__control}>
                            <input type="checkbox" checked={task.status}  onClick={()=>{toggleTask(task.id)}}/>
                            <Button text="удалить" action={()=>{deleteTask(task.id)}}/>
                            </div>
                        </li>
                        
                    )
                })}
            </ul>
        </div>
     );
}
 
export default TaskList;