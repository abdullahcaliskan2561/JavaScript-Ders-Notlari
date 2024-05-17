const pageTitle = document.querySelector("#pageTitle");
console.log(pageTitle);//<h1 id="pageTitle" class="">Hi DOM !</h1> - - Elementi seçerek hepsini getirdi Ama bize classları lazım Şimdi de classları seçelim

console.log(pageTitle.classList); // DOMTokenlist[value:''] - - Class o olmadığı için boş olarak getirdi Şimdi buna css klasöründe oluşturduğumuz class ı ekleyelim

pageTitle.classList.add("title");//Class ı eklediğimizde eleman class içeriğine göre şekillendi Aynı işlemleri p elementi için de yapalım

const aboutEl = document.querySelector("#about");
console.log(aboutEl);
//aboutEl.classList.add("bg-blue");//Aynı şekilde p elementi  de eklediğimi clas ın özelliklerin kazandı - -14.Satırda kapalı olmasının nedeni yazıyor

//Eğer buradaki her iki clas ı da aynı elemente uygulamak istiyorsak o zaman şu şekilde işlem yapabiliriz

aboutEl.classList.add(...["bg-blue", "title"]) //Burada css klasöründeki her iki class ı da  p elementine eklemiş olduk Yukarıda p elementine eklediğimiz ilk bg-blue class ını kapatabiliriz Zaten burada eklemiş olduk Yada bu ekleme işlemini tek tek olarak da yapabiliriz
//aboutEl.classList.add("bg-blue");
//aboutEl.classList.add("title"); - - şeklinde 

//Aynı şekilde bir elementten class silmek için classList.remove() methodunu kullanabiliriz