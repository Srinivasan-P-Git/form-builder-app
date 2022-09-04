import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

import Alert from "../../components/alert/alert.component";
import Header from "../../components/header/header.component";
import { AlertContext } from "../../context/alert/alert.context";

import "./home.styles.scss";

const Home = () => {
  const { isOpen, alertContent, setIsOpen } = useContext(AlertContext);
  return (
    <Fragment>
      {isOpen && <Alert content={alertContent} handleClose={setIsOpen}></Alert>}
      <div className="home-container">
        <Header />
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Home;
