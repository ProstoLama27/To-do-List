import Button from "../button/Button";
import styles from "./ModalScreenDeletAll.module.scss"
const ModalScreenDeletAll = ({ modalToggle }) => {
    return ( 
        <div className={styles.container}>
            <p className={styles.container__text}>Вы уверенны, что хотите удалить все задачи</p>
            <div className={styles.container__control}>
                <Button text="Да"/>
                <Button text="Нет" action={modalToggle}/>
            </div>
        </div>
     );
}
 
export default ModalScreenDeletAll;