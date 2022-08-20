const checkbox = document.getElementById("checkbox");
const themeTitle = document.getElementById("theme-title");
let toggle = false;

checkbox.addEventListener("change", () => {
  // change the theme of the website

  document.body.classList.toggle("dark");

  toggle = !toggle;
  if (toggle) themeTitle.innerText = "어두운 테마";
  else themeTitle.innerText = "밝은 테마";
});
