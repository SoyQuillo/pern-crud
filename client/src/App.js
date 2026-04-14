import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskList from "./components/TaskList.js";
import TaskForm from "./components/TaskForm.js";
import { Container } from "@mui/material";
import Menu from "./components/Navbar.js";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Container>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/tasks/new" element={<TaskForm />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
