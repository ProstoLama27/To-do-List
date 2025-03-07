import { useContext } from "react";
import styles from "./Form.module.scss"
import { TaskContext } from "../../context/taskContext";
import Button from "../button/Button";
const Form = () => {

    const {newTask,setNewTask,addTask} = useContext(TaskContext)

    return ( 
        <div className={styles.form}>
            <form action="" className={styles.form__container}>
                <input type="text" placeholder="Введите задачу" value={newTask}
                onChange={(e)=>{setNewTask(e.target.value)}}/>
                 <button onClick={addTask}>Записать</button>
            </form>
        </div>
     ); 
    //  делал ситили и остановился на форме, оастолсь еще вывод списка
    // что можно доделать: ограниченое количество задач на экане, фильтры сделать красиве
}
 
export default Form;