import styles from "./contact.module.css";
const services = [
  {
    title: "Front-end",
    description: "Let me turn your brand story into a digital experience.",
  },
  {
    title: "Back-end",
    description:
      "Light experience using NodeJS, express, and MongoDB, including user authentication and payments.",
  },
  {
    title: "UI/UX",
    description:
      "Always exploring new ways to make websites more responsive and friendly.",
  },
];
export default function contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.services}>
        <h4 className={styles.header__services}>What I do.</h4>
        <div className={styles.services__grid}>
          {services.map((service) => (
            <figure className={styles.services__card} key={service.title}>
              <h5>{service.title}</h5>
              <small>{service.description}</small>
            </figure>
          ))}
        </div>
      </div>
      <div className={styles.form}>
        <h4 className={styles.header__contact}>Let's chat.</h4>
        <div className={styles.form__wrapper}>
          <form>
            <label htmlFor="name">
              Name
              <input type="text" />
            </label>
            <label htmlFor="msg">
              Message
              <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
            </label>
          </form>
        </div>
      </div>
    </section>
  );
}
