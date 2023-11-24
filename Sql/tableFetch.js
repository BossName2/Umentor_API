const generateSql = (table, extendTable) => {
  let sql = `SELECT ${table}.* FROM ${extendTable}`;
  return sql;
};
export default generateSql;
