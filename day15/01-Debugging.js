const btn = document.getElementById("btn");
const lblResult = document.getElementById("lblResult");


btn.addEventListener("click", () => {
    let total = 0;
    for (let i = 0; i < 10; i++) {
        total += i +multlply(i);
    }
    lblResult.textContent= total
});

const multlply = (num) => {
    let result = 0;
    if (num > 3) {
        result = num * 2;
    }
    return result;
}

//Debugging js sayfasıs açıkken değil HTML sayfası açıkken yapılır
//Ve debug işleminin başlaması için bir breakpoint noktası seçmeliyiz 6. satıra bir breakpoint ekledik ve html sayfasına giderek çalıştıralım


