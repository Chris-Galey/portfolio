"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./portfolio.module.css";

const projects = [
  {
    number: "01.",
    title: "Space Guide.",
    description:
      "My first project, space guide. A web application that allows users to view upcoming space launches and news. Technology: JavaScript, CSS, Space Launch API.",
    image: "/spaceguide.png",
    link: "https://chic-belekoy-cddf55.netlify.app/#d5a80dcc-105b-445f-a8c4-394d7c7825ed",
    alt: "screenshot of space guide project",
    width: 1722,
    height: 4173,
  },
  {
    number: "02.",
    title: "Portfolio.",
    description: "My portfolio website. Technology: React, CSS, and NextJS.",
    image: "/portfolio.jpg",
    link: "https://github.com/Chris-Galey/portfolio",
    alt: "screenshot of portfolio project",
    width: 1643,
    height: 887,
  },
  {
    number: "03.",
    title: "Cranberry Lake Campground.",
    description:
      "My first full stack application in the works. A campground application that will include user authentication, booking services, and third-party payment system. Technology: A MERN stack that will be use NextJS framework and stripe payment services. ",
    image: "/CLC.jpg",
    link: "https://github.com/Chris-Galey/cranberry-lake-campground",
    alt: "screenshot of cranberry lake project",
    width: 1895,
    height: 887,
  },
  {
    number: "04.",
    title: "Coming Soon...",
    description: "Project in the works...",
    image: "",
    link: "",
    alt: "screenshot of coming soon project",
    width: 500,
    height: 500,
  },
  {
    number: "05.",
    title: "Coming Soon...",
    description: "Project in the works...",
    image: "",
    link: "",
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
export default function Portfolio() {
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
        <h4 className={styles.featured}>Featured Work.</h4>
      </div>
      <div className={styles.slider__wrapper}>
        <div className={styles.slider} style={curSlide}>
          {projects.map((project, index) => (
            <div className={styles.card} key={project.index}>
              <div className={styles.card__header}>
                <h5 className={styles.number}>{project.number}</h5>
                <h5 className={styles.title}>{project.title}</h5>
              </div>
              {project.image ? (
                <Image
                  src={project.image}
                  width={project.width}
                  height={project.height}
                  alt={project.alt}
                  className={styles.image}
                />
              ) : null}
              <div className={styles.details}>
                <small>{project.description}</small>
                {project.link && (
                  <p>
                    <a href={project.link} target="_blank">
                      View Domain
                    </a>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
