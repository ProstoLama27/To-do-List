import styles from "./Modal.module.scss"
import { IoCloseSharp } from "react-icons/io5";
const Modal = (props) => {
    if(props.isOpen == false) {
        return null
    }
    else{
        return ( 
            <div className={styles.modal}>
                <div className={styles.modal__header}>
                    <button onClick={props.modalToggle} className={styles.modal__header__btn}>
                        <IoCloseSharp/>
                    </button>
                </div>
            </div> );
    }
   
}
 
export default Modal;