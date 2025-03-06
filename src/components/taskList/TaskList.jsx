import { useContext } from "react";
import { TaskContext } from "../../context/taskContext";

const TaskList = () => {
    const {taskList} = useContext(TaskContext)
    return ( 
        <div>
            <ul>
                {taskList.map((task)=>{
                    return(
                        <li key={task.id}>{task.value}</li>
                    )
                })}
            </ul>
        </div>
     );
}
 
export default TaskList;