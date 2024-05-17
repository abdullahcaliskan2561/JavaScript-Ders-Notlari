const headEl = document.querySelector("h1");
console.log(headEl);  //<h1>Hello Dom</h1>

const pEl = document.querySelector("#aboutUs");
console.log(pEl);//<p id="aboutUs">…</p>

const spanEl = document.querySelector("#aboutUs span");
console.log(spanEl); //<span>sint</span>

const menuEl= document.querySelector("ul.menu");
console.log(menuEl); //<ul class="menu">…</ul>

const menuItem3El = document.querySelector("ul.menu li:nth-child(3)");
console.log(menuItem3El); //"Temporibus?"- - - Ul listesindeki 3. elemanı seçtik

//Ilk bir manipulasyon yapalım
headEl.innerText = "Hello Javascript";//Hello Javascript - - - Sayfa kaynağını görüntülediğimizde biz kodu Hello Dom olarak görürüz Ancak incele dediğimizde dom un oluştuğunu ve js ile metin in Hello Javascript olarak değiştirildiğini görürüz

const spanEls = document.querySelectorAll("#aboutUs >span");
console.log(spanEls);// Tüm span elemanlarını seçer.NodeList(2)[span, span] olarak sonuç döner Bunu bir dizi olarak döndüğü için şimdi bu dizinin elemeanlarını değiştirelim mesela
spanEls[0].innerText = "HELLO";
spanEls[1].innerText = "JAVASCRIPT";//Bir dizi olduğu için indeksleri kullanarak elemanları değiştirdik

//ul listesinin ikinci elemanını alıp son elemana ekleyen kodu yazalım
const listTwoText = document.querySelector(".menu li:nth-child(2)").innerText;
document.querySelector(".menu li:last-child").innerText += " " + listTwoText;  //Son eleman Tenetur.Cum. oldu Ham kodlarda değişiklik olmadı ancak sayfa kaynağında görebiliyoruz sonucu  Ayrıca innerText e ekleme kısmını .innerText += ` ${listTwoText}` şeklinde boşluk bırakarak da yazabilirdik



