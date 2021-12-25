import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide'
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DeleteDialog(props) {

  const handleClose = () => {
    props.setOpenDelete(false);
  };
console.log(props)
  return (
    <Dialog
      open={props.openDelete}
      TransitionComponent={Transition}
      // keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      maxWidth='sm'
      fullWidth='false'
    >
      <DialogTitle>{'Delete Todo'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          <Typography variant="subtitle1" >
              Subject  {' '} : {' '} {props.selected.subject} 
              </Typography>
              <Typography variant="subtitle1" >
              Description  {' '} : {' '} {props.selected.description} 
              </Typography>
              <Typography variant="subtitle1" >
              Date & Time  {' '} : {' '} {props.selected.dateTime} 
              </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Confirm</Button>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}
