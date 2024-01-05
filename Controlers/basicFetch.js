import queryExe from "../queryExe.js";
import generateSql from "../Sql/tableFetch.js";
import idMod from "../Sql/Modifier/idMod.js";

const basicFetch = async (req, res, table, feilds) => {
  let idField = `${table}.${feilds[0]}`;
  let sql = generateSql(table, table);
  console.log(sql);
  queryExe(req, res, sql);
};
export default basicFetch;
