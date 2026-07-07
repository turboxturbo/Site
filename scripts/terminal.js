document.addEventListener("DOMContentLoaded", () => {
  const terminal = document.getElementById("terminal");
  const intro = document.getElementById("intro");
  const site = document.getElementById("site");
  const output = document.getElementById("ascii-output");
  const url = 'assets/images/test.png'
  const text = "It's not reality.\nWake up, User...";
  let i = 0;

  function type() {
    if (i < text.length) {
      terminal.textContent += text[i];
      i++;
      setTimeout(type, 120);
    } else {
      document.body.classList.add("loaded");

      setTimeout(() => {
        intro.classList.add("hide");
        site.classList.remove("hidden");
        image_to_ascii(url).then(result =>{
          output.textContent = result;
        });

      }, 800);
    }
  }

  type();
});