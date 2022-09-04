import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

const Alert = ({ handleClose, content }) => {
  return (
    <Dialog open>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose(false)}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Alert;
