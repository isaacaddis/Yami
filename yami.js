var collapse, generateColor, getRandomInt, i, j, k, len, len1, listOfRandomColor, mixr, parentDivForMixr, yamiColorArray;

yamiColorArray = ["#1abqc", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60"];


/*
    Given a parent div, iterate through its children, and apply colors from yamiColorArray at interval i.
 */

parentDivForMixr = document.getElementsByClassName();

if (parentDivForMixr.length >= 1) {
  for (j = 0, len = parentDivForMixr.length; j < len; j++) {
    i = parentDivForMixr[j];
    console.log(i);
  }
}


/*
    Mixr function: Iterate through child divs and add a background-color of a
 */

mixr = function(children) {
  var k, len1, results;
  results = [];
  for (k = 0, len1 = children.length; k < len1; k++) {
    i = children[k];
    results.push(console.log(i));
  }
  return results;
};


/*
  For generation of random integers
 */

getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};


/*
  Return a number given a color
 */

generateColor = function(num) {
  if (num === 1) {
    return "#1abc9c";
  } else if (num === 2) {
    return "#2ecc71";
  } else if (num === 3) {
    return "#3498db";
  } else if (num === 4) {
    return "#9b59b6";
  } else if (num === 5) {
    return "#16a085";
  } else if (num === 6) {
    return "#27ae60";
  } else if (num === 7) {
    return "#2980b9";
  } else if (num === 8) {
    return "#8e44ad";
  } else if (num === 9) {
    return "#2c3e50";
  } else {
    return "black";
  }
};


/*
  Assign a random color to all classes of "random-color-text"
 */

listOfRandomColor = document.getElementsByClassName("random-color-text");

for (k = 0, len1 = listOfRandomColor.length; k < len1; k++) {
  i = listOfRandomColor[k];
  listOfRandomColor[i].style.color = generateColor(getRandomInt(1, 10));
}
/*
  Switch between collapse mode. Thanks to W3Schools for concept.
*/
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}