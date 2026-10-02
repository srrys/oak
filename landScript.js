function coolio() {
  console.log("test");
  setTimeout(() => {
    document.getElementById("text").innerHTML = "o a "
  }, 1000)
  setTimeout(() => {
    document.getElementById("text").innerHTML = "o a k "
  },3500)
  console.log("fin");
}
