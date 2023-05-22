import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.name}>
        <h1 className={styles.name__content}>Chris Galey</h1>
      </div>
      <div className={styles.description}>
        <h2 class={styles.description__content}>
          A designer/front-end developer with a passion for web design.{" "}
        </h2>
      </div>
      <div className={styles.image}>
        <div className={styles.TRborder}></div>
        <div className={styles.BLborder}></div>
        <Image
          src="/hero.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
      <div className={styles.welcome}>Welcome</div>
    </section>
  );
}
