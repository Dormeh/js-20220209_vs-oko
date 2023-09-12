/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
const omit = (obj, fields) => {
  return Object.fromEntries(Object.entries(obj).filter(([key, value]) => !fields.includes(key)));
};
console.log(omit({ name: 'Benjy', age: 18 }, [ 'name' ]));
