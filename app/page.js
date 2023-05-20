import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.content}></div>
      <div className={styles.image}>
        {" "}
        <Image
          src="/hero.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
    </section>
  );
}
