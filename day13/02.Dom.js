import { students } from "./02.Dom-Data.js";

//Students i html deki tbody içerisine ekleyen bir fonksiyon yazalım
const loadData = () => {
    let html = "";
    students.forEach((student ,index) => {
        html += `<tr>
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.point}</td>
        </tr>`;
    })
//tbady yi seçelim
const tbody = document.querySelector("#tblStudents tbody");
tbody.innerHTML = html;

}



loadData();

