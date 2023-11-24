//Import -------------------------------------------
import express from "express";
import cors from "cors";
import fetchStudentsControler from "./Controlers/fetchStudents.js";
import postControler from "./Controlers/post.js";
import userTable from "./Data/tables.js";
import userFeilds from "./Data/feilds.js";

//Config express app -------------------------------
const app = new express();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Config middleware --------------------------------

//Controllers --------------------------------------

//Endpoints ---------------------------------------
app.get(`/api/students/moduleLeader`, (req, res) =>
  fetchStudentsControler(req, res, userTable, userFeilds)
);
app.get(`/api/students/moduleLeader/:id`, (req, res) =>
  fetchStudentsControler(req, res, userTable, userFeilds)
);
app.post(`/api/students`, (req, res) =>
  postControler(req, res, userTable, userFeilds)
);

//Start server ------------------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
