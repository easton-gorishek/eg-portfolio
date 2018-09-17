import React, { Fragment } from "react";
import Header from '../components/header';
import Greeting from '../components/greeting';
import About from './about';
import Projects from '../components/projects';
import Contact from '../components/contact';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import './index.scss';

export default () => (
  <Fragment>
    <Helmet>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"></link>
    </Helmet>
    <div>
      <Header />
      <Greeting />
      <About />
      <Projects />
      <Contact />
      <Link to="#header" className="up-button">Up</Link>
    </div>
  </Fragment>
);