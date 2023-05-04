import express from 'express';
import { CreateIssue, GetIssue, UpdateIssue, DeleteIssue } from "./src/functions.js"
import serverStart from './serverStart.js';

const app = express();
app.use(express.json());

app.post("/issue", CreateIssue)
app.get("/issue/:id", GetIssue)
app.put("/issue/:id", UpdateIssue)
app.delete("/issue/:id", DeleteIssue)

serverStart(app, 8080)