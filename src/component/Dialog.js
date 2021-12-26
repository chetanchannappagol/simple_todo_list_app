import React,{useEffect, useState,useContext} from "react";
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

export default function ADialog(props) {
  useEffect(() => {
    setDetails({
      subject: props.selected && props.selected.subject,
    description: props.selected && props.selected.description,
    dateTime: props.selected && props.selected.dateTime,
    id: props.selected && props.selected.id,
    })
  }, [props.selected])
  const context = useContext(TodoContext);
  const [details, setDetails] = useState({
    subject: props.selected && props.selected.subject,
    description: props.selected && props.selected.description,
    dateTime: props.selected && props.selected.dateTime,
    id: props.selected && props.selected.id,
  });
  const onChangeHandler = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };
  const handleClose = () => {
    props.setOpenEdit(false);
  };
  const onSubmit = () => {
    context.editDetails(details);
    props.setOpenEdit(false);
  };
  
console.log(props)
  return (
    <Dialog
      open={props.openEdit}
      TransitionComponent={Transition}
      // keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      maxWidth='sm'
      fullWidth={true}
    >
      <DialogTitle>{'Edit Todo'}</DialogTitle>
      <DialogContent>
      <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{ display: "flex", flexDirection: "column", padding: "20px",textAlign:'center'}} >
        <div style={{ padding: "20px" }}>
          <TextField
            name="subject"
            type="text"
            placeholder="subject"
            onChange={(e) => onChangeHandler(e)}
            id="outlined-basic"
            // label="subject"
            variant="outlined"
            value={details.subject}
            sx={{
              width: "90%",
            }}
          />
        </div>
        <div style={{ padding: "20px" }}>
          <TextField
            name="description"
            type="text"
            placeholder="description"
            onChange={(e) => onChangeHandler(e)}
            id="outlined-basic"
            // label="description"
            value={details.description}
            variant="outlined"
            sx={{
              width: "90%",
            }}
          />
        </div>
        <div style={{ padding: "20px" }}>
          <TextField
            name="dateTime"
            type="datetime-local"
            // placeholder="subject"
            onChange={(e) => onChangeHandler(e)}
            id="outlined-basic"
            // label="Outlined"
            value={details.dateTime}
            variant="outlined"
            sx={{
              width: "90%",
            }}
          />
        </div>
      </div>
    </Box>
        
        {/* <DialogContentText id="alert-dialog-slide-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText> */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onSubmit}>Confirm</Button>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}
