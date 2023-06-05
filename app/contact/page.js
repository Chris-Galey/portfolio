"use client";
import { useState } from "react";
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
export default function Contact() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");
  const [success, setSuccess] = useState(null);

  const nameChangeHandler = (e) => {
    if (e.target.value.length > 25) {
      setNameError(true);
    } else {
      setName(e.target.value);
      setNameError(false);
    }
  };
  const msgChangeHandler = (e) => {
    if (e.target.value.length > 500) {
      setMessageError(true);
    } else {
      setMessage(e.target.value);
      setMessageError(false);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    try {
      await fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      setSuccess("Succcessfully submitted, I'll be in touch!");
    } catch (err) {
      setSuccess("Something went wrong, please try again.");
    }
    setName("");
    setEmail("");
    setMessage("");
  };

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
        <h4 className={styles.header__contact}>Let&apos;s chat.</h4>
        <div className={styles.form__wrapper}>
          <form
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="contact"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div className={styles.content}>
              <div className={styles.info}>
                <label htmlFor="yourname">
                  Name
                  <input
                    name="name"
                    type="text"
                    id="yourname"
                    placeholder="Your Name"
                    value={name}
                    onChange={nameChangeHandler}
                    required
                  />
                  <p>{nameError && "Name below 25 characters please"}</p>
                </label>

                <label htmlFor="youremail">
                  Email
                  <input
                    name="email"
                    type="email"
                    id="youremail"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>
              </div>

              <div className={styles.msg}>
                <label htmlFor="yourmessage">
                  Message
                  <textarea
                    name="message"
                    id="yourmessage"
                    value={message}
                    placeholder="Your Message..."
                    onChange={msgChangeHandler}
                    required
                  ></textarea>
                </label>
                <p>{messageError && "500 characters or less"}</p>
              </div>
            </div>
            <div className={styles.btn}>
              <button className={styles.submit} type="submit">
                <p>Send</p>
              </button>
              <p>{success ? "success" : ""}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
