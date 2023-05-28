"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const navLinks = [
    { href: "/", name: "home" },
    { href: "/portfolio", name: "portfolio" },
    { href: "/about", name: "about" },
    { href: "/contact", name: "contact" },
  ];
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.name}>
        <span className={styles.christopher}>Christopher</span>
        <span className={styles.galey}>Galey</span>
      </div>

      <div className={styles.nav__wrapper}>
        <nav className={styles.nav}>
          <ul>
            {navLinks.map((link) => {
              const isActive = pathname.length > 1 && pathname === link.href;

              return (
                // eslint-disable-next-line react/jsx-key
                <li className={styles.item}>
                  <Link
                    className={isActive ? styles.active : ""}
                    href={link.href}
                    key={link.name}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.nav__socials}>
          <button className={styles.nav__social}>
            <a href="https://github.com/Chris-Galey">Github</a>
          </button>
          <button className={styles.nav__social}>
            <a href="https://www.linkedin.com/in/chris-galey-245156243/">
              LinkedIn
            </a>
          </button>
        </div>
      </div>
    </header>
  );
}
