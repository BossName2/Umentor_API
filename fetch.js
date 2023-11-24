import queryExe from "./queryExe.js";

const studentsController = async (req, res, table, feilds) => {
  const id = req.params.id;
  //Build SQL
  const idField = `users.UserID`;
  const userType = "1";
  const extendTable = `${table} 
    INNER JOIN 
        usermodules On (users.UserID = usermodules.UserID)
    INNER JOIN
        modules On (modules.ModuleID = usermodules.ModuleID)
    WHERE users.UserTypeID = ${userType} AND modules.ModuleID IN (
        SELECT usermodules.ModuleID FROM usermodules
        `;
  let sql = `SELECT ${table}.* FROM ${extendTable}`;
  if (id) {
    sql += ` WHERE  ${idField} = ${id})`;
  } else {
    sql += `)`;
  }
  console.log(sql);
  // Execute query
  queryExe(req, res, sql);
};
export default studentsController;
