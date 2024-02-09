import styles from "./Page.module.css"
const Page = ({ children, direction }) => {
    if(direction === "row")
    return <div className={styles.page}>{ children }</div>
    else
    return <div className={styles.page+" "+styles.column}>{ children }</div>
};
export default Page;