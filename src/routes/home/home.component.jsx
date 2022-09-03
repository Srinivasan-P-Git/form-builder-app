import { Outlet } from "react-router-dom";

import Header from "../../components/header/header.component";

import "./home.styles.scss";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Outlet />
      {/* <FormBuilder formTemplate={formTemplate} formData={formData} /> */}
    </div>
  );
};

export default Home;
