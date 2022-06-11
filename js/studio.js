let COLOR_CURRENT = "#2196F3";
if (window.location.pathname == "/index.html") {
  const currentStudio = document.querySelector(".current-studio");
  currentStudio.style.color = COLOR_CURRENT;
}
if (window.location.pathname == "/portpholio.html") {
  const currentPortpholio = document.querySelector(".current-portpholio");
  currentPortpholio.style.color = COLOR_CURRENT;
}
