document.addEventListener("click", function (e) {
  const ripple = document.createElement("div");
  ripple.className = "ripple";

  ripple.style.left = `${e.clientX - 75}px`;
  ripple.style.top = `${e.clientY - 75}px`;

  document.body.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 1200); // Match animation duration
});
