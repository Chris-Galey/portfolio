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

      <div className={styles.main_nav}>
        <nav className={styles.nav}>
          <ul>
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);

              return (
                <li>
                  <Link
                    className={isActive ? styles.active : styles.inactive}
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

        <div className={styles.socials}>
          <div>
            <a href="">x</a>
          </div>
          <div>
            <a href="">y</a>
          </div>
        </div>
      </div>
    </header>
  );
}
