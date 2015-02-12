var numbersInWords = function(numberEntered) {
  var numberEntered = parseInt(numberEntered);
  var ordinals = {0: "zero", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten",
  11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen"};
  var tens = {2: "twenty", 3: "thirty", 4: "forty", 5: "fifty", 6: "sixty", 7: "seventy", 8: "eighty", 9: "ninety"};
  var biggies = {100: "hundred", 1000: "thousand", 1000000: "million", 1000000000: "billion"};
  var result = [];

  // if (numberEntered < 1000000000 && numberEntered >= 2000000) {
  //   var sevenDigit = Math.floor(numberEntered / 1000000);
  //   result.push(tens[sevenDigit]);
  //   var sixDigit = Math.floor((numberEntered % 1000000)/1000000);
  //   var remainder = numberEntered % 1000000;
  //   if (sixDigit !== 0) {
  //     result.push(ordinals[sixDigit]);
  //   }
  //   result.push("million");
  //   numberEntered = remainder;
  // }
  //
  // if (numberEntered < 2000000 && numberEntered > 999999) {
  //   var sixDigit = Math.floor(numberEntered / 1000000);
  //   var remainder = numberEntered % 1000000;
  //   if (sixDigit !== 0) {
  //     result.push(ordinals[sixDigit]);
  //   }
  //   result.push("million");
  //   numberEntered = remainder;
  // }
  //
  // if (numberEntered < 1000000 && numberEntered >= 20000) {
  //   var fiveDigit = Math.floor(numberEntered / 10000);
  //   result.push(tens[fiveDigit]);
  //   var fourDigit = Math.floor((numberEntered % 10000)/1000);
  //   var remainder = numberEntered % 1000;
  //   if (fourDigit !== 0) {
  //     result.push(ordinals[fourDigit]);
  //   }
  //   result.push("thousand");
  //   numberEntered = remainder;
  // }
  //
  // if (numberEntered < 20000 && numberEntered > 999) {
  //   var fourDigit = Math.floor(numberEntered / 1000);
  //   var remainder = numberEntered % 1000;
  //   if (fourDigit !== 0) {
  //     result.push(ordinals[fourDigit]);
  //   }
  //   result.push("thousand");
  //   numberEntered = remainder;
  // }
  //
  // if (numberEntered < 1000 && numberEntered > 99) {
  //   var threeDigit = Math.floor(numberEntered / 100);
  //   result.push(ordinals[threeDigit])
  //   var remainder = numberEntered % 100;
  //   result.push("hundred");
  //   numberEntered = remainder;
  // }
  //
  // if (numberEntered < 100 && numberEntered > 19) {
  //   var twoDigit = Math.floor(numberEntered / 10);
  //   var remainder = numberEntered % 10;
  //   result.push(tens[twoDigit]);
  //   numberEntered = remainder;
  // }

  if (numberEntered < 20 && numberEntered) {
    result.push(ordinals[numberEntered]);
  } else {
    var numberSplit = numberEntered.toString().split("");
    result.unshift(ordinals[parseInt(numberSplit.pop())]);
    result.unshift(tens[(parseInt(numberSplit.pop()))]);
      if (numberSplit !== 'undefined' && numberSplit.length > 0) {
        result.unshift("hundred").unshift(ordinals[parseInt(numberSplit.pop())]);
        var hundredChkr = parseInt(numberSplit.pop());
          if (hundredChkr > 0 ) {
            result.unshift("hundred").unshift(ordinals[hundredChkr]);
          }
      }
  }

  return result.join(" ");
};
