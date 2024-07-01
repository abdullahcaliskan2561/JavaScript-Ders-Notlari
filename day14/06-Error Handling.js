


const frmLogin = document.querySelector("#frmLogin");

frmLogin.addEventListener("submit", (e) => {
    e.preventDefault();//Formun default submit davranışını iptal eder Default davranışta login e tıklayınca bilgileri google a gönderir Bu şekilde  default davranışı kapatınca login e tıklayınca bilgileri göndermeyecek

    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");






    try {
        const email = txtEmail.value;
        const password = txtPassword.value;

        if (!email || !isEmail(email)) {
            txtEmail.focus();
            throw new Error("Lütfen email adresinizi  giriniz");
            
        }

        if (!password) {
            txtPassword.focus();
            throw new Error("Lütfen sifrenizi giriniz");
        }

        //Yukarıda kapattığımız default submit özelliğini tekrar açalım Tıkladığımızda google a gönderecek
        e.target.submit();

    } catch (error) {
        console.log(error);
        alert(error.message);

    }  
});

//Regex ile verilen e mail adresinin uygun formatta olup olmadığını kontrol eden bir fonksiyon yazalım 
const isEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);  
}

//Try ve catch kullanmak zorunludur Finally kullanmak zorunlu değildir Try -Catch -Finally kullandığımızda try ve finally mutlaka çalışır  Catch sadece  hata olduğunda çalışır
