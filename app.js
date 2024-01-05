//Import -------------------------------------------
import express from "express";
import cors from "cors";
import fetchStudentsControler from "./Controlers/fetchStudents.js";
import postControler from "./Controlers/post.js";
import deleteControler from "./Controlers/delete.js";
import basicFetch from "./Controlers/basicFetch.js";
import * as tables from "./Data/tables.js";
import * as feilds from "./Data/feilds.js";

//Config express app -------------------------------
const app = new express();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Config middleware --------------------------------

//Controllers --------------------------------------

//Endpoints ---------------------------------------
app.get(`/api/students/moduleLeader`, (req, res) =>
  fetchStudentsControler(req, res, tables.user, feilds.user)
);
app.get(`/api/students/moduleLeader/:id`, (req, res) =>
  fetchStudentsControler(req, res, tables.user, feilds.user)
);
app.post(`/api/students`, (req, res) =>
  postControler(req, res, tables.user, feilds.user)
);
app.post(`/api/availability`, (req, res) =>
  postControler(req, res, tables.ava, feilds.ava)
);
app.delete(`/api/availability`, (req, res) =>
  deleteControler(req, res, tables.ava, feilds.ava)
);
app.get(`/api/timeslots`, (req, res) =>
  basicFetch(req, res, tables.timeslots, feilds.timeslots)
);
app.get(`/api/days`, (req, res) =>
  basicFetch(req, res, tables.days, feilds.days)
);
//Start server ------------------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
