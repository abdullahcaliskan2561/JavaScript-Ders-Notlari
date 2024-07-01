const lblHour =document.querySelector("#clock li:first-child");
const lblMinute = document.querySelector("#clock li:last-child");
const lblSecond = document.querySelector("#clock li:nth-child(2)");

const clock= document.querySelector(".clock");
let timer = null;
let flag =true;

//veya bu üçünü all yaparak da seçebilirdik
//const clockItems = document.querySelectorAll("clock li"); şeklinde 



//Saati başlatacak bir fonksiyon yazalım
const startClock = () => {
    timer =setInterval(() => {
        const dateTime = new Date();
        const hour = dateTime.getHours();
        const minute = dateTime.getMinutes();

       //console.log(hour, minute);

        lblHour.innerText = hour.toString().padStart(2, "0");//padStart özelliği saatin dakikası 0-9 arasında olduğunda önünde 0 olmadan dakikayı gösteriyordu Bunu engelleyip dakikanın önünde 0 olarak göstermesini sagladık
        lblMinute.innerText = minute.toString().padStart(2, "0");
        lblSecond.classList.toggle("hidden");//css e eklediğimiz hidden class ı ile sanıiyenin yanıp sönmesini sağladık

        if (flag) { //İlk başlangıçtaki gecikmeden dolayı saatin içinde sadece saniye görünüyordu Sonnra saat geliyordu bunu engellemek için html de hidden class ını ekledik sonra let flag ekledik ve flagı true yaptık Bu şekilde flag true ise saaatin hidden class ını sildik ve saaat görünür oldu 
            clock.classList.remove("hidden");
            flag =false;
            
        }


        //6.satırdaki gibi yazarsak şu şekilde yerleştirmemiz gerekecekti
        //clockItems[0].innerHtml = hour;
        //clockItems[2].innerHtml = minute;
       
    
        
    },1000)
}

startClock();

const stopClock = () => {
     clearInterval(timer);
}

window.addEventListener("beforeunload", () => {
    stopClock();
    timer = null;
})
