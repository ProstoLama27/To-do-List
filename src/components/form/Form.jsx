import styles from "./Form.module.scss"
const Form = () => {
    return ( 
        <div className={styles.form}>
            <form action="" className={styles.form__container}>
                <input type="text" placeholder="Введите задачу"/>
                <button>Записать</button>
            </form>
            
        </div>
     );
}
 
export default Form;