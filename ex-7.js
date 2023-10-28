const employee1 = {
  name: "John",
  age: 20,
};

let result1 = employee1.scores?.english;

function checkUndefined1(result1) {
  if (undefined ?? result1) {
    return "defined";
  } else {
    return "undefined";
  };
};

result1 = checkUndefined1(result1);
console.log(result1);

const employee2 = {
  name: "A",
  age: 50,
  scores: {
    math: 40,
  },
};

let result2 = employee2.scores?.english;

function checkUndefined2(result2) {
  if (undefined ?? result2) {
    return "English score is defined";
  } else {
    return "English score is not defined";
  };
};

result2 = checkUndefined2(result2);
console.log(result2);