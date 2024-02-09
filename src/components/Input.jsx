import styles from "./Input.module.css";

const Input = ({ type = "text", placeholder, eventHandler }) => {
  if (type === "password") {
    return (
      <div className={styles.wrapper}>
        <input
          type={type}
          placeholder={placeholder}
          className={styles.inp}
          onChange={eventHandler}
        />
        <div className={styles.circle}></div>
      </div>
    );
  } else
    return (
      <input
        type={type}
        placeholder={placeholder}
        className={styles.inp}
        onChange={eventHandler}
      />
    );
};

export default Input;
