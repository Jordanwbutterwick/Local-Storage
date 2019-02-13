var submit = document.getElementById("submit");
var lastcolor = localStorage.getItem("User Color");
console.log(lastcolor);
document.body.style.background = lastcolor;

submit.addEventListener("click", function changeBackground(event) {
  event.preventDefault();
  var color = document.getElementById("color").value;
  document.body.style.background = color;
  console.log(color);
  localStorage.setItem("User Color", color);
});
