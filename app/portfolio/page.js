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
    alt: "screenshot of space guide project",
    width: 500,
    height: 500,
  },
  {
    number: "02.",
    title: "Portfolio.",
    description: "Screenshot of portfolio project",
    image: "/hero.jpg",
    link: "https://github.com/Chris-Galey/portfolio",
    alt: "screenshot of portfolio project",
    width: 500,
    height: 500,
  },
  {
    number: "03.",
    title: "Cranberry Lake Campground.",
    description: "Screenshot of cranberry lake campground project",
    image: "/hero.jpg",
    link: "https://github.com/Chris-Galey/cranberry-lake-campground",
    alt: "screenshot of cranberry lake project",
    width: 500,
    height: 500,
  },
  {
    number: "04.",
    title: "Coming Soon...",
    description: "Project in the works...",
    image: "/",
    link: "https://github.com/Chris-Galey/cranberry-lake-campground",
    alt: "screenshot of coming soon project",
    width: 500,
    height: 500,
  },
  {
    number: "05.",
    title: "Coming Soon...",
    description: "Project in the works...",
    image: "",
    link: "https://github.com/Chris-Galey/cranberry-lake-campground",
    alt: "screenshot of coming soon project",
    width: 500,
    height: 500,
  },
  {
    number: "06.",
    title: "Coming Soon...",
    description: "Project in the works...",
    image: "",
    link: "https://github.com/Chris-Galey/cranberry-lake-campground",
    alt: "screenshot of coming soon project",
    width: 500,
    height: 500,
  },
];
export default function portfolio() {
  const [slide, setSlide] = useState(0);
  const curSlide = {
    transform: `translateX(${slide * -25}%)`,
  };

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
      <div className={styles.header}>
        <h4 className={styles.featured}>Featured Work.</h4>
      </div>
      <div className={styles.slider__wrapper}>
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
        <div className={styles.slider} style={curSlide}>
          {projects.map((project, index) => (
            <div className={styles.card} key={project.index}>
              <h5 className={styles.number}>{project.number}</h5>
              <h5 className={styles.title}>{project.title}</h5>

              <Image
                src={project.image}
                width={project.width}
                height={project.height}
                alt={project.alt}
                className={styles.image}
              />
              <div className={styles.details}>
                <small>{project.description}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
