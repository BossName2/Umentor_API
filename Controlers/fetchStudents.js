import queryExe from "../queryExe.js";
import generateSql from "../Sql/tableFetch.js";
import userExtend from "../Sql/Modifier/userExtend.js";
import idMod from "../Sql/Modifier/idMod.js";

const fetchStudentsControler = async (req, res, table, feilds) => {
  let idField = `usermodules.UserID`;
  let extendTable = userExtend(table, 1);
  let sql = generateSql(table, extendTable);
  sql = idMod(sql, req, idField);
  console.log(sql);
  queryExe(req, res, sql);
};
export default fetchStudentsControler;
