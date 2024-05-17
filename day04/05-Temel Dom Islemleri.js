function sayHello() {
    const txtNAmeEl = document.querySelector("#txtName"); //1
    const welcomeEl = document.querySelector("#welcome");//2
    
    welcomeEl.innerHTML = ` Hello ${txtNAmeEl.value}`; //3

    //Son olarak da button a onclick özelliği ile butona basıldığında fonksiyonun aktif olması özelliğini ekledik

    /* ÖNEMLI
    Eğer biz text bölümüne her bir harfi yazdığımızda o anda sonucu görmek istiyorsak  input bölümüne
    <input type="text" id="txtName" oninput="sayHello()" placeholder="Type your hello"> şeklinde  oninput özelliği eklersek girilen değere göre anında sonucu görebiliriz Yani yazdığımız fonksiyonu oninput olarak input içerisinden çağırmamız yeterlidir.
     */

    /* Ayrıca burada butona bastığımızda bir click ten elimizi çekince işlem yapıyor Eğer mouse a ilk bastığımızda elimiz click üzerindeyken yani tık ı bırakmadan işlem yapılmasını istiyorsak button daki onclick yerine
     onmousedown="sayHello()" yaparsak sonucu elde etmiş oluruz */
    
}