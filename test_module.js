console.log('test_module.js is running');

var age = 21;
const addNumbers = (a, b) => {
  console.log(a + b);
};

module.exports = {
  age, 
  addNumbers
};