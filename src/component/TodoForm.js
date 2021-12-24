import React, { useContext, useState } from "react";
import TodoContext from "../Context/TodoContext";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

function TodoForm() {
  const context = useContext(TodoContext);
  const [details, setDetails] = useState({
    subject: "",
    description: "",
    dateTime: "",
    id: Math.random(),
  });

  const onChangeHandler = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = () => {
    context.addDetails(details);
    setDetails({
      subject: "",
      description: "",
      dateTime: "",
    });
  };
  console.log(context.details);
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{ display: "flex", flexDirection: "column", padding: "20px",textAlign:'center'}} >
        <Typography variant="h5">Add Todo</Typography>
        <div style={{ padding: "20px" }}>
          <TextField
            name="subject"
            type="text"
            placeholder="subject"
            onChange={(e) => onChangeHandler(e)}
            id="outlined-basic"
            label="subject"
            variant="outlined"
            sx={{
              width: "40%",
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
            label="description"
            variant="outlined"
            sx={{
              width: "40%",
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
            variant="outlined"
            sx={{
              width: "40%",
            }}
          />
        </div>
        <Typography variant="caption" display="block" gutterBottom>
        *All fields are mandatory
      </Typography>
        <div
          style={{
            padding: "20px",
          }}
        >
          <Button
            onClick={() => onSubmit()}
            style={{ padding: "10px 30px", margin: "0px 20px",width:'120px' }}
            variant="outlined" color="info"
            disabled={(details.subject.length === 0 || details.description.length === 0 || details.dateTime.length === 0) ? true : false}
          >
            Add
          </Button>
          <Button variant="outlined" color="warning" style={{ padding: "10px 30px", width:'120px' }}>Cancel</Button>
        </div>

      </div>
    </Box>
  );
}

export default TodoForm;
