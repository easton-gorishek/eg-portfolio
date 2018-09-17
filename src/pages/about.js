import React from "react";
import styles from './about.scss';
import { graphql } from 'gatsby';

export default ({ data }) => (
  <div className={styles.about} id="about">
    <header>
      <h2 className="about-header">ABOUT</h2>
    </header>
    <section className="about-section">
      <p>{console.log('ABOUT', data)}</p>
    </section>
    <header>
      <h2 className="skills-header">SKILLS</h2>
    </header>
    <section  className="skills-section">
      <ul>
        <li>skill</li>
        <li>skill</li>
        <li>skill</li>
        <li>skill</li>
        <li>skill</li>
        <li>skill</li>
        <li>skill</li>
        <li>skill</li>
        <li>skill</li>
        <li>skill</li>
      </ul>
    </section>
  </div>
);

export const query = graphql`
  query AboutQuery {
    allContentfulAbout {
      edges {
        node {
          about {
            about
          }
        }
      }
    }
  }
`;