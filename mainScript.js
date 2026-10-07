const error = document.getElementById("errors");
error.style.display = "none";
const user = document.getElementById("username");
function run() {
  console.log("running");
  let lineDos = "createNewWindow <- creates new window for graphics. ";
  let lineTres = "destroyWindow <- removes window";
  const userCode = document.getElementById("input").value;
  const lines = userCode.split("\n");
  const out = document.getElementById("output");
  const window = document.getElementById("window");
  const block = document.getElementById("blockA");
  const signedInDude = document.getElementById("");
  console.log("fart McFartfart")
  if (userCode.split("\n")[0].includes("--help--")) {
    out.innerHTML = "//HELP:  doc =           \n prints one line of code on the console \n endDoc <- closes doc." + lineDos + lineTres;
  }
  else if (userCode.includes("doc  =") || userCode.includes("doc=")) {
    error.style.display = "block";
    error.innerHTML = `Type error. doc must have exactly one space from equal.`;
  }
  else if (lines.includes("doc =")) {
    out.innerHTML = "output-> " + lines[lines.findIndex(item => item.includes("doc =")) +1];
  }
  else if (userCode.split("\n").includes("createNewWindow")) {
    window.style.display = "block";
  }
  else if (userCode.includes("destroyWindow")) {
    window.style.display = "none";
  }
  else if (userCode.split("\n")[0].includes("createNewBlock") || userCode.split("\n")[3].includes("createNewBlock")) {
    block.style.display = "block";
  }
  else {
    out.innerHTML  = "null";
    error.style.display = "block";
    error.innerHTML = "A statement is either not recognised or there is no code."
  }
}
function goAwayError() {
  error.innerHTML = "";
  error.style.display = "none";
}
function tutorial() {
  document.getElementById("input").innerHTML = "doc =\nhello world\nendDoc\ncreateNewWindow";
}
console.log("oak vers 1.1.0");
console.log("test")
