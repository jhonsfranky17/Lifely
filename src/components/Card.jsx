import styles from "./Card.module.css"

const Card = ({ children }) => {
    return <div className={styles.wrapper}>{ children }</div>
};

export default Card;