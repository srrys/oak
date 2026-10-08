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
  const windowE = document.getElementById("window");
  const blockE = document.getElementById("blockA");
  const signedInDude = document.getElementById("");
  const buttonW = document.getElementById("buttonA");
  const windowUI = document.getElementById("UIwindow");
  console.log("fart McFartfart");
  if (userCode.split("\n")[0].includes("--help--")) {
    out.innerHTML = "//HELP:  doc =           \n prints one line of code on the console \n endDoc <- closes doc." + lineDos + lineTres;
  }
  if (userCode.includes("doc  =") || userCode.includes("doc=")) {
    error.style.display = "block";
    error.innerHTML = `Type error. doc must have exactly one space from equal.`;
  }
  if (userCode.includes("createNewGameWindow")) {
    windowE.style.display = "block";
  }
  if (useCode.includes("createNewUiWindow")) {
    windowUI.style.display = "block";
    windowE.style.backgroundImage = "none";
  }
  if (userCode.includes("createNewButton") && userCode.includes("createNewUiWindow")) {
    buttonW.style.display = "block";
  }
  if (userCode.includes("destroyWindow")) {
    windowE.style.display = "none";
  }
  if (userCode.includes("createNewBlock")) {
    blockE.style.display = "block";
  }
  if (userCode.includes("newButton =")) {
    buttonW.style.display = "block";
    buttonTitle = lines[lines.findIndex(item => item.includes("newButton =")) + 1];
    if (buttonTitle) {
      button.innerHTML = buttonTitle;
    }
  }
  if (lines.includes("doc =")) {
    out.innerHTML = "output-> " + lines[lines.findIndex(item => item.includes("doc =")) +1];
  }
  if (!lines) {
    out.innerHTML  = "output-> //null";
    error.style.display = "block";
    error.innerHTML = "A statement is either not recognised or there is no code.";
  }
}
function goAwayError() {
  error.innerHTML = "";
  error.style.display = "none";
}
function tutorial() {
  document.getElementById("input").value = "doc =\nhello world\nendDoc\ncreateNewWindow";
}
console.log("oak vers 1.1.0");
console.log("test")
