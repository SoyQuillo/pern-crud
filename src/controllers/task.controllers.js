import pool from "../db.js";

export const getAllTasks = async (req, res) => {
  res.send("Lista de tareas");
};

export const getTask = async (req, res) => {
  res.send("Una tarea");
};

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    const result = await pool.query(
      "INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *",
      [title, description],
    );

    res.json(result.rows[0]);
  } catch (error) {
    res.json({error: error.message})
  }
};

export const deleteTask = async (req, res) => {
  res.send("Eliminando una tarea");
};

export const updateTask = async (req, res) => {
  res.send("Actualizando una tarea");
};
