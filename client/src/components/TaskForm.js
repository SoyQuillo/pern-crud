import {
  Grid,
  Card,
  Typography,
  CardContent,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function TaskForm() {
  const navigate = useNavigate();
  const params = useParams();

  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);

  const [task, setTask] = useState({ title: "", description: "" });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const loadTask = async (id) => {
    const res = await fetch(`http://localhost:3000/tasks/${id}`);
    const data = await res.json();
    setTask({ title: data.title, description: data.description });

    setEditing(true);
  };

  useEffect(() => {
    if (params.id) {
      loadTask(params.id);
    }
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (editing) {
      const res = await fetch(`http://localhost:3000/tasks/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
      })
    } else {
      const res = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });

      const data = await res.json();

      console.log(data);
    }
    setLoading(false);
    navigate("/");
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
            {editing ? "Edit Task" : "Create Task"}
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="filled"
                label="Write your title"
                name="title"
                value={task.title}
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
                value={task.description}
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

              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={!task.title || !task.description}
              >
                {loading ? (
                  <CircularProgress color="inherit" size={24} />
                ) : (
                  "Save"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default TaskForm;
