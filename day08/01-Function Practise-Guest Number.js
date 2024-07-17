const txtNum = document.querySelector("#txtNum");
const btnStart = document.querySelector("#btnStart");
const btnGuess = document.querySelector("#btnGuess");
const txtResult = document.querySelector("#txtResult");


let randomNumber = 0;

//Start butonuna basıldığında çalışacak fonksiyon
const start = () => {
    randomNumber = getRandomNumber();
    console.log(randomNumber);
    txtNum.removeAttribute("disabled");//Burada removeAttribute ile sildik
    txtNum.focus();
    btnGuess.classList.remove("d-none");//Burada da classlist.remove ile sildik
    btnStart.innerHTML = "Yeniden başlat";
    txtResult.innerHTML = "";

}
//Sonuç bulunduğunda oyunu en  başa almak için kullanılacak fonksiyon
const reset = () => {
    btnGuess.classList.add("d-none");
    txtNum.setAttribute("disabled", "disabled");// txtNum.setAttribute("disabled","true"); şeklinde de yazabilirdik
    btnStart.innerHTML = "Start the Game";

}

//Tahmin et butununa basıldığında çalışacak fonksiyon
function guess() {
    const guessNumber = Number(txtNum.value);

    if (!guessNumber || isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100) {
        txtResult.innerHTML = "Lütfen 1-100 arasında bir sayi giriniz";
        return;
    }
    if (guessNumber === randomNumber) {
        txtResult.innerHTML = "🏆🏆🏆Bildiniz Tebrikler...🏆🏆🏆"
        txtResult.classList.replace("text-danger", "text-success");
        reset();
    }
    else if (guessNumber > randomNumber) {
        txtResult.innerHTML = ` ${guessNumber} sayısından daha kucuk bir sayi giriniz 👇`
    }
    else {
        txtResult.innerHTML = ` ${guessNumber} sayısından daha buyuk bir sayi giriniz ☝️`
    }
    txtNum.focus();//İmlecin input içerisine girmesini sağlar
    txtNum.value = "";//Inputun degerini sıfırlama
    txtNum.removeAttribute("placeholder");//Inputun placeholderını sıfırlama

}

//Rastgele bir sayı oluşturacak fonksiyon
const getRandomNumber = () => {
    return Math.floor(Math.random() * 100 + 1);

    /* Math.floor(Math.random() * (max - min + 1)) + min 
     5-60  arasında (5-60 dahil) rastgele sayı üretmek istiyorsak formülü şu şekildedir
     Math.floor(Math.random() * (60 - 5 + 1)) + 5;
     Math.floor(Math.random() * (56)) + 5;

    */
}