import queryExe from "../queryExe.js";
import deleteSql from "../Sql/deleteSql.js";
//Controllers
const deleteControler = (req, res, table, feilds) => {
  let sql = deleteSql(table, feilds);
  console.log(sql);
  // Execute query
  queryExe(req, res, sql);
};

export default deleteControler;
