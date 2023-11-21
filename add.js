import database from "./database.js";
//Controllers
const addController = async (req, res, table, feilds) => {
  let placeholder = getPlaceholder(feilds);
  let sql = `INSERT INTO ${table} (${feilds}) VALUES (${placeholder})`;
  console.log(sql);
  // Execute query
  let isSuccess = false;
  let message = "";
  let result = null;
  try {
    [result] = await database.query(sql, req.body);
    if (result.lenght === 0) message = "No records found";
    else {
      isSuccess = true;
      message = "record successfully added";
    }
  } catch (error) {
    message = `Failed to execute query: ${error.message}`;
  }
  // Responses
  isSuccess
    ? res.status(200).json(result)
    : res.status(400).json({ message: message });
};

const getPlaceholder = (feilds) => {
  let tempFeilds = [...feilds];
  tempFeilds.forEach((element, index) => {
    tempFeilds[index] = ":" + element;
  });
  return tempFeilds;
};

export default addController;
