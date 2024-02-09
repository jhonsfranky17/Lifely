import styles from "./Button.module.css"

const Button = ({ children, variant}) => {
    if (variant === "contained")
    return <button className={styles.btn+ " "+ styles.contained}>{children}</button>
    else
    return <button className={styles.btn+ " "+ styles.outlined}>{children}</button>
};

export default Button;