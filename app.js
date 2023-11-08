//Import -------------------------------------------
import express from "express";
import database from "./database.js";

//Config express app -------------------------------
const app = new express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Config middleware --------------------------------

//Controllers --------------------------------------
const userAddController = async (req, res) => {
  console.log(req.body);
  const id = req.body.id;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const userTypeID = req.body.userTypeID;
  const userImageURL = req.body.userImageURL;
  //Build SQL
  const table = "users";
  const feilds = [
    `UserID`,
    `FirstName`,
    `LastName`,
    `Email`,
    `UserTypeID`,
    `UserImageURL`,
  ];
  const values = [
    id,
    `"${firstName}"`,
    `"${lastName}"`,
    `"${email}"`,
    userTypeID,
    `"${userImageURL}"`,
  ];
  const placeholder = [
    `:id`,
    `:firstName`,
    `:lastName`,
    `:email`,
    `:userTypeID`,
    `:userImageURL`,
  ];

  let sql = `INSERT INTO ${table} (${feilds}) VALUES (${placeholder})`;
  console.log(sql);
  // Execute query
  let isSuccess = false;
  let message = "";
  let result = null;
  try {
    [result] = await database.query(sql, req.body);
    if (result.lenght === 0) message = "No records found";
    else {
      isSuccess = true;
      message = "record successfully added";
    }
  } catch (error) {
    message = `Failed to execute query: ${error.message}`;
  }
  // Responses
  isSuccess
    ? res.status(200).json(result)
    : res.status(400).json({ message: message });
};
//-----------------------------
const studentsController = async (req, res) => {
  const id = req.params.id;
  //Build SQL
  const table = "users";
  const idField = `UserID`;
  const userType = "1";
  const feilds = [
    `users.UserID`,
    `users.FirstName`,
    `users.LastName`,
    `users.Email`,
    `users.UserImageURL`,
  ];
  const extendTable = `${table} 
  INNER JOIN 
      usermodules On (users.UserID = usermodules.UserID)
  INNER JOIN
      modules On (modules.ModuleID = usermodules.ModuleID)
  WHERE users.UserTypeID = ${userType} AND modules.ModuleID IN (
      SELECT usermodules.ModuleID FROM usermodules
      `;
  let sql = `SELECT ${feilds} FROM ${extendTable}`;
  if (id) {
    sql += ` WHERE  ${idField} = ${id})`;
  } else {
    sql += `)`;
  }
  console.log(sql);
  // Execute query
  let isSuccess = false;
  let message = "";
  let result = null;
  try {
    [result] = await database.query(sql, req.body);
    if (result.lenght === 0) message = "No records found";
    else {
      isSuccess = true;
      message = "records successfully recovered";
    }
  } catch (error) {
    message = `Failed to execute query: ${error.message}`;
  }
  // Responses
  isSuccess
    ? res.status(200).json(result)
    : res.status(400).json({ message: message });
};
//Endpoints ---------------------------------------
app.get(`/api/students/moduleLeader`, studentsController);
app.get(`/api/students/moduleLeader/:id`, studentsController);
app.post(`/api/students`, userAddController);
//Start server ------------------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
