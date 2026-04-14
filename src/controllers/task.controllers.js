import pool from "../db.js";

export const getAllTasks = async (req, res) => {
  try {
    const allTasks = await pool.query("SELECT * FROM task");
    res.json(allTasks.rows);
    res.send("Tareas");
  } catch (error) {
    next(error);
  }
};

export const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const getTask = await pool.query("SELECT * FROM task WHERE id = $1", [id]);
    if (getTask.rows.length === 0)
      return res.status(404).json({ message: "Tarea no encontrada" });

    return res.json(getTask.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const createTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    const result = await pool.query(
      "INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *",
      [title, description],
    );

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteTask = await pool.query("DELETE FROM task WHERE id = $1 ", [
      id,
    ]);
    if (deleteTask.rowCount === 0)
      return res.status(404).json({ message: "Tarea no encontrada" });

    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const updateTask = await pool.query(
      "UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *",
      [title, description, id],
    );

    if (updateTask.rowCount === 0)
      return res.status(404).json({ message: "Tarea no encontrada" });

    return res.json(updateTask.rows[0]);
  } catch (error) {
    next(error);
  }
};
