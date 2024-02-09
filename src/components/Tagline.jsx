import styles from "./Tagline.module.css"

const Tagline = ({ children}) => {
    return <h1 className={styles.title}>{ children }</h1>
}

export default Tagline;