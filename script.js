const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

noBtn.addEventListener("click", () => {
  noBtn.textContent = "🤔 Think again";
  yesBtn.style.transform = "scale(1.5)";
});

yesBtn.addEventListener("click", () => {
  window.location = "yes_page.html";
});
