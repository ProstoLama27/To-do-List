import { useState } from "react";
import styles from "./MainScreen.module.scss"
import Modal from "../modal/Modal";
const MainScreen = () => {
    const [isOpen, setIsOpen] = useState(false)

    const modalToggle = () =>{
        setIsOpen(!isOpen)
    }

    return ( 
        <section className={styles.mainScreen}>
            <div className={styles.mainScreen__header}>
                <h1>Мои задачи</h1>
            </div>
            <div>
                <button onClick={modalToggle}>Записать задачу</button>
            </div>
            {/* задачи */}
            <div className={styles.mainScreen__philter}>
                <button>Все</button>
                <button>Активные</button>
                <button>Завершенные</button>
            </div>
            <Modal isOpen={isOpen} modalToggle={modalToggle}/>
        </section>
     );
}
 
export default MainScreen;