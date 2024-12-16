//your JS code here. If required.
let inputs = document.querySelectorAll(".code");

inputs.forEach((input, i) => {
  input.addEventListener("input", (e) => {
    let val = e.target.value;
    if (val.length > 0 && i < inputs.length - 1) {
      inputs[i + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && !e.target.value && i > 0) {
      inputs[i - 1].focus();
    }
  });
});

console.log(inputs.length);
