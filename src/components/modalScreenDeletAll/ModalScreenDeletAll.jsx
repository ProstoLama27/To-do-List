import { useContext } from "react";
import Button from "../button/Button";
import styles from "./ModalScreenDeletAll.module.scss"
import { TaskContext } from "../../context/taskContext";
const ModalScreenDeletAll = ({ modalToggle }) => {

    const {deletAllTasks} = useContext(TaskContext)

    const delet = () =>{
        deletAllTasks()
        modalToggle()
    }

    return ( 
        <div className={styles.container}>
            <p className={styles.container__text}>Вы уверенны, что хотите удалить все задачи</p>
            <div className={styles.container__control}>
                <Button text="Да" action={delet}/>
                <Button text="Нет" action={modalToggle}/>
            </div>
        </div>
     );
}
 
export default ModalScreenDeletAll;