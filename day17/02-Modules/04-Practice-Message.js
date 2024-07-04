const showAlert = (msj) => {
    alert(msj);
};

const showConfirm = (msj2) => {
return confirm(msj2);
}

const showPrompt = (msj3) => {
return prompt(msj3);
}

export default showAlert;
export { showConfirm , showPrompt};