const txtNum = document.querySelector("#txtNum");
const btnStart = document.querySelector("#btnStart");
const btnGuess = document.querySelector("#btnGuess");
const txtResult = document.querySelector("#txtResult");
const guessCountDisplay = document.querySelector("#guessCount");


let randomNumber = 0;
const minRandomNumber = 1;
const maxRandomNumber = 100;
let remainingGuesses = 5;


txtNum.setAttribute("placeholder", `${minRandomNumber} - ${maxRandomNumber} arasında bir sayı giriniz`);

//Start butonuna basıldığında çalışacak fonksiyon
const start = () => {
    randomNumber = getRandomNumber();
    console.log(randomNumber);
    txtNum.removeAttribute("disabled");//Burada removeAttribute ile sildik
    txtNum.focus();
    btnGuess.classList.remove("d-none");//Burada da classlist.remove ile sildik
    btnStart.innerHTML = "Yeniden başlat";
    txtResult.innerHTML = "";
    remainingGuesses = 5;
    guessCountDisplay.innerHTML = `Kalan tahmin hakkı: ${remainingGuesses} `;

}
//Sonuç bulunduğunda oyunu en  başa almak için kullanılacak fonksiyon
const reset = () => {
    btnGuess.classList.add("d-none");
    txtNum.setAttribute("disabled", "disabled");// txtNum.setAttribute("disabled","true"); şeklinde de yazabilirdik
    btnStart.innerHTML = "Start the Game";
    guessCount.innerHTML = "";

}

//Tahmin et butununa basıldığında çalışacak fonksiyon
function guess() {
    const guessNumber = Number(txtNum.value);

    if (!guessNumber || isNaN(guessNumber) || guessNumber < minRandomNumber || guessNumber > maxRandomNumber) {
        txtResult.innerHTML = `"Lütfen ${minRandomNumber} - ${maxRandomNumber} arasında bir sayi giriniz`;
        return;
    }
    remainingGuesses--;

    if (guessNumber === randomNumber) {
        txtResult.innerHTML = "🏆🏆🏆Bildiniz Tebrikler...🏆🏆🏆"
        txtResult.classList.replace("text-danger", "text-success");
        reset();
    }
    else {
        if (remainingGuesses > 0) {
            if (guessNumber > randomNumber) {
                txtResult.innerHTML = ` ${guessNumber} sayısından daha kucuk bir sayi giriniz 👇`
            }
            else {
                txtResult.innerHTML = ` ${guessNumber} sayısından daha buyuk bir sayi giriniz ☝️`
            }
            txtNum.focus();//İmlecin input içerisine girmesini başlar
            txtNum.value = "";//Inputun degerini sıfırlama
            txtNum.removeAttribute("placeholder");//Inputun placeholderını sıfırlama
            guessCountDisplay.innerHTML = `Kalan tahmin hakkı: ${remainingGuesses} `;

        } else {
            txtResult.innerHTML = `Tahmin hakkınız bitti! Doğru sayi ${randomNumber} idi.`
        }
    }
}


//Rastgele bir sayı oluşturacak fonksiyon
function getRandomNumber() {
    return Math.floor(Math.random() * (maxRandomNumber - minRandomNumber + 1) + minRandomNumber);


    /* Math.floor(Math.random() * (max - min + 1)) + min
     5-60  arasında (5-60 dahil) rastgele sayı üretmek istiyorsak formülü şu şekildedir
     Math.floor(Math.random() * (60 - 5 + 1)) + 5;
     Math.floor(Math.random() * (56)) + 5;
 
    */
}