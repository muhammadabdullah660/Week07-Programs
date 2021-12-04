// Maximum Number(2)
function maxNum2() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  if (num1 > num2) {
    document.getElementById(
      "maxNum2R"
    ).innerHTML = `${num1} is greater than ${num2}`;
  } else if (num2 > num1) {
    document.getElementById(
      "maxNum2R"
    ).innerHTML = `${num2} is greater than ${num1}`;
  } else {
    document.getElementById(
      "maxNum2R"
    ).innerHTML = `${num1} is equal to ${num2}`;
  }
}
// Maximum Number(3)
function maxNum3() {
  var num1M = document.getElementById("num1M").value;
  var num2M = document.getElementById("num2M").value;
  var num3M = document.getElementById("num3M").value;
  if (num1M === "" || num2M === "" || num3M === "") {
    alert("Enter Values");
  } else if (num1M > num2M && num1M > num3M) {
    document.getElementById(
      "maxNum3R"
    ).innerHTML = `Value one (${num1M}) is greater than Value two (${num2M}) and Value three (${num3M})`;
  } else if (num2M > num1M && num2M > num3M) {
    document.getElementById(
      "maxNum3R"
    ).innerHTML = `Value two (${num2M}) is greater than Value one (${num1M}) and Value three (${num3M})`;
  } else if (num3M > num1M && num3M > num2M) {
    document.getElementById(
      "maxNum3R"
    ).innerHTML = `Value three (${num3M}) is greater than Value one (${num1M}) and Value two (${num2M})`;
  } else if (num1M === num2M && num2M === num3M && num1M === num3M) {
    document.getElementById("maxNum3R").innerHTML = `Values are equal`;
  }
}
// Divisible by 5 or 11?
function divisibleNum() {
  var numD = document.getElementById("numD").value;
  if (numD === "") {
    alert("Enter Numeric Value");
  } else if (numD % 5 === 0 && numD % 11 === 0) {
    document.getElementById(
      "numDR"
    ).innerHTML = `${numD} is divisible by both 5 and 11`;
  } else {
    if (numD % 5 === 0) {
      document.getElementById(
        "numDR"
      ).innerHTML = `${numD} is divisible by 5 only`;
    } else if (numD % 11 === 0) {
      document.getElementById(
        "numDR"
      ).innerHTML = `${numD} is divisible by 11 only`;
    } else {
      document.getElementById(
        "numDR"
      ).innerHTML = `${numD} is neither divisible by 5 nor 11`;
    }
  }
}
// Vowel Or Consonant?
function vowelConsonant() {
  var vowelC = document.getElementById("vowelC").value;
  var vowelCA = "aeiouAEIOU";
  var find = vowelCA.match(new RegExp(`${vowelC}`, "g"));
  if (vowelC === "") {
    alert("Enter a single Alphabet");
  } else if (find) {
    console.log("Vowel", vowelC);
    document.getElementById("vowelCR").innerHTML = `${vowelC} is a Vowel`;
  } else {
    console.log("Consonant", vowelC);
    document.getElementById("vowelCR").innerHTML = `${vowelC} is a Consonant`;
  }
}
// Leap Year Or Not
function leapYear() {
  var yearInput = document.getElementById("leapYear").value;
  if (yearInput === "") {
    alert("Enter Valid Year");
  } else if (
    (yearInput % 4 == 0 && yearInput % 100 != 0) ||
    yearInput % 400 == 0
  ) {
    document.getElementById("leap").innerHTML = `${yearInput} is a Leap Year`;
  } else {
    document.getElementById(
      "leap"
    ).innerHTML = `${yearInput} is not a Leap Year`;
  }
}
// Number is negative, positive or zero?
function numSign() {
  var numSignVal = document.getElementById("numSign").value;
  if (numSignVal === "") {
    alert("Enter a value");
  } else if (numSignVal == 0) {
    document.getElementById("numSignR").innerHTML = `Number is ${numSignVal}`;
  } else if (numSignVal > 0) {
    document.getElementById("numSignR").innerHTML = `${numSignVal} is positive`;
  } else if (numSignVal < 0) {
    document.getElementById("numSignR").innerHTML = `${numSignVal} is negative`;
  }
  console.log(numSignVal);
}
// Character is alphabet or not?
function characterAlpha() {
  var alphaC = document.getElementById("alphaC").value;
  var findCA = alphaC.match(new RegExp(/^[A-Za-z]+$/));
  if (alphaC === "") {
    alert("Enter a Character");
  } else if (findCA) {
    document.getElementById("alphaCR").innerHTML = `${alphaC} is a character`;
    console.log("Character", alphaC);
  } else {
    document.getElementById(
      "alphaCR"
    ).innerHTML = `${alphaC} is not a character`;
    console.log("Not a character", alphaC);
  }
}
// Number is even or odd
function evenOrOdd() {
  var userOENum = document.getElementById("userOENum").value;
  if (userOENum % 2 === 0) {
    document.getElementById(
      "userOENumR"
    ).innerHTML = `${userOENum} is an even number`;
    console.log(`${userOENum} is an even number`);
  } else if (userOENum % 2 !== 0) {
    document.getElementById(
      "userOENumR"
    ).innerHTML = `${userOENum} is a odd number`;
    console.log(`${userOENum} is an even number`);
  } else {
    alert("Enter a number");
  }
}
// Alphabet, digit or special character
function aDSChar() {
  var aDS = document.getElementById("aDS").value;
  var char = aDS.match(new RegExp(/^[A-Za-z]+$/));
  var digit = aDS.match(new RegExp(/^[0-9]+$/));
  if (aDS == "") {
    alert("Enter a character");
  } else if (char) {
    document.getElementById("aDSR").innerHTML = `${aDS} is a alphabet`;
    console.log(`${aDS} is an alphabet`);
  } else if (digit) {
    document.getElementById("aDSR").innerHTML = `${aDS} is a digit`;
    console.log(`${aDS} is a digit`);
  } else {
    document.getElementById("aDSR").innerHTML = `${aDS} is a special character`;
    console.log(`${aDS} is a special character`);
  }
}
// Bill Calculation
function billCalc() {
  var bill;
  var units = document.getElementById("units").value;
  console.log("No. of units = ", units);
  if (units < 0 || units == "") {
    alert("No. of units should be Zero or Greater");
  } else if (units > 0 && units <= 50) {
    bill = units * 0.5;
  } else if (units > 50 && units <= 150) {
    bill = units * 0.75;
  } else if (units > 150 && units <= 250) {
    bill = units * 1.2;
  } else {
    bill = units * 1.5;
  }
  var surcharge = (bill * 20) / 100;
  var netBill = bill + surcharge;
  console.log("Net Bill is = ", netBill);
  var resultBill = document.createElement("p");
  var nodeBill = document.createTextNode(`The Net Bill is ${netBill}`);
  resultBill.appendChild(nodeBill);
  var elementBill = document.getElementById("billDiv");
  elementBill.appendChild(resultBill);
}
// Salary Calculation
function salaryCalc() {
  var salaryInput = parseInt(document.getElementById("salary").value);
  if (salaryInput <= 10000) {
    var hra = (salaryInput * 20) / 100;
    var da = (salaryInput * 80) / 100;
    var grossSalary = parseInt(salaryInput + hra + da);
  } else if (salaryInput <= 20000) {
    var hra = (salaryInput * 25) / 100;
    var da = (salaryInput * 90) / 100;
    var grossSalary = parseInt(salaryInput + hra + da);
  } else if (salaryInput > 20000) {
    var hra = (salaryInput * 30) / 100;
    var da = (salaryInput * 95) / 100;
    var grossSalary = parseInt(salaryInput + hra + da);
  } else {
    alert("Enter Salary(Numeric Value)");
  }
  console.log("Gross Salary is = ", grossSalary);
  var netSalary = document.createElement("p");
  var nodeSalary = document.createTextNode(`Gross Salary is ${grossSalary}`);
  netSalary.appendChild(nodeSalary);
  var elementSalary = document.getElementById("salaryDiv");
  elementSalary.appendChild(netSalary);
}
// Uppercase or lowercase alphabet
function upperOrLower() {
  var uLC = document.getElementById("uLC").value;
  if (uLC === "") {
    alert("Enter a single character");
  } else if (uLC.match(new RegExp(/^[A-Z]+$/))) {
    document.getElementById("uLCR").innerHTML = `${uLC} is Uppercase`;
  } else if (uLC.match(new RegExp(/^[a-z]+$/))) {
    document.getElementById("uLCR").innerHTML = `${uLC} is Lowercase`;
  } else {
    document.getElementById("uLCR").innerHTML = `${uLC} is not a character`;
  }
}

// Week Day
function weekDay() {
  var dayNum = document.getElementById("dayNum").value;
  var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  var index = 0;
  if (dayNum.match(new RegExp(/^[1-7]+$/))) {
    if (dayNum == 1) {
      index;
    } else {
      index = dayNum - 1;
    }
    var day = days[index];
    console.log(day);
    document.getElementById("dayNumR").innerHTML = `${day} is the day of week`;
  } else {
    alert("Invalid day number");
  }
}

// Number of days in a month
function monthDays() {
  var monthNum = document.getElementById("monthNum").value;
  var months = [
    "January(31 Days)",
    "February(28/29 Days)",
    "March(31 Days)",
    "April(30 Days)",
    "May(31 Days)",
    "June(30 Days)",
    "July(31 Days)",
    "August(31 Days)",
    "September(30 Days)",
    "October(31 Days)",
    "November(30 Days)",
    "December(31 Days)",
  ];
  var index = 0;
  if (monthNum.match(new RegExp(/^[1-12]+$/))) {
    if (monthNum == 1) {
      index;
    } else {
      index = monthNum - 1;
    }
    var month = months[index];
    console.log(month);
    document.getElementById("monthNumR").innerHTML = `${month}`;
  } else {
    alert("Invalid day number");
  }
}
