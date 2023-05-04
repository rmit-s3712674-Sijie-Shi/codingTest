import { LocalData } from "./datastore/localData";
import uuid from "uuid";

const data = new LocalData()

export const CreateIssue = (req, res) => {
    console.log(req);
    const { title, description } = req.body || {};
    const issue = {
        id: uuid(),
        title,
        description
    };
    data.create(issue);
    res.status(201).json(issue);
}

export const GetIssue = (req, res) => {
    const { id } = req.params;
    const issue = data.read(id);
    issue ? res.status(200).json(issue) : res.status(404).send('Issue not found');
}

export const UpdateIssue = (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const issue = data.update(id, { title, description });
    issue ? res.status(200).json(issue) : res.status(404).send('Issue not found');
}

export const IssueDelete = (req, res) => {
    const { id } = req.params;
    data.delete(id);
    res.status(204).send();
}