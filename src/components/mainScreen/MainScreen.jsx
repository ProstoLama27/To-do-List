import {  useContext, useState } from "react";
import styles from "./MainScreen.module.scss"
import Modal from "../modal/Modal";
import Button from "../button/Button";
import TaskList from "../taskList/TaskList";
import { TaskContext } from "../../context/taskContext";
import { GiHamburgerMenu } from "react-icons/gi";
import BurgerMenu from "../burgerMenu/BurgerMenu";

const MainScreen = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const burgerMenuOpen = () => {
        setIsOpenMenu(!isOpenMenu)
    }

    const [isOpen, setIsOpen] = useState(false)
    const [modalContent, setModalContent] = useState()
    
    const modalToggle = (content) =>{
        setIsOpen(!isOpen)
        setModalContent(content)
    }
    return ( 
        <section className={styles.mainScreen}>

            <div className={styles.mainScreen__header}>
                <h1 className={styles.mainScreen__header__title}>Мои задачи</h1>
                <button className={styles.mainScreen__header__btn} onClick={burgerMenuOpen} >
                    <GiHamburgerMenu />
                </button>
                <BurgerMenu status ={isOpenMenu} menuToggle={burgerMenuOpen} modalToggle={modalToggle}/>
            </div>

            <div className={styles.mainScreen__btn__block}>
                <Button text="Записать задачу" action={()=>{modalToggle(1)}}/>
            </div>
                
            <div className={styles.mainScreen__btn__block}>
                <TaskList/>
            </div>
            <Modal isOpen={isOpen} modalToggle={modalToggle} content={modalContent}/>
        </section>
     );
}

export default MainScreen;