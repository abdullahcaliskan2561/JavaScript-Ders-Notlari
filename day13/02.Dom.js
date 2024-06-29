import { students } from "./02.Dom-Data.js";

//Butona tıklama event ekleyelim-3
document.getElementById("btnShowLowScores").addEventListener("click", () => {
    setRowColorsForLowScores();   
});

//Satırları gezen ve renk değişimi yazan kod yazalım
const setRowColorsForLowScores = () => {
    const tableRows = document.querySelectorAll("#tblStudents tbody tr");

    tableRows.forEach((tr) => {
        const score = tr.querySelector("td:last-child").textContent;
        if (score < 80) {
            tr.classList.add("table-danger");
        }
    });
};

//Students i html deki tbody içerisine kleyen bir fonksiyon yazalım-1
const loadData = () => {
    let html = "";
    students.forEach((student, index) => {
        html += `<tr>
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.point}</td>
        </tr>`;
    });

//tbady yi seçelim-2
const tbody = document.querySelector("#tblStudents tbody");
tbody.innerHTML = html;

}
loadData();




 