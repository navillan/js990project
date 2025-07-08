import express from "express";
import cors from "cors";
import projectRouter from "./routes/projectRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/guests", projectRouter);

const PORT = 5000

app.listen(PORT,()=>console.log(`API: http://localhost:${PORT}/api/guests`))