import styles from "./Section.module.css"

const Section = ({ children }) => {
return <div className={styles.sec}>{ children }</div>
};
export default Section;