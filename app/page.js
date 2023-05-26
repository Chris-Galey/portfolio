import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.name}>
        <div className={styles.name__content}>
          {" "}
          {/* <h3>Hello, I'm</h3> */}
          <h1>Christopher Galey</h1>
        </div>
      </div>
      <div className={styles.description}>
        <h3>Web developer and Code Platoon student. </h3>
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
