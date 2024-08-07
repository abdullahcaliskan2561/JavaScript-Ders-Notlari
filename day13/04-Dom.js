import { students } from "./02.Dom-Data.js";

document
    .querySelector("#tblStudents tbody")
    .addEventListener("click", (e) => {
        // tbody icinde uzerine tiklanan her elementin click olayinin burada yakalanmasi eventPropogation sayesinde olur.

        if (!e.target.classList.contains("btn-del")) return;

        const name = e.target.closest("tr").children[1].textContent;

        const res = confirm(`${name} isimli kaydi silmek istediginizden emin misiniz?`)

        if (res) {
        }
    });
 
const loadData = () => {
    let html = "";

    students.forEach((student, index) => {
        html += `<tr>
                    <td>${index + 1}</td>
                    <td>${student.name}</td>
                    <td>${student.point}</td>
                    <td>
                        <button class="btn btn-danger btn-sm btn-del">🗑️</button>
                    </td>
                </tr>`;
    });

    const tbody = document.querySelector("#tblStudents tbody");
    tbody.innerHTML = html;
};

loadData();

//Bu örnekte silme işlemini henüz öğrenmediğimiz için yarım bıraktık Öğrenince devam edeceğiz