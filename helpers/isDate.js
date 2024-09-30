const { isValid, getTime } = require('date-fns');
     
const isDate = (dateValue) => {

  if (!dateValue && dateValue !== 0) return false;
  
  const dateInMiliseconds = getTime(dateValue)
  const date = isValid(dateInMiliseconds); // retorna true o false
  
  return date;

};


module.exports = {
    isDate
}