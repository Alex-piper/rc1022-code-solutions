/* exported calculator */

var calculator = {
  add: function (x, y) {
    var sum = x + y;
    return sum;
  },
  subtract: function (x, y) {
    var difference = x - y;
    return difference;
  },
  multiply: function (x, y) {
    var product = x * y;
    return product;
  },
  divide: function (x, y) {
    var quotient = x / y;
    return quotient;
  },
  square: function (x) {
    var squared = x * x;
    return squared;
  },
  sumAll: function (numbers) {
    var sums = 0;
    for (var i = 0; i < numbers.length; i++) {
      sums += numbers[i];
    }
    return sums;
  },
  getAverage: function (numbers) {
    var average = 0;
    var average2 = 0;
    for (var i = 0; i < numbers.length; i++) {
      average += numbers[i];
    }
    average2 = average / numbers.length;
    return average2;

  }
};
