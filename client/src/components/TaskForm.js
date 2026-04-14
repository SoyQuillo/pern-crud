import {
  Grid,
  Card,
  Typography,
  CardContent,
  TextField,
  Button,
} from "@mui/material";

import { useState, useEffect } from "react";

function TaskForm() {
  const [task, setTask] = useState({ title: "", description: "" });

  const handleChange = (e) => {
      setTask({...task, [e.target.name]: e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={3}>
        <Card
          sx={{ mt: 5 }}
          style={{ backgroundColor: "#1e272e", padding: "1rem" }}
        >
          <Typography variant="h5" textAlign="center" color="white">
            Create Task
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="filled"
                label="Write your title"
                name="title"
                onChange={handleChange}
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                  input: { color: "white" },
                  label: { color: "gray" },
                }}
              />
              <TextField
                variant="filled"
                label="Write your description"
                multiline
                rows={4}
                name="description"
                onChange={handleChange}
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                  "& .MuiFilledInput-input": {
                    color: "white",
                  },
                  "& textarea": {
                    color: "white",
                  },
                  "& .MuiInputLabel-root": {
                    color: "gray",
                  },
                  "& .MuiFilledInput-root": {
                    backgroundColor: "#2f3640",
                  },
                }}
              />

              <Button variant="contained" color="primary" type="submit">
                Save
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default TaskForm;
