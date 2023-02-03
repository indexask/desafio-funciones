function pintar(ele, color = "green") {
  ele.style.backgroundColor = color;
}
ele = document.getElementById("ele1");
ele.addEventListener("click", () => {
  pintar(ele, "yellow");
});

ele2 = document.getElementById("ele2");
ele2.addEventListener("click", () => {
  pintar(ele2, "yellow");
});