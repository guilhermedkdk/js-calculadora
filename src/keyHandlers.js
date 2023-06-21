import calculate from "./calculate.js";

const input = document.querySelector("#input");
const allowedKeys = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];
const specialAllowedKeys = ["(", ")", "/", "*", "-", "+", ".", "%"];

export function handleButtonPress(ev) {
  if (specialAllowedKeys.includes(ev.currentTarget.dataset.value)) {
    if (input.value.slice(-1) === " ") {
      const value = ev.currentTarget.dataset.value;
      input.value += value + " ";
      return;
    }
    const value = ev.currentTarget.dataset.value;
    input.value += " " + value + " ";
    return;
  } else {
    const value = ev.currentTarget.dataset.value;
    input.value += value;
  }
}

export function handleClear(ev) {
  input.value = "";
  input.focus();
}

export function handleTyping(ev) {
  ev.preventDefault();

  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
    return;
  }
  if (specialAllowedKeys.includes(ev.key)) {
    if (input.value.slice(-1) === " ") {
      input.value += ev.key + " ";
      return;
    }
    input.value += " " + ev.key + " ";
    return;
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }
  if (ev.key === "Enter") {
    calculate();
  }
}
