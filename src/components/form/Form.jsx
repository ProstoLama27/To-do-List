import { useContext } from "react";
import styles from "./Form.module.scss"
import { TaskContext } from "../../context/taskContext";
const Form = () => {

    const {newTask,setNewTask,addTask} = useContext(TaskContext)

    return ( 
        <div className={styles.form}>
            <form action="" className={styles.form__container}>
                <input type="text" placeholder="Введите задачу" value={newTask}
                onChange={(e)=>{setNewTask(e.target.value)}}/>
                
            </form>
            <button onClick={addTask}>Записать</button>
        </div>
     );
}
 
export default Form;