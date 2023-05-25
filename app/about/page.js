import styles from "./about.module.css";
const skills = [
  { skill: "JavaScript", level: 7 },
  {
    skill: "NodeJS",
    level: 3,
  },
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
const bio =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime odit incidunt atque facilis alias, expedita nesciunt similique voluptas aperiam modi sapiente nam tenetur, minus ratione eius eligendi necessitatibus, molestias saepe.";

export default function About() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.about}>
        <h2>About</h2>
        <p>{bio}</p>
      </div>
      <div className={styles.skills}>
        <h2>Skills</h2>
        <div className={styles.skills__grid}>
          {skills.map((skill) => (
            <figure className={styles.card} key={skill.skill}>
              <h4>{skill.skill}</h4>
              <div className={styles.level}>
                <div
                  className={`${styles.level__bg}`}
                  style={{ height: `${skill.level * 10}%` }}
                ></div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
