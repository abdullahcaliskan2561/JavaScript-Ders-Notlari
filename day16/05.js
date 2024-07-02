const ocPrivacy = new bootstrap.Offcanvas("#ocPrivacy");
const isPrivacyPolicy = localStorage.getItem("privacy-policy");
if (!isPrivacyPolicy) ocPrivacy.show();

document.getElementById("btnAcceptPrivacy").addEventListener("click", () => {
    localStorage.setItem("privacy-policy", true);
    ocPrivacy.hide();
});