import { LocalData } from "./datastore/localData";
import { Request, Response } from "express";
import uuid from "uuid";

const data = new LocalData()

export const CreateIssue = (req, res) => {
    console.log(req)
    const { title, description } = req.body || {};
    const issue = {
        id: uuid(),
        title,
        description
    }
    data.create(issue)
    res.status(201).json(issue)
}