//3.örnekte ise default kullanımı göreceğiz  Default olarak export edilmesi ve kullanılması örneğine bakalım Öne çıkan en çok kullanılan main bir fonksiyon varsa o default olarak export edilebilir



const showAlert = () => {

}

const showConfirm = () => {

}

export default showAlert;
export { showConfirm };

//Bir modulde sadece bir tane default export edilebilir Diğerleri normal olarak export edilmelidir

    
//Default olanlar süslü parantezle export ve import edilmez Default olanlarda süslü parantez kullanılmaz 
