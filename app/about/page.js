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
  "I am a Marine veteran with a passion for web development and over a year of experience building web applications using JavaScript and React. In addition to my technical expertise, I am a strong believer in collaboration and teamwork. I thrive in an environment where I can work closely with others, brainstorm ideas, and bring them to fruition. Building web applications is not just a job for me; it's a creative outlet and a way to make a positive impact on people's lives. I am currently seeking new opportunities where I can apply my skills, knowledge, and passion for web development.";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.bio}>
        <h4 className={styles.header__about}>About.</h4>
        <p>{bio}</p>
      </div>
      <div className={styles.skills}>
        <h4 className={styles.header__skills}>Skills.</h4>
        <div className={styles.skills__grid}>
          {skills.map((skill) => (
            <figure className={styles.card} key={skill.skill}>
              <h5>{skill.skill}</h5>
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
