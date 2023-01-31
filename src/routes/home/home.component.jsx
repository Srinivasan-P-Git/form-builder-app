import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../../components/header/header.component';

import './home.styles.scss';

const Home = () => {
  return (
    <Fragment>
      <div className="home-container">
        <Header />
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Home;
