const userExtend = (table, userType) => {
  const extendTable = `${table} 
  INNER JOIN usermodules On (users.UserID = usermodules.UserID) WHERE users.UserTypeID = ${userType} AND usermodules.ModuleID IN (SELECT usermodules.ModuleID FROM usermodules`;
  return extendTable;
};
export default userExtend;
