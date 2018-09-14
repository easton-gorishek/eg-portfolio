import React from "react";
import Header from '../components/header';
import Greeting from '../components/greeting';
import About from '../components/about';
import Projects from '../components/projects';
import Contact from '../components/contact';
import './index.scss';

export default () => (
  <div>
    <Header />
    <Greeting />
    <About />
    <Projects />
    <Contact />
  </div>
);