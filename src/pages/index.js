import React from "react";
import Greeting from '../components/greeting';
import About from '../components/about';
import Skills from '../components/skills';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Header from '../components/header';
import Link from 'gatsby-link';
import './index.scss';

export default () => (
  <div>
    <Header />
    <Greeting />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </div>
);