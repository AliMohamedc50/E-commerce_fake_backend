import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { forwardRef, useImperativeHandle, useState } from "react";

const CustomizedSnackbars = forwardRef((props, ref) => {
    const [open, setOpen] = useState(false);

    useImperativeHandle(ref, () => ({
        handleClick() {
            setOpen(true);
        }
    }));
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
        return;
    }

    setOpen(false);
};

return (
  <div>
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={props.severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {props.alertText}
      </Alert>
    </Snackbar>
  </div>
);
});

CustomizedSnackbars.defaultProps = {
  severity: "success",
};

export default CustomizedSnackbars;