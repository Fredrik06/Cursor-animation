const curso = document.querySelector(".cursor");
var timeout;

//cursor movement
document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  curso.style.top = y + "px";
  curso.style.left = x + "px";
  curso.style.display = "block";

  //hide animation
  clearTimeout(timeout);
  timeout = setTimeout(mouseStopped, 1000);
});

//hide animation when cursor off the screen

document.addEventListener("mouseout", () => {
  curso.style.display = "none";
});

const main = document.querySelector(".main");
main.innerHTML = main.textContent
  .split("")
  .map(
    (letter, i) =>
      `<span style="animation: letterBounce 3s ease ${
        i * 0.05
      }s infinite;">${letter}</span>`
  )
  .join("");
