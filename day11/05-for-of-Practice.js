import { countries } from "../day11/05-for-of-Practice-Data/countries.js";
console.log(countries);//Bu şekilde yazdığımızda  Uncaught SyntaxError: Cannot use import statement outside a module şeklinde hata verdi Bunu düzeltmek için html dosyamız içerisindeki script bağlantı dosyasına gidip oraya type="module" ekliyoruz


/* Buradaki countries i select içerisine dolduracak bir fonksiyon yazalım */
const loadData =()=>{
    let options = "";
    for (let country of countries) {
        options += `<option> ${country.name.common}</option>`;
    }

    const ddlCountries = document.querySelector("#ddlCountries");
    ddlCountries.innerHTML = options;
}
loadData();



/* Örneğin biz save butonuna bastığımızda select te görünen ülke adı değil de o ülkeye ait başka bir bilginin backend e gitmesini istiyorsak onu da şu şekilde yapabiliriz  Options kısmına 9.satır şu şekilde yazmalıyız  */
options += `<option value="${country.cca2}"> ${country.name.common}</option>`; //Bu şekilde yazdığımızda cca 2 bilgisi backend e gönderdilir

