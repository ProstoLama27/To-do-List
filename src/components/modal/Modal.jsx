import Form from "../form/Form";
import ModalScreenDeletAll from "../modalScreenDeletAll/ModalScreenDeletAll";
import styles from "./Modal.module.scss"
import { IoCloseSharp } from "react-icons/io5";
const Modal = (props) => {

    const toggleModalCOntent = () =>{
        switch(props.content){
            case 1:
                return <Form/>
                
            
            case 2:
                return <ModalScreenDeletAll modalToggle={props.modalToggle}/>
        }
    }


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
               {toggleModalCOntent()}
            </div> );
    }
   
}
 
export default Modal;