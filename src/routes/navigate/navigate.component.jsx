import { Link } from "react-router-dom";

import "./navigate.styles.scss";

const Navigate = () => {
  return (
    <div className="navigate-container">
      <div className="nav-link">
        <Link to={"form"}>Generate Form</Link>
      </div>
    </div>
  );
};

export default Navigate;
