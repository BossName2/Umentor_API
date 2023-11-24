import queryExe from "../queryExe.js";
import postSql from "../Sql/postSql.js";
//Controllers
const postControler = (req, res, table, feilds) => {
  let sql = postSql(table, feilds);
  console.log(sql);
  // Execute query
  queryExe(req, res, sql);
};

export default postControler;
