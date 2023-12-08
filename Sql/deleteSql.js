import generatePlaceholder from "./placeholderGen.js";
const generateSql = (table, feilds) => {
  let placeholder = generatePlaceholder(feilds);
  let sql = `DELETE FROM ${table}  WHERE (${feilds})=(${placeholder})`;
  return sql;
};
export default generateSql;
