const error = document.getElementById("errors");
error.style.display = "none";
function run() {
  console.log("running");
  const userCode = document.getElementById("input").value;
  console.log("fart McFartfart")
  if (userCode.split("\n")[0].includes("--help--")) {
    document.getElementById("output").innerHTML = "//HELP:  doc =           \n prints one line of code on the console \n endDoc"
  }
  else if (userCode.split("\n")[0].includes("doc  =") || userCode.split("\n").includes("doc=")) {
    error.style.display = "block";
    error.innerHTML = 'Type error at line 1. ${userCode.split("\n")[0]} doc must have exactly one space from equal.';
  }
}
console.log("aefaef");
