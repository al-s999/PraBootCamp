let todoList = []

let btnTambah = document.getElementById('btnTambah');
let tugas = document.getElementById('inputTugas');
let areaList = document.getElementById('area-list');

function renderList(){
    let listHtml = "<ul class='list-group'>";

    for(let i=0; i < todoList.length; i++){
        listHtml += 
        `<li class='list-group-item list-group-item-primary d-flex justify-content-between align-items-center'>
            <span>${todoList[i]}</span>
            <button class='btn btn-danger btn-sm' onclick='hapusTugas(${i})'>Delete</button>
        </li>
        `;
    }

    listHtml += "</ul>";
    areaList.innerHTML = listHtml;
};

btnTambah.onclick = function(){
    let newTask = tugas.value.trim();
    console.log(newTask);

    if(newTask === ''){
        alert("Tidak ada tugas baru yang ditambahkan");
        return;
    }

    todoList.push(newTask);
    tugas.value = ''; 

    renderList();
};

function hapusTugas(index){
    todoList.splice(index, 1);
    renderList();
}