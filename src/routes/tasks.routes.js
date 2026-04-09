import { Router } from "express";
import pool from "../db.js";
const router = Router();

router.get("/tasks", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.json(result.rows[0].now);
});

router.get("/tasks/10", (req, res) => {
  res.send("Retornando una sola tarea");
});

router.post("/tasks", (req, res) => {
  res.send("creando una tarea");
});

router.delete("/tasks", (req, res) => {
  res.send("Eliminando una tarea");
});

router.put("/tasks", (req, res) => {
  res.send("Actualizando una tarea");
});

export default router;
