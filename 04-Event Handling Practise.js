const txtScore1 = document.querySelector("#txtScore1");
const txtScore2 = document.querySelector("#txtScore2");
const txtScore3 = document.querySelector("#txtScore3");
const btnAverage = document.querySelector("#btnAverage");
const txtResult = document.querySelector("#txtResult");


//Butono tıkladığımızda meydana gelecek olayları kontrol edecek fonksiyon
btnAverage.addEventListener("click", () => {

    const score1 = txtScore1.value
    const score2 = txtScore2.value
    const score3 = txtScore3.value



    if(!isScoreValid(score1) || !isScoreValid(score2) || !isScoreValid(score3)){
        alert("Please enter valid scores");   
        return;
    }

    const average = getAverage(score1, score2, score3);
    
    const letter = converteScoreToLetter(average);

    txtResult.innerHTML = `Ortalama ${average} harf notu: ${letter}`
    
});




//Inputtan gelen verilerin kontrolünü yapacak fonksiyon--1
const isScoreValid = (score) => {
    return (score || score === 0) && !isNaN(score) && score <= 100 && score >= 0;
}


//3 sayının ortalamasını alacak fonksiyon--2
const getAverage = (score1, score2, score3) => {
    return (Number(score1) + Number(score2) + Number(score3)) / 3;
}



//Ortalamayı harf notunu çevirecek fonksiyon--3
const converteScoreToLetter = (average) => {
    if (average >= 90) {
        return "A";
    } else if (average >= 80) {
        return "B";
    } else if (average >= 70) {
        return "C";
    } else if (average >= 0 && average <= 50) {
        return "D";
    } else {
        return "F";
    }
}