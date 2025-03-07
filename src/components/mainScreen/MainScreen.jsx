import {  useContext, useState } from "react";
import styles from "./MainScreen.module.scss"
import Modal from "../modal/Modal";
import Button from "../button/Button";
import TaskList from "../taskList/TaskList";
import { TaskContext } from "../../context/taskContext";
const MainScreen = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [modalContent, setModalContent] = useState()
    
    const modalToggle = (content) =>{
        setIsOpen(!isOpen)
        setModalContent(content)
    }
    const {setFilter} = useContext(TaskContext) 
    return ( 
        <section className={styles.mainScreen}>
            <div className={styles.mainScreen__header}>
                <h1>Мои задачи</h1>
            </div>
            <div className={styles.mainScreen__btn__block}>
                <Button text="Записать задачу" action={()=>{modalToggle(1)}}/>
            </div>
            <div  className={styles.mainScreen__btn__block}>
                <TaskList/>
            </div>
            <div className={styles.mainScreen__btn__block}>
                <Button text="Все" action={() => setFilter("all")} />
                <Button text="Активные" action={() => setFilter("active")} />
                <Button text="Завершенные"  action={() => setFilter("completed")}/>
                <Button text="Удалить всю форму"  action={()=>{modalToggle(2)}}/>
            </div>
            <Modal isOpen={isOpen} modalToggle={modalToggle} content={modalContent}/>
        </section>
     );
}

export default MainScreen;