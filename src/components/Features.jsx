import styles from "./Features.module.css"

const Features = ({children}) => {
    return <div className={styles.wrapper}>
        <div className={styles.circle}></div>
        <h3 className={styles.feat}>{ children }</h3>
    </div>
}

export default Features;