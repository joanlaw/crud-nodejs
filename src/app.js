import express from "express";
import morgan from "morgan";

//Routes

import LenguageRoutes from "./routes/lenguage.route";

const app=express();

// Settings

app.set("port", 4800);

// Middlewares

app.use(morgan("dev"));

//Routes

app.use("/api/languages", LenguageRoutes);

export default app;