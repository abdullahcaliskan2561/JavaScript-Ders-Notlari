/* ---------------Value--------------------- */
/* Form elemenlarının değerini okumak ve değiştirmek için value kullanılır
--Textbox
--Select
--RadioButton vb
--Kullanıcıdan form içerisinde aldığımız bilgilere erişimi value ile sağlarız  */

const txtNameEl = document.querySelector("#txtName");
console.log(txtNameEl.value);//Ali Gel
const welcomeEl = document.querySelector("#welcome");

welcomeEl.innerHTML = `<strong>Welcome</strong> <em>${txtNameEl.value}</em></strong>`; //Kaynağa baktığımızda h1 in içerisinin boş olduğunu görürüz Ama h1 i bu şekilde js ile manipule ettik inspect e bakınc görebiliyoruz


//Normal bir  HTML elemanının içini ifade etmek için inner HTML kapanış ve açılış tagları --->tireli olan kısım ( <p> - - </p>) arasında yazan kısmı almak için innerText kullanılır
//Bir form elemanının içerisini ifade etmek için value kullanırız


