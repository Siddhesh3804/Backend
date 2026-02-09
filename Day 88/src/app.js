const express = require("express");
const app = express();

app.use(express.json());

const notes = [];

app.post("/notes", (req,res) => {
    console.log(req.body);
    notes.push(req.body);
    res.send("Note Created Successfully");
});

app.get("/notes", (req,res) => {
    res.send(notes);
});

app.delete("/notes/:index", (req,res) => {
    delete notes[req.params.index];
    res.send("Note Deleted Successfully");
});

app.patch("/notes/:index", (req,res) => {
    notes[req.params.index].Description = req.body.Description;
    res.send("Note Upadated Successfully");
});

app.put("/notes/:index", (req,res) => {
    notes[req.params.index].Title = req.body.Title;
    notes[req.params.index].Description = req.body.Description;
    res.send("Note Upadated Successfully");
});

module.exports = app;