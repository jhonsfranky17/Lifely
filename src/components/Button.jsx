import styles from "./Button.module.css";

const Button = ({ children, variant, eventHandler }) => {
  if (variant === "contained")
    return (
      <button
        className={styles.btn + " " + styles.contained}
        onClick={eventHandler}
      >
        {children}
      </button>
    );
  else
    return (
      <button
        className={styles.btn + " " + styles.outlined}
        onClick={eventHandler}
      >
        {children}
      </button>
    );
};

export default Button;
