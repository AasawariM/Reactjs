"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const counterBtn = document.getElementById("counter-button");
  const displayText = document.querySelector(".counter-display");
  let count = 0;

  counterBtn.addEventListener("click", function () {
    count++;
    console.log(count);
    displayText.textContent = `You clicked ${count} times`;
  });
});
