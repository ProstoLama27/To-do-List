import styles from "./Buttin.module.scss"
const Button = (props) => {
    return (  
        <button onClick={props.action} className={styles.button}>
            {props.text}
        </button>
      );
}
 
export default Button;