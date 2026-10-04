const error = document.getElementById("errors");
error.style.display = "none";
function run() {
  console.log("running");
  let lineDos = "createNewWindow <- creates new window for graphics and movement."
  const userCode = document.getElementById("input").value;
  const out = document.getElementById("output");
  const window = document.getElementById("window");
  const block = document.getElementById("blockA")
  console.log("fart McFartfart")
  if (userCode.split("\n")[0].includes("--help--")) {
    out.innerHTML = "//HELP:  doc =           \n prints one line of code on the console \n endDoc <- closes doc." + lineDos;
  }
  else if (userCode.split("\n")[0].includes("doc  =") || userCode.split("\n").includes("doc=")) {
    error.style.display = "block";
    error.innerHTML = `Type error at line 1. ${userCode.split("\n")[0]} doc must have exactly one space from equal.`;
  }
  else if (userCode.split("\n")[1] && userCode.split("\n")[0].includes("doc =") && userCode.split("\n")[2].includes("endDoc")) {
    out.innerHTML = "output-> " + userCode.split("\n")[1];
  }
  else if (userCode.split("\n")[0].includes("createNewWindow") || userCode.split("\n")[3].includes("createNewWindow")) {
    window.style.display = "block";
  }
  else if (userCode.split("\n")[0].includes("createNewBlock") || userCode.split("\n")[3].includes("createNewBlock")) {
    block.style.display = "block";
  }
}
function goAwayError() {
  error.innerHTML = "";
  error.style.display = "none";
}
function tutorial() {
  document.getElementById("input").innerHTML = "doc =\nhello world\nendDoc\ncreateNewWindow";
}
console.log("oak vers 1.1.0")
console.log("open source code at github")
