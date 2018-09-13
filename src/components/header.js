import React from 'react';
import { Link } from 'gatsby';
import styles from './header.scss';

export default () => (
  <header className={styles.header}>
    <Link to="#home">Home</Link>
    <Link to="#about">About</Link>
    <Link to="#projects">Projects</Link>
    <Link to="#contact">Contact</Link>
  </header>
);