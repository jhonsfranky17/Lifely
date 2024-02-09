import styles from "./Input.module.css";

const Input = ({ type = "text", placeholder }) => {
  if (type === "password") {
    return (
      <div className={styles.wrapper}>
        <input type={type} placeholder={placeholder} className={styles.inp} />
        <div className={styles.circle}></div>
      </div>
    );
  } else
    return (
      <input type={type} placeholder={placeholder} className={styles.inp} />
    );
};

export default Input;
