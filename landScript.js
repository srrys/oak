function coolio() {
  console.log("test");
  setTimeout(() => {
    document.getElementById("text").innerHTML = "o a "
  }, 1000);
  setTimeout(() => {
    document.getElementById("text").innerHTML = "o a k "
  },2000);
  console.log("fin");
  setTimeout(() => {
    window.location.href = "home.html";
  }, 3150);
}
function run() {
  console.log("running");
  const userCode = document.getElementById("code").value;
  document.getElementById("output")
}
