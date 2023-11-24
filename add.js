import queryExe from "./queryExe.js";
//Controllers
const addController = (req, res, table, feilds) => {
  let placeholder = getPlaceholder(feilds);
  let data = req.body;
  let sql = `INSERT INTO ${table} (${feilds}) VALUES (${placeholder})`;
  //let sql = `Call UserInsert('${table}','${feilds}','${placeholder}')`;

  // Execute query
  queryExe(req, res, sql);
};

const getPlaceholder = (feilds) => {
  let tempFeilds = [...feilds];
  tempFeilds.forEach((element, index) => {
    tempFeilds[index] = ":" + element;
  });
  return tempFeilds;
};

export default addController;
