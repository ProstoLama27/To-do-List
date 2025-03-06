import {  useContext, useState } from "react";
import styles from "./MainScreen.module.scss"
import Modal from "../modal/Modal";
import Button from "../button/Button";
import TaskList from "../taskList/TaskList";
import { TaskContext } from "../../context/taskContext";
const MainScreen = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const modalToggle = () =>{
        setIsOpen(!isOpen)
    }
    const {setFilter} = useContext(TaskContext) 
    return ( 
        <section className={styles.mainScreen}>
            <div className={styles.mainScreen__header}>
                <h1>Мои задачи</h1>
            </div>
            <div>
                <Button text="Записать задачу" action={modalToggle} />
            </div>
            <div>
                <TaskList/>
            </div>
            <div className={styles.mainScreen__philter}>
                <Button text="Все" action={() => setFilter("all")} />
                <Button text="Активные" action={() => setFilter("active")} />
                <Button text="Завершенные"  action={() => setFilter("completed")}/>
            </div>
            <Modal isOpen={isOpen} modalToggle={modalToggle}/>
        </section>
     );
}

export default MainScreen;