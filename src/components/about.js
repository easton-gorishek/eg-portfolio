import React from "react";
import styles from './about.scss';

export default () => (
  <div className={styles.about} id="about">
    <header>
      <h2 className="about-header">ABOUT</h2>
    </header>
    <section className="about-section">
      <p>
        Lorem ipsum dolor amet flannel sustainable bushwick chicharrones portland sriracha occupy whatever. 
        Offal four loko enamel pin, pabst retro mlkshk keytar vice distillery. Chia farm-to-table messenger 
        bag organic swag. Godard 8-bit waistcoat paleo leggings lyft. Squid brooklyn copper mug, PBR&B try-hard 
        marfa bushwick snackwave coloring book pinterest green juice. Roof party forage 8-bit pour-over fam 
        whatever chillwave kogi ennui next level.
      </p>
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
