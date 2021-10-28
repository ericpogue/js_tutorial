let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

//Returns a URL-friendly version of a string.
//  Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

//urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function (element) {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

//urls: Functional version
function functionalUrls(elements) {
  return elements.map((element) => urlify(element));
}
console.log(functionalUrls(states));

//singles: Imperative version

function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function (element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));

//singles: Functional version

function functionalSingles(elements) {
  return elements.filter((element) => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

//Dakotas: string#includes version
function dakotaIncludes(elements) {
  // let dakotas = [];
  // elements.forEach(function (element) {
  //   if (element.includes("Dakota")) {
  //     dakotas.push(element);
  //   }
  // });
  // return dakotas;
  return elements.filter((state) => state.includes("Dakota"));
}
console.log(dakotaIncludes(states));

//Dakotas: regEx version
function dakotaRegex(elements) {
  return elements.filter((element) => element.split(/\s+/).length === 2);
}
console.log(dakotaRegex(states));

//sums: imperative version
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function (n) {
    total += n;
  });
  return total;
}
console.log(imperativeSum(numbers));

//sums: functional version
function functionalSum(elements) {
  return elements.reduce((total, n) => {
    return (total += n);
  });
}
console.log(functionalSum(numbers));

//lengths: imperative version
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function (element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

//lenghts: functional version
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {
    lengths[element] = element.length;
    return lengths;
  }, {});
}
console.log(functionalLengths(states));
