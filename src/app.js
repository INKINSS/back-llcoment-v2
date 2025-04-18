import express from "express";
import router from "./routes/articles.routes.js";
import conectDB from './config/db.js'
const app = express();

const PORT = process.env.PORT || 3000;

conectDB()

app.use("/", router);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


export default app;
