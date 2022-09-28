import { useNavigate } from "react-router-dom";

import "./header.styles.scss";

const Header = () => {
  const navigate = useNavigate();
  const goToHome = () => navigate("/");
  return (
    <div className="header-container">
      <div className="title" onClick={goToHome}>
        🎯 Form Builder
      </div>
    </div>
  );
};

export default Header;
