"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./portfolio.module.css";

const projects = [
  {
    number: "01.",
    title: "Space Guide.",
    description: "screenshot of space guide project",
    image: "/spaceguide.png",
    link: "https://github.com/Chris-Galey/Space_Guide",
    width: 500,
    height: 500,
  },
  {
    number: "02.",
    title: "Portfolio.",
    description: "Screenshot of portfolio project",
    image: "/hero.jpg",
    link: "https://github.com/Chris-Galey/portfolio",
    width: 500,
    height: 500,
  },
  {
    number: "03.",
    title: "Cranberry Lake Campground.",
    description: "Screenshot of cranberry lake campground project",
    image: "/hero.jpg",
    link: "https://github.com/Chris-Galey/cranberry-lake-campground",
    width: 500,
    height: 500,
  },
  {
    number: "04.",
    title: "Coming Soon...",
    description: "Project in the works...",
    image: "",
    link: "https://github.com/Chris-Galey/cranberry-lake-campground",
    width: 500,
    height: 500,
  },
  {
    number: "05.",
    title: "Coming Soon...",
    description: "Project in the works...",
    image: "",
    link: "https://github.com/Chris-Galey/cranberry-lake-campground",
    width: 500,
    height: 500,
  },
  {
    number: "06.",
    title: "Coming Soon...",
    description: "Project in the works...",
    image: "",
    link: "https://github.com/Chris-Galey/cranberry-lake-campground",
    width: 500,
    height: 500,
  },
];
export default function portfolio() {
  const [slide, setSlide] = useState(0);
  const curSlide = {
    transform: `translateX(${slide * -25}%)`,
  };
  console.log(slide, curSlide);

  function nextSlider() {
    if (slide >= 2) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  }

  function prevSlider() {
    if (slide <= 0) {
      setSlide(2);
    } else {
      setSlide(slide - 1);
    }
  }

  return (
    <section className={styles.portfolio}>
      <div className={styles.slider__wrapper}>
        <small className={styles.slider__title}>Featured Work</small>
        <div className={styles.slider} style={curSlide}>
          {projects.map((project, index) => (
            <div className={styles.card} key={project.index}>
              <h4 className={styles.number}>{project.number}</h4>
              <h4 className={styles.title}>{project.title}</h4>

              <Image
                src={project.image}
                width={project.width}
                height={project.height}
                alt={project.description}
                className={styles.image}
              />
              <q className={styles.description}>{project.description}</q>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.scroll}>
        <div className={styles.pagination}>
          <div
            className={
              slide == 0
                ? `${styles.bar} ${styles.bar__active}`
                : `${styles.bar}`
            }
          ></div>
          <div
            className={
              slide == 1
                ? `${styles.bar} ${styles.bar__active}`
                : `${styles.bar}`
            }
          ></div>
          <div
            className={
              slide == 2
                ? `${styles.bar} ${styles.bar__active}`
                : `${styles.bar}`
            }
          ></div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={prevSlider}>
            <div className={styles.button__prev}>&larr;</div>
          </button>
          <button className={styles.button} onClick={nextSlider}>
            <div className={styles.button__next}>&rarr;</div>
          </button>
        </div>
      </div>
    </section>
  );
}
