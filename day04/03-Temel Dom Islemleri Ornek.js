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
headEl.innerText = "Hello Javascript";//Hello Javascript - - - Sayfa kaynağını görüntülediğimizde biz kodu Hello Dom olarak görürüz Ancak incele dediğimizde dom un oluştuğunda ve js ile metin in Hello Javascript olarak değiştirildiğini görürüz