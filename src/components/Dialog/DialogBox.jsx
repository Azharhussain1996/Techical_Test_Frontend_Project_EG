import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const DialogBox = ({
  open,
  onClose,
  title,
  children,
  actions,
  maxWidth = "sm",
  fullWidth = true,
  ...props
}) => {
  return (
    <Dialog
      open={open}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      keepMounted
      {...props}
      BackdropProps={{
        sx: {
          backgroundColor: "rgba(0, 0, 0, 0.2) !important",
        },
      }}
    >
      <div className="d-flex justify-content-between modal-header">
        <DialogTitle id="customized-dialog-title fw-sm modal-title m-0 p-2">
          <Typography variant="body1">{title}</Typography>
        </DialogTitle>
        <IconButton
          onClick={onClose}
          color="inherit"
          disableRipple
          className="icon-button btn-primary"
        >
          <CloseIcon />
        </IconButton>
      </div>

      <DialogContent className="p-4 pt-1 modal-body">{children}</DialogContent>

      {actions && <DialogActions>{actions}</DialogActions>}
    </Dialog>
  );
};

export default DialogBox;
