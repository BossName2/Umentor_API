import generatePlaceholder from "./placeholderGen.js";
const generateSql = (table, feilds) => {
  let placeholder = generatePlaceholder(feilds);
  let sql = `INSERT INTO ${table} (${feilds}) VALUES (${placeholder})`;
  return sql;
};
export default generateSql;
