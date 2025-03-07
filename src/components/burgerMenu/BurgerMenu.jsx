import styles from "./BurgerMenu.module.scss"
import Button from "../button/Button";
import { useContext } from "react";
import { TaskContext } from "../../context/taskContext";

const BurgerMenu = (props) => {

    const {setFilter} = useContext(TaskContext)

    if (props.status == false){
        return null
    }
    else{
        return ( 
            <div className={styles.burgerMenu}>
                <div className={styles.burgerMenu__controls}>
                <Button text="Все" action={() =>{setFilter("all"); props.menuToggle()} }/>
                <Button text="Активные" action={() => {setFilter("active"); props.menuToggle()} }/>
                <Button text="Завершенные" action={() =>{setFilter("completed"); props.menuToggle()} }/>
                <Button text="Удалить всю форму" action={()=>{props.modalToggle(2); props.menuToggle()}}/>
                </div>
            </div> );
    }
    
}
 
export default BurgerMenu;