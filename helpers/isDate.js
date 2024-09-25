const { isValid } = require('date-fns');
     
const isDate = (dateValue) => {

  if (!dateValue && dateValue !== 0) return false;
 
  const date = isValid(dateValue); // retorna true o false
  return date;
};


module.exports = {
    isDate
}