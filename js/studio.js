let COLOR_CURRENT = "#2196F3";
let urlToСompare = window.location.pathname.toString();
if (urlToСompare.includes("index.html")) {
  const currentStudio = document.querySelector(".current-studio");
  currentStudio.style.color = COLOR_CURRENT;
}
if (urlToСompare.includes("portpholio.html")) {
  const currentPortpholio = document.querySelector(".current-portpholio");
  currentPortpholio.style.color = COLOR_CURRENT;
}

