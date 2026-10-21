let angka_1 , angka_2, hasil;

document.getElementById("jumlah").onclick = function() {
    angka_1 = document.getElementById("angka_1").value;
    angka_2 = document.getElementById("angka_2").valueAsNumber;
    console.log(`angka_1 = ${angka_1}, tipe = ${typeof angka_1}`);
    console.log(`angka_1 = ${angka_2}, tipe = ${typeof angka_2}`);

    hasil = parseFloat(angka_1) + angka_2;
    console.log(`hasil ${angka_1} + ${angka_2} = ${hasil}`);

    document.getElementById("hasil").textContent = hasil;
};