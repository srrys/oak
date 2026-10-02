function run() {
  console.log("running");
  const userCode = document.getElementById("input").value;
  document.getElementById("output").innerHTML = userCode + "  //This is a test function. ";
  console.log("fart McFartfart")
  if (userCode.split("\n")[0].includes("--help--")) {
    document.getElementById("output").innerHTML = "//HELP:  doc =           \n prints one line of code on the console \n endDoc"
  }
  else if (userCode.split("\n")[0].includes("doc =") || userCode.split("\n").includes("doc=")) {
    //placeholder
  }
}
