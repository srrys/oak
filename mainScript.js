const error = document.getElementById("errors");
error.style.display = "none";
function run() {
  console.log("running");
  const userCode = document.getElementById("input").value;
  const out = document.getElementById("output");
  console.log("fart McFartfart")
  if (userCode.split("\n")[0].includes("--help--")) {
    out.innerHTML = "//HELP:  doc =           \n prints one line of code on the console \n endDoc <- closes doc."
  }
  else if (userCode.split("\n")[0].includes("doc  =") || userCode.split("\n").includes("doc=")) {
    error.style.display = "block";
    error.innerHTML = `Type error at line 1. ${userCode.split("\n")[0]} doc must have exactly one space from equal.`;
  }
  else if (userCode.split("\n")[1] && userCode.split("\n")[1].includes("doc =") && userCode.split("\n")[2].includes("endDoc")) {
    out.innerHTML = userCode.split("\n")[1];
  }
}
console.log("aefaef");
function goAwayError() {
  error.innerHTML = "";
  error.style.display = "none";
}
