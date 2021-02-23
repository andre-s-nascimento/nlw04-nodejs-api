import "reflect-metadata";
import express from "express";
import "./database"; //omitimos o nome index.ts por ser esse o que essa conexão busca primeiro
import { router } from "./routes"; //45:42 video.

const app = express();

app.use(express.json());
app.use(router);

app.listen(3333, () => console.log("Server is running!!"));
