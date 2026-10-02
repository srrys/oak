function coolio() {
  console.log("test");
  setTimeout(() => {
    document.getElementById("text").innerHTML = "o a "
  }, 1000)
  setTimeout(() => {
    document.getElementById("text").innerHTML = "o a k "
  },2000)
  console.log("fin");
  window.location.href = "home.html";
}
