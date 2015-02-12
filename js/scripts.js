var numbersInWords = function(numberEntered) {
  var numberEntered = parseInt(numberEntered);
  var ordinals = {0: "zero", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten",
  11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen"};
  var tens = {2: "twenty", 3: "thirty", 4: "forty", 5: "fifty", 6: "sixty", 7: "seventy", 8: "eighty", 9: "ninety"};
  var biggies = {0: "hundred", 1: "thousand", 2: "million", 3: "billion"};
  var result = [];

  if (numberEntered < 20 && numberEntered) {
    result.push(ordinals[numberEntered]);
  } else {
    var numberSplit = numberEntered.toString().split("");
    result.unshift(ordinals[parseInt(numberSplit.pop())]);
    result.unshift(tens[(parseInt(numberSplit.pop()))]);
      if (numberSplit.length > 0) {
        result.unshift("hundred")
        result.unshift(ordinals[parseInt(numberSplit.pop())]);

        var hundredChkr = parseInt(result.pop());
          if (hundredChkr > 0 ) {
            result.unshift("hundred").unshift(ordinals[hundredChkr]);
          } else {
            result = result.slice(0, result.length - 1);
          }
      }
      var biggieCounter = 0;
      // do {
      //   result.unshift(biggies[biggieCounter]);
      //   threeAtATime = parseInt(numberSplit.pop(3).join());
      //     if (threeAtATime > 0) {
      //       result.unshift(biggies[biggieCounter]);
      //     }
      //     if (threeAtATime < 20) {
      //       result.unshift(ordinals[threeAtATime]);
      //     } else {
      //       taatS = threeAtATime.toString().split("");
      //       result.unshift(ordinals[parseInt(taatS.pop())]);
      //       result.unshift(tens[parseInt(taatS.pop())]);
      //         if (numberSplit !== 'undefined' && numberSplit.length > 0) {
      //           result.unshift("hundred").unshift(ordinals[parseInt(taatS.pop())]);
      //         }
      //     }
      //     biggieCounter = biggieCounter + 1;
      // } while (numberSplit !== 'undefined' && numberSplit.length > 0)};

  }

  return result.join(" ");
};
