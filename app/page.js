import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.name}>
        <div className={styles.name__content}>
          {" "}
          <h3 className={styles.prefix}>Hello, I'm</h3>
          <h2>Christopher Galey</h2>
        </div>
      </div>
      <div className={styles.description}>
        <h4>Web developer and Code Platoon student. </h4>
      </div>
      <div className={styles.image}>
        <Image
          src="/hero.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
      <h1 className={styles.welcome__text}>Welcome</h1>
    </section>
  );
}
