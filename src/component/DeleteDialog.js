import React,{useContext} from "react";
import TodoContext from "../Context/TodoContext";
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
  const context = useContext(TodoContext);

  const handleClose = () => {
    props.setOpenDelete(false);
  };
  const onDelete = () => {
    context.deleteDetails(props.selected);
    props.setOpenDelete(false);
  };
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
              Subject  {' '} : {' '} {props.selected && props.selected.subject} 
              </Typography>
              <Typography variant="subtitle1" >
              Description  {' '} : {' '} {props.selected && props.selected.description} 
              </Typography>
              <Typography variant="subtitle1" >
              Date & Time  {' '} : {' '} {props.selected && props.selected.dateTime} 
              </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onDelete}>Confirm</Button>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}
