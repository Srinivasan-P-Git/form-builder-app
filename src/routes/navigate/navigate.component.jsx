import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/button/button.component';

import './navigate.styles.scss';

const Navigate = () => {
  return (
    <div className="navigate-container">
      <div className="nav-heading">
        Hi!! Build your form instantly &#128522;
      </div>
      <div className="nav-link-container">
        <div className="nav-link-wrapper">
          <Button>
            <Link to={'configure-json'}>{'Use JSON {...}'}</Link>
          </Button>
          <Button>
            {'Use API </>'}
            <div className="btn-subtext">Coming soon...</div>
            {/* <Link to={"configure-api"}>{"Use API </>"}</Link> */}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navigate;
