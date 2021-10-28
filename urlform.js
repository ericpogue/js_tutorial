let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];
let urlIntro = "https://example.com/";

// Return an array of URLS in the form of:
// https://example.com/<urlified form>
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

function urlForm(states) {
  return states.map((state) => urlify(state));
}

function comboUrl(states) {
  return states.map((state) => urlIntro + urlify(state));
}

console.log(comboUrl(states));
