import React from 'react';
import { Link } from 'gatsby';
import styles from './header.scss';

export default () => (
  <header className={styles.header}>
    <section className="page-links">
      <Link to="#about">About</Link>
      <Link to="#projects">Projects</Link>
      <Link to="#contact" className="contact-link">Contact</Link>
    </section>
    <section className="social-links">
      <Link to="">LI</Link>
      <Link to="">GH</Link>
    </section>
  </header>
);