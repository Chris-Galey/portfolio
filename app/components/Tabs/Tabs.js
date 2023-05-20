import styles from "./Tabs.module.css";
export default function Tabs() {
  return (
    <div className={styles.tabs}>
      <div className={styles.tab}>Home</div>
      <div className={styles.tab}>Portfolio</div>
      <div className={styles.tab}>About</div>
      <div className={styles.tab}>Contact</div>
    </div>
  );
}
