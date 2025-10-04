let display = document.getElementById("display");

document.querySelectorAll(".btns .btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    let value = btn.textContent;
    if (/^\d+$/.test(value)) {
      value = parseInt(value);
    }

    display.value += value;
  });
});

document.querySelector(".euaql").addEventListener("click", (e) => {
  display.value = cal(display.value);
});

function cal(expr) {
  try {
    expr = expr.replace(/\s+/g, "");
    if (!/^[0-9+\-*/^()%.]+$/.test(expr)) return "Error";
    if (/^[+\-*%^/]/.test(expr) || /[+\-*/]$/.test(expr)) return "Error"; // prevent starting or ending with operator
    return Function('"use strict";return (' + expr + ")")();
  } catch {
    return "Error";
  }
}

document.getElementById("ac").addEventListener("click", () => {
  display.value = 0;
});

  const btnC = document.getElementById("clear");
  btnC.addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
  });