//Import -------------------------------------------
import express from "express";
//import cors from cors;

import addController from "./add.js";
import postControler from "./Controlers/post.js";
import studentsController from "./fetch.js";
import userTable from "./Data/tables.js";
import userFeilds from "./Data/feilds.js";

//Config express app -------------------------------
const app = new express();
//app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Config middleware --------------------------------

//Controllers --------------------------------------

//Endpoints ---------------------------------------
app.get(`/api/students/moduleLeader`, (req, res) =>
  studentsController(req, res, userTable, userFeilds)
);
app.get(`/api/students/moduleLeader/:id`, (req, res) =>
  studentsController(req, res, userTable, userFeilds)
);
app.post(`/api/students`, (req, res) =>
  postControler(req, res, userTable, userFeilds)
);

//Start server ------------------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
