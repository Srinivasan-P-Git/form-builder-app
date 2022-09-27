import "./configure-json.styles.scss";

import Button from "../button/button.component";

const ConfigureJson = () => {
  return (
    <div className="configure-json-container">
      <Button>Generate Form</Button>
      <div className="configure-json-wrapper">
        <div className="json-template">
          <label>Enter Template JSON</label>
          <textarea></textarea>
        </div>
        <div className="json-data">
          <label>Enter Data JSON</label>
          <textarea></textarea>
        </div>
      </div>
    </div>
  );
};

export default ConfigureJson;
