import ReactDOM from "react-dom";

import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

const Alert = ({ handleClose, content }) => {
  return (
    <Dialog open>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
};

const alertRoot = document.getElementById("alert-root");
ReactDOM.createPortal(<Alert />, alertRoot);

export default Alert;
