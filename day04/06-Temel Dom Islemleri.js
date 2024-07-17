//1
function setMode() {
    const isDark = document.querySelector("body").classList.contains("dark");
    //console.log(isDark); Body nin classlistinde dark varsa true verir yoksa false verir

    //3
   const btnToggle= document.querySelector(".toggle-btn");

    //2
    if (isDark) {
        document.body.classList.remove("dark");
        btnToggle.innerHTML =' <i class="fas fa-moon"></i>'  //4
    }
    else {
        document.body.classList.add("dark");
        btnToggle.innerHTML ='<i class="fas fa-sun"></i>'  //5
    }
}