// use EACH the iteration methods discussed in class today (for loop, Array.forEach, custom forEach) for EACH of the following problems
// 1. calculate the sum of numbers (can be any number of arguments)
// 2. calculate the average of numbers
// 3. find the largest number of the inputs
// 4. find the longest string of the inputs
// 5. given an array of Date() objects (Oct 4th 2014, Oct 3rd 2014, Sept 30th 2014, Sept 1st 2012, March 13th 2010), in that order, sort them chronologically. Use http://devdocs.io/javascript/global_objects/date for reference on creating Date() objects with a specific date.

var sum = 0,
    x = [1, 2, 3];


for (i = 0; i < 5; i++) {
    "use strict";
    sum = sum + i;
    console.log(sum);
};

x.forEach(function(x) {
    "use strict";
    sum += x;
    console.log(sum);
});

var sum = 0,
    x = [1, 2, 3];
function forEach(x, callback) {
    "use strict";
    for (var i = 0; i = x.length; i++) {
        callback(x[i], i);
    }
    console.log(sum);
};
