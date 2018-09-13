import React from "react";
import styles from './greeting.scss';

export default () => (
  <div className={styles.greeting}>
    <header>
      <i className="fas fa-user-astronaut"></i>
      <hgroup>
        <h1>Easton Gorishek</h1>
        <h2>software developer</h2>
      </hgroup>
    </header>
  </div>
);
