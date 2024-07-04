import showAlert, { showConfirm, showPrompt } from "./04-Practice-Message.js";

document.getElementById("btnAlert").addEventListener("click", () => {
    showAlert("Hello alert")
});

document.getElementById("btnConfirm").addEventListener("click", () => {
    showConfirm("Hello alert")
});

document.getElementById("btnPrompt").addEventListener("click", () => {
    showPrompt("Hello alert")
});



showAlert();
showConfirm();
showPromt();    