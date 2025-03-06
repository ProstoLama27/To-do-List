import { useState } from "react";
import styles from "./MainScreen.module.scss"
import Modal from "../modal/Modal";
import Button from "../button/Button";
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
                <Button text="Записать задачу" action={modalToggle} />
            </div>
            {/* задачи */}
            <div className={styles.mainScreen__philter}>
                <Button text="Все" action={modalToggle} />
                <Button text="Активные" action={modalToggle} />
                <Button text="Завершенные" action={modalToggle} />
            </div>
            <Modal isOpen={isOpen} modalToggle={modalToggle}/>
        </section>
     );
}
 
export default MainScreen;