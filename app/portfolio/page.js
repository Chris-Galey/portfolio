import Image from "next/image";
import styles from "./portfolio.module.css";
const projects = [
  {
    number: "01.",
    title: "Space Guide",
    description: "screenshot of space guide project",
    image: "/spaceguide.png",
    link: "https://github.com/Chris-Galey/Space_Guide",
    width: 500,
    height: 500,
  },
  {
    number: "02.",
    title: "Portfolio",
    description: "Screenshot of portfolio project",
    image: "/hero.jpg",
    link: "https://github.com/Chris-Galey/portfolio",
    width: 500,
    height: 500,
  },
  {
    number: "03.",
    title: "Cranberry Lake Campground",
    description: "Screenshot of cranberry lake campground project",
    image: "/hero.jpg",
    link: "https://github.com/Chris-Galey/cranberry-lake-campground",
    width: 500,
    height: 500,
  },
];
export default function portfolio() {
  return (
    <section className={styles.portfolio}>
      <div className={styles.wrapper}>
        {projects.map((project) => (
          <div className={styles.card} key={project.title}>
            <h4 className={styles.number}>{project.number}</h4>
            <h4 className={styles.title}>{project.title}</h4>
            {/* <Image
              src={project.image}
              width={project.width}
              height={project.height}
              alt={project.description}
              className={styles.image}
            /> */}
            <small className={styles.description}>{project.description}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
