import styles from "./Login.module.css"

const Login = ({ children }) => {
    return <p className={styles.line}>{ children }</p>
};

export default Login;