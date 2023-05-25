"use client";
import Image from "next/image";
import styles from "./home.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <section className={styles.home}>
      <div className={styles.name}>
        <h1 className={styles.name__content}>Christopher Galey</h1>
      </div>
      <div className={styles.description}>
        <h2 className={styles.description__content}>
          A designer/front-end developer with a passion for web design.{" "}
        </h2>
      </div>
      <div className={styles.image}>
        {/* <div className={styles.TRborder}></div>
        <div className={styles.BLborder}></div> */}
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
