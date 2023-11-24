const idMod = (sql, req, idField) => {
  const id = req.params.id;
  if (id) {
    sql += ` WHERE  ${idField} = ${id})`;
  } else {
    sql += `)`;
  }
  return sql;
};
export default idMod;
