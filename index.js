import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import connection from "./database/db.js";

const app = express();
app.use(cors());
configDotenv();
const url = process.env.MONGODB_URL;
const PORT = 8000;
connection(url);
app.listen(PORT, () => console.log(`App is running on Port ${PORT}`));
