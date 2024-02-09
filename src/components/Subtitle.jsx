import styles from "./Subtitle.module.css"

const Subtitle = ({ children, color }) => {
    if(color === "green")
    return <h3 className={styles.sub+ " "+ styles.green}>{ children }</h3> 
    else
    return <h3 className={styles.sub+ " "+ styles.white}>{ children }</h3>
}

export default Subtitle;