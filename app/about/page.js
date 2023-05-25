import styles from "./about.module.css";
const skills = [
  { skill: "JavaScript", level: 6 },
  {
    skill: "React",
    level: 5,
  },
  {
    skill: "Python",
    level: 4,
  },
  {
    skill: "SQL",
    level: 4,
  },
  {
    skill: "CSS 3",
    level: 8,
  },
  {
    skill: "Tailwind",
    level: 5,
  },
];
export default function About() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.about}>
        <h2>About</h2>
        <p>This is the about page</p>
      </div>
      <div className={styles.skills}>
        <h2>Skills</h2>
        <div className={styles.skills__grid}>
          {skills.map((skill) => (
            <figure className={styles.card} key={skill.skill}>
              <h4>{skill.skill}</h4>
              <div className={styles.level}>
                <div className={styles.level__bg}></div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
