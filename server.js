// callback functions
// 1. A callback function is a function that is passed as an argument to another function, to be “called back” at a later time.
//  function callback(){
//     console.log('callback function called');
//  };

//  const add = (a, b, callback) => {
//     console.log('add function called'); 
//     console.log(a + b); // main function's work completed
//     callback();
//  };

//  add(1, 2, callback);



// os and fs modules

// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('greetings.txt', 'Hi' + user.username + '!', () => {
//   console.log("file created successfully!");
// });




// importing and exporting modules

const test_module = require('./test_module.js');

console.log(test_module.age); // 21

var ans = test_module.addNumbers(1, 2); // 3



// using lodash module
// loadash is a utility library that provides a lot of useful methods for working with arrays, objects, and strings.
const _ = require('loadash');

var data = ["hello", "world", "hello", "world", "hello", "world", 1, 2 , 3, 2 , 3];

var filter = _.uniq(data);
console.log(filter); // [ 'hello', 'world', 1, 2, 3 ]