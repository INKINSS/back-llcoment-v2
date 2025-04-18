import express from "express";
import router from "./routes/articles.routes.js";
import conectDB from './config/db.js'
import cors from 'cors'
const app = express();

const PORT = process.env.PORT || 3000;

conectDB()

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router);


export default app;
