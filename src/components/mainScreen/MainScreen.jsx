import styles from "./MainScreen.module.scss"
const MainScreen = () => {
    return ( 
        <section className={styles.mainScreen}>
            <div className={styles.mainScreen__header}>
                <h1>Мои задачи</h1>
            </div>
            <div>
                <button>Записать задачу</button>
            </div>
            {/* задачи */}
            <div className={styles.mainScreen__philter}>
                <button>Все</button>
                <button>Активные</button>
                <button>Завершенные</button>
            </div>
        </section>
     );
}
 
export default MainScreen;