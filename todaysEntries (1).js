/*
 * The function should return the names of those entries whose date is the current date. The names should be separated by a comma.
 *
 * For example, here's an array of three entries and assume the date now is 2022-04-01.
 *
 * [{ name: "Harry" , date: "2022-04-01T02:53:42+05:30" }, { name: "Hermione" , date: "2022-04-02T02:53:42+05:30" }, { name: "Ron" , date: "2022-04-01T03:53:42+05:30" }]
 *
 * The function should return: ``` Harry,Ron ```. Please note that the names are separated by a comma without space.
 */

function todaysEntries(entries) {
  const currentDate = new Date(); // Get the current date

const parsedDate = new Date(currentDate);
const year = parsedDate.getFullYear();
  const month = String(parsedDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const day = String(parsedDate.getDate()).padStart(2, '0');

  const formattedDate1 = `${year}-${month}-${day}`;

  
  let result = "";

  for (let entry of entries) {
      let entryDate = new Date(entry.date);

  let parsedDate = new Date(entryDate);
  let year = parsedDate.getFullYear();
  let month = String(parsedDate.getMonth() + 1).padStart(2, '0');
  let day = String(parsedDate.getDate()).padStart(2, '0');

  let formattedDate2 = `${year}-${month}-${day}`;
      
      if (formattedDate2 === formattedDate1) {
          result += entry.name + ",";
      }
  }

  // Remove the trailing comma and return the result
  return result.slice(0, -1);
// return result;
}

module.exports = todaysEntries;