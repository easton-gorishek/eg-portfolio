import React from 'react';
import { Link } from 'gatsby';
import styles from './header.scss';

export default ({data}) => (
  <header className={styles.header} id="header">
    <section className="page-links">
      <Link to="#about">About</Link>
      <Link to="#projects">Projects</Link>
      <Link to="#contact" className="contact-link">Contact</Link>
    </section>
    <section className="social-links">
      <a href="https://www.linkedin.com/in/easton-gorishek/"><i className="fab fa-linkedin-in"></i></a>
      <a href="https://github.com/easton-gorishek"><i className="fab fa-github"></i></a>
    </section>
  </header>
);