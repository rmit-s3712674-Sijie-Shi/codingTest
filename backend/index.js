import express from 'express';
import { CreateIssue, GetIssue, UpdateIssue, DeleteIssue } from "./src/functions"

const app = express;
app.request(express.json());

app.post("/issue", CreateIssue)
app.get("/issue/:id", GetIssue)
app.put("/issue/:id", UpdateIssue)
app.delete("/issue/:id", DeleteIssue)

startServer(app, 8080)