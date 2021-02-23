import "reflect-metadata";
import express from "express";
import "./database"; //omitimos o nome index.ts por ser esse o que essa conexão busca primeiro

const app = express();

/**
 * GET => Busca
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Modificar
 * PATCH => Alteração Específica
 **/

// http://localhost:3333/users
app.get("/", (request, response) => {
  return response.json({ message: "Hello World - JSON - NLW04" });
});

app.post("/", (request, response) => {
  return response.json({ message: "Os dados foram salvos com sucesso!" });
});

app.listen(3333, () => console.log("Server is running!!"));
