// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case
// Check out the power of the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp
// Transparent, Translucent, Opaque: https://www.mathsisfun.com/physics/images/transparent.svg
// rename this function so it's name is describes what it does!
// then add your own code here!
var click = 0;
var click2 = 0;
var click3 = 0;
var click4 = 0;
var click5 = 1960;
var click6 = 2025;

// sound variuble
//change variuble
function rogerStats() {
  click++;
  document.getElementById("snap").play();
  console.log(click);
  if (click == 1) {
    document.getElementById("roger").src = "images/players/roger12.jpeg";
  }
  if (click == 2) {
    document.getElementById("roger").src = "images/players/staubach12.jpg";
  }
  if (click == 3) {
    document.getElementById("roger").src = "images/stats/RS12stats.png";
  }
}
function troyStats() {
  click2++;
  document.getElementById("snap").play();
  console.log(click2);
  if (click2 == 1) {
    document.getElementById("troy").src = "images/players/aikman8.jpg";
  }
  if (click2 == 2) {
    document.getElementById("troy").src = "images/players/troyA.jpg";
  }
  if (click2 == 3) {
    document.getElementById("troy").src = "images/stats/TAstats.png";
  }
}
function tonyStats() {
  click3++;
  document.getElementById("snap").play();
  console.log(click3);
  if (click3 == 1) {
    document.getElementById("tony").src = "images/players/tonyR.jpg";
  }
  if (click3 == 2) {
    document.getElementById("tony").src = "images/players/tony.jpg";
  }
  if (click3 == 3) {
    document.getElementById("tony").src = "images/stats/TRstats.png";
  }
}
function dakStats() {
  click4++;
  document.getElementById("snap").play();
  console.log(click4);
  if (click4 == 1) {
    document.getElementById("dak").src = "images/players/dakP.jpg";
  }
  if (click4 == 2) {
    document.getElementById("dak").src = "images/players/dakartic.jpg";
  }
  if (click4 == 3) {
    document.getElementById("dak").src = "images/stats/DPstats.png";
  }
}
//reset here
function resetAll() {
  document.getElementById("how").play();
  click = 0;
  click2 = 0;
  click3 = 0;
  click4 = 0;
  // reset click counter and start at original picture
  document.getElementById("roger").src = "images/players/jump.jpg";
  document.getElementById("troy").src = "images/players/celebrate.jpg";
  document.getElementById("tony").src = "images/players/walk.jpg";
  document.getElementById("dak").src = "images/players/pray.jpg";
  //play noise
}
function jerseyChange() {
  click5++;
  document.getElementById("future").play();
  console.log(click5);
  if (click5 == 1971) {
    document.getElementById("jersey1").src = "images/champs/ring1.png";
  }
  if (click5 == 1972) {
    document.getElementById("jersey1").src = "images/jerseys/staubach.png";
  }
  if (click5 == 1977) {
    document.getElementById("jersey1").src = "images/champs/ring2.png";
  }
  if (click5 == 1978) {
    document.getElementById("jersey1").src = "images/jerseys/staubach.png";
  }
  if (click5 == 1989) {
    document.getElementById("jersey1").src = "images/jerseys/aikman.png";
  }
  if (click5 == 1992) {
    document.getElementById("jersey1").src = "images/champs/ring3.png";
  }
  if (click5 == 1993) {
    document.getElementById("jersey1").src = "images/champs/ring4.png";
  }
  if (click5 == 1994) {
    document.getElementById("jersey1").src = "images/jerseys/aikman.png";
  }
  if (click5 == 1995) {
    document.getElementById("jersey1").src = "images/champs/ring5.png";
  }
  if (click5 == 1996) {
    document.getElementById("jersey1").src = "images/jerseys/aikman.png";
  }
  if (click5 == 2003) {
    document.getElementById("jersey1").src = "images/jerseys/romo.png";
  }
  if (click5 == 2016) {
    document.getElementById("jersey1").src = "images/jerseys/dak.png";
  }
}
function jerseyChange2() {
  click6--;
  document.getElementById("past").play();
  console.log(click6);
  if (click6 == 1970) {
    document.getElementById("jersey2").src = "images/jerseys/staubach.png";
  }
  if (click6 == 1971) {
    document.getElementById("jersey2").src = "images/champs/ring1.png";
  }
  if (click6 == 1976) {
    document.getElementById("jersey2").src = "images/jerseys/staubach.png";
  }
  if (click6 == 1977) {
    document.getElementById("jersey2").src = "images/champs/ring2.png";
  }
  if (click6 == 1988) {
    document.getElementById("jersey2").src = "images/jerseys/staubach.png";
  }
  if (click6 == 1989) {
    document.getElementById("jersey2").src = "images/jerseys/aikman.png";
  }
  if (click6 == 1991) {
    document.getElementById("jersey2").src = "images/jerseys/aikman.png";
  }
  if (click6 == 1992) {
    document.getElementById("jersey2").src = "images/champs/ring3.png";
  }
  if (click6 == 1993) {
    document.getElementById("jersey2").src = "images/champs/ring4.png";
  }
  if (click6 == 1994) {
    document.getElementById("jersey2").src = "images/jerseys/aikman.png";
  }
  if (click6 == 1995) {
    document.getElementById("jersey2").src = "images/champs/ring5.png";
  }
  if (click6 == 2002) {
    document.getElementById("jersey2").src = "images/jerseys/aikman.png";
  }
  if (click6 == 2015) {
    document.getElementById("jersey2").src = "images/jerseys/romo.png";
  }
}
function openVideo() {
  window.open("https://www.youtube.com/watch?v=xkwrPAEgZss", "_blank");
}

// These W3Schools links show efficient ways of completing some of the challenges!
// https://www.w3schools.com/jsref/prop_style_height.asp
// https://www.w3schools.com/jsref/prop_html_innerhtml.asp
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_visibility
