export const objectToString = (obj) => {
  let str = ""; 
  let index = 0
  for (let key in obj) {
   str += index === 0 ?obj[key]:`, ${obj[key]}`;
   index++
  }

  return str;
};
