import { enterIndex, leaveIndex } from "./ui.js";

const jeux1 = document.querySelector("#jeux1");

jeux1.addEventListener("mouseenter", (event) => {
  enterIndex(event.target, "#ff9c8a");
});
jeux1.addEventListener("mouseleave", (event) => {
  leaveIndex(event.target, "#ff9c8a");
});
