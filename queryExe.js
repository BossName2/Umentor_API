import database from "./database.js";

const queryExe = async (req, res, sql) => {
  let isSuccess = false;
  let message = "";
  let result = null;
  try {
    [result] = await database.query(sql, req.body);
    if (result.lenght === 0) message = "No records found";
    else {
      isSuccess = true;
      message = "records successfully recovered";
    }
  } catch (error) {
    message = `Failed to execute query: ${error.message}`;
  }
  // Responses
  return isSuccess
    ? res.status(200).json(result)
    : res.status(400).json({ message: message });
};
export default queryExe;
