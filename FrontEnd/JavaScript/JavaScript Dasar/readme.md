**A. Teori JavaScript**
<br>
<br>
**1. Apa itu JavaScript ?**
 
 JavaScript adalah file yang mengatur prilaku atau action dari suatu website dengan membuat nya menjadi dinamis dan interaktif.

**2. Variabel**
 
 Ada beberapa macam :
 
 - var, sifat nya function-scoped dan value nya dapat di ubah ulang dalam scope yang sama. jika var di gunakan sebelum di deklarasikan maka nilai nya undefined.
 - let, sifat nya block-scoped dan value nya dapat di ubah ulang, di scope yang berbeda.
 - const, bersifat block-scoped dan value nya tidak dapat di ubah ulang.

**3. String (Escaping dan Literal)**
 
 jadi kita dapat menggunakan escaping untuk memasukkan karakter khusus dalam string tanpa error, seperti
 
 \'string\' , \"string\"
 \n untuk line-break
 \t untuk tambah
 \r untuk memindahkan ke awal baris
 \b untuk backspace
 \f untuk page break

**4. Number**
 
 Number itu berukuran maksimal 64-bit atau -2^1024 hingga 2^1024 , untuk standar nya kita bisa pakai integer untuk bilangan bulat. lalu float di gunakan untuk bilangan desimal.
 
 sedangkan big int, itu jika kita memiliki angka yang sangat besar dan butuh perhitungan presisi.
 
 jika kita menggunakan parse string ke number, jika number nya di depan maka dapat di ambil tapi jika number di belakang maka hasil nya NaN.
 
**5. Operasi Komperasi**

 di dalam JS ada beberapa oprator yang digunakan, yaitu :
 
 - == , Equality
 - != , InEquality
 - === , Strict Equality
 - !== , InStrict Equality
 
 Pada Equality dan InEquality saat kita mengkomparasi tipe data number dengan string maka, data string yang dikanan akan otomatis parse ke int
 
 berbeda dengan Strict Equality dan Strict InEquality, saat ada kasus yang sama ia tidak akan mengubah tipe data nya dan mengkomparasi apa ada nya dan lebih spesifik.
 
**6. Ternary Operator**

 Secara sederhana ini adalah versi ringkas dari condional statement if-else, dengan menggunakan format
 
 Variabel hasil = (condition) ? True : False ;
 
**7. Method di Array**

 - join, adalah method untuk meggabungkan isi dalam array dengan parameter separator nya dalam tipe string.
 - splice, adalah method untuk mengambil atau memindahkan data dari array dengan format index, delele/nodelete, data. 
 - slice, adalah Method untuk memotong data dari array dengan format index, sebelum index, misal 1,3 maka ia akan mengambil data dari index 1 hingga index sebelum 3. beda nya dengan splice, di slice ia tidak mempengaruhi data yang ada di dalam array.
 - concat, adalah method untuk menggabungkan 2 array.
 - includes, adsalah method untuk cek apakah data ada di dalam array.
 - indexOf, adalah method untuk mengetahui index dari data di dalam array.
 - sort, adalah method untuk mengurutkan data didalam array, dan untuk mengembalikan urutannya bisa pakai reverse

**8. Break dan Continue**
 
 Ini du=igunakan di dalam looping Array, fungsi nya seperti nama nya, break untuk menghentika looping ketika kondisi terpebuhi sedangkan continue untuk melewati 1 value berikut nya setelah kondisi terpebuhi
 
**9. Function**
 
 Jadi function ini simple nya sebuah sistem atau program yang dapat digunakan berulang kali tanpa harus menuliskan ulang code nya, hanya cukup memanggil nama function dan mengisi parameter / argument nya jika ada.
 
 function dapat menyimpan sebuah value yang dihasilkan dari funtion itu sendiri dengan menggunakan return value. return value hanya dapat mengembalikan 1 value, jika ingin mengembalikan lebih dari 1 value maka dapat dikembalikan dalam bentuk array.
 
**10. Variabel Scope**

 - Global Scope, mencakup keseluruhan code nya, dan variabel nya digunakan di dalam function atau class.
 - Local Scope, itu mencakup semua code di dalam 1 fungsi atau class, dan semua Variabel di dalam function tidak dapat di gunakan di global scope.
 
 - Contoh function scope adalah let dan const, dimana ia tidak dapat di gunakan di luar curly bracket.
 - Untuk Var ia dapat dibaca tanpa batasan scope , atau bisa di bilang global scope.
 
**11. Function Declarative dan Expresion**

 Ada 2 cara membuat function :
 
 - Declarative, ia akan membuat fungsi dengan format function namaFunction() , dan di Declarative walau kita memanggil function nya di atas deklarasi nya, code nya dapat berjalan.
 - Expresion, ia akan membuat function dengan format Variabel = function() , di sini kita tidak dapat memanggil function nya di atas code fungsi nya, tapi bisa dijalankan jika code nya dibawah function nya.
 
**B. Latihan Soal**
<br>
<br>
**1. Preview Latihan Soal 1 - String dan Variabel**

<img width="1920" height="1080" alt="Screenshot_20261021_203544" src="https://github.com/user-attachments/assets/6b897539-4d19-4000-b2ef-c923efe02566" />


<br>
<br>

**2. Preview Latihan Soal 2 - Tipe Data**
<br>
<br>

<img width="1920" height="1080" alt="Screenshot_20261021_211511" src="https://github.com/user-attachments/assets/f7c32f76-669d-4e6d-a5d6-6015de8b86d6" />


<br>
<br>

**3. Preview Latihan Soal 3 - kalkulator**
<br>
<br>

<img width="1920" height="1080" alt="Screenshot_20261023_224412" src="https://github.com/user-attachments/assets/dcb3b25c-e5f4-4ba2-97c0-84dde514ecf2" />

<br>
<br>

 **4. Preview Latihan Soal 4 - to do list**
<br>
<br>

<img width="1920" height="1080" alt="Screenshot_20261024_000425" src="https://github.com/user-attachments/assets/90abffe4-98af-46f2-81b8-981cb81c4519" />

<br>
<br>
 
