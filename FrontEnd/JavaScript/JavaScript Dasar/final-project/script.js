let areaMenu = document.getElementById("areaMenu");
let areaBelanja = document.getElementById("areaBelanja");
let total = document.getElementById("total");

let dataMenu = ["Kopi Hitam","Kopi Susu", "Teh", "Es Teh", "Mie"];
let dataHarga = [5000, 7000, 2500, 2500, 10000];
let keranjang = [];

let mainPage = document.getElementById("mainPage");
let notaPage = document.getElementById("notaPage");

let detailNota = document.getElementById("detail");

function renderMenu(){
    let elementHTML = "<ul class='list-group'>";

    for(let i=0; i<dataMenu.length; i++){
        elementHTML+= `
        <li class='list-group-item d-flex justify-content-between align-items-center'>
            <div>
                <h5 class='mb-0'>${dataMenu[i]}</h5>
                <small class='text-muted'>Rp. ${dataHarga[i]}</small>
            </div>
            <button onclick='tambahKeranjang(${i})' class='btn btn-primary btn-sm'>Tambah</button>
        </li>
        `
    }

    elementHTML += "</ul>";
    areaMenu.innerHTML = elementHTML;
};

function tambahKeranjang(index){
    keranjang.push(index);
    renderKeranjang();
};

function renderKeranjang(){
    if(keranjang.length === 0){
        areaBelanja.innerHTML = `
        <p class='text-muted text-center'>Keranjang masih kosong</p>
        `;
        total.innerHTML = `Rp. 0`;
        return;
    }

    let daftarPesanan = [];

    for(let i=0;i<keranjang.length;i++){
        let indexMenu = keranjang[i];

        let Pesanan = daftarPesanan.find(item => item.index === indexMenu);

        if(Pesanan){
            Pesanan.jumlah++;
        } else {
            daftarPesanan.push({
                index: indexMenu,
                jumlah: 1
            })
        }
    }

    let elementHTML = "<ul class='list-group'>";
    let totalPesanan = 0;

    for (let i = 0;i < daftarPesanan.length;i++){
        let indexMenu = daftarPesanan[i].index;
        let jumlah = daftarPesanan[i].jumlah;

        let menu = dataMenu[indexMenu];
        let harga = dataHarga[indexMenu];
        let subtotal = harga * jumlah;
        
        totalPesanan = totalPesanan + subtotal;

        elementHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-success mb-1 rounded">
                <div>
                    <h6 class="mb-0">${menu}</h6>
                    <small class="text-muted">
                        Rp. ${harga} × ${jumlah}
                    </small>
                </div>

                <div class="text-end">
                    <strong class='m-2'>Rp. ${subtotal}</strong>
                    <button
                        onclick="hapus(${indexMenu})"
                        class="btn btn-danger btn-sm mt-1">
                        x
                    </button>
                </div>
            </li>
        `;
    }

    elementHTML += "</ul>"

    total.innerHTML = "Rp. " + totalPesanan;
    areaBelanja.innerHTML = elementHTML;
};

function hapus(index){
    let menu = keranjang.indexOf(index);

    if (menu !== -1) {
        keranjang.splice(menu, 1);
    }

    renderKeranjang();
};

function bayar(){
    if(keranjang.length === 0){
        alert("Keranjang masih kosong harap isi terlebih dahulu");
        return;
    }

    daftarPesanan = [];

    for (let i = 0; i < keranjang.length; i++) {
        let indexMenu = keranjang[i];

        let pesanan = daftarPesanan.find(
            item => item.index === indexMenu
        );

        if (pesanan) {
            pesanan.jumlah++;
        } else {
            daftarPesanan.push({
                index: indexMenu,
                jumlah: 1
            });
        }
    }

    let elementHTML = `
        <table class="table table-border-less">
            <tbody>
    `;

    let totalPesanan = 0;



    for(let i=0;i<daftarPesanan.length;i++){
        let indexMenu = daftarPesanan[i].index;
        let jumlah = daftarPesanan[i].jumlah;

        let menu = dataMenu[indexMenu];
        let harga = dataHarga[indexMenu];
        let subtotal = harga * jumlah;

        totalPesanan += subtotal;

        elementHTML +=`
            <tr>
                <td>${menu}</td>
                <td>Rp. ${harga} x${jumlah}<td>
                <td>Rp. ${subtotal}<td>
            </tr>
        `

    }

    elementHTML += `
        </tbody>
        <tfoot class='border-top'>
            <tr>
                <th colspan='3'><strong>TOTAL BAYAR</strong></th>
                <th><strong>Rp. ${totalPesanan}</strong></th>
            </tr>
        </tfoot>
        </table>
    `

    detailNota.innerHTML = elementHTML;

    mainPage.classList.add("d-none");
    notaPage.classList.remove("d-none");
};

function selesai(){
    keranjang = [];

    renderKeranjang();

    mainPage.classList.remove("d-none");
    notaPage.classList.add("d-none");

    alert("Pesanan Selesai")
};

renderMenu();
renderKeranjang();