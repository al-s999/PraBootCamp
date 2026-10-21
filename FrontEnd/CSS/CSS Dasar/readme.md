**A. Teori CSS**
<br>
<br>
**1. Apa itu CSS ?**
 
 CSS (Cascading Style Sheet) adalah file yang mengatur style atau UI dari website kita. Untuk menggunakannya ada berbagai cara :

 - Kita dapat memasukkannya di atribute style pada tag HTML (inline CSS), 
 - Kita dapat memasukkan di tag style di dalam head html (Internal CSS)
 - Kita dapat menggunakan CSS selector yang terdiri dari Selector dan Deklarasi, dalam Deklarasi ada 2 bagian Propery dan Value, di file CSS (Eksternal CSS) yang di hubungkan dengan tag link di dalam head HTML.

**2. Selector**
 
 Ada beberapa macam :
 
 - Universal Selector, untuk semua elemen dengan menggunakan * pada selector nya.
 - Type Selector, selector nya dari tag pada HTML, seperti heading, paragraph, dll.
 - Class Selector, selector nya dari atribute class, misal .namaClass
 - ID Selector, selector nya dari atribute ID, misal #className
 - Child Selector, selector dengan menggunakan child di tag HTML, misal p>b (parent>child)
 - Desendant selector, selector dengan menggunakan semua tag yang ada dalam parent, misal p b (parent allTag)
 - Adjacent Sibling Selector, Selector nya mencari tag setelah tag awalnya, misap P+h2 
 - General Sibling Selector, selector nya berasal dari semua tag setelah suatu tag, misal h2~p

**3. Aturan Cascade**
 
 Pertama, Aturan Last. Saat ada set style untuk komponen yang sama, maka akan di ambil style yang terakhir atau yang paling bawah.
 
 Kedua, Aturan Spesific. Saat ada set style untuk komponen yang sama, maka yang selector nya lebih spesifik akan di perioritaskan, atau di definisi nya ada atribute !important .

**4. Inheritance**
 
 Inheritance atau bisa juga value inherit, itu artinya kita mengambil value dari Propery yang sama dari tag atau komponen di atas nya (level nya di atas nya).

**5. Color**
 
 Forefround-color itu digunakan untuk teks,sedangkan background-color itu untuk latar belakang teks atau komponen nya. kita bisa pakai colorName, 
 HexCode, dan RGB Value untuk set color di CSS.
 
 Lalu ada yang dinamakan Color-Alpha, itu adalah di penggunaan RGB Value, dengan menambahkan 1 angka setelah 3 angka RGB nya, fungsi nya untuk set tingkat transparansi nya dari 0 - 1.
 
 Di background-color ada value function hsl(A, B, C) , dimana A adalah Hue atau derajat colornya dari 0-360, B adalah saturasi dari 0% - 100% , C adalah lightness nya dari 0% (hitam) - 100% (putih), normal nya 50% untuk lightness nya.
 
 Kemudian Ada hsl-alpha, letak nya sama seperti Color-alpha , kita tambah angka setelah lightness, fungsi nya sama untuk mengatur transparansi.
 
**6. Font Family, Size, Weight, Style dan Decoration**
 
 font-family, itu adalah property untuk set jenis font nya, jika ada tanda kutip pada value nya artinya value nya memiliki spasi. lalu saat kita set value nya ada banyak, maka prioritas nya yang pertama atau paling kiri, jika tidak ada maka ganti ke font-family di samping nya.
 
 font-size seperti nama nya untuk set ukuran dari teks atau font nya, kita bisa menggunakan value text seperti small,large, dll . kita juga bisa pakai pixel, percentase, em (dari font size dari font-familynya), dll.
 
 font-Weight itu propery untuk set ketebalan dari font nya, kita bisa set dengan name misal normal, bold, dll. lalu ada juga font-style untuk set style dari font nya misal italic, dll.
 
 text-Decoration itu property untuk set decoration atau elemen tambahan di dalam teks nya, contoh Value seperti none, underline, dll
 
**7. Transform, Align, Shadow, Hover, Active dan Visited**
 
 text-transform itu property untuk mengatur format teks nya misal capitalize, lowercase, uppercase, dll. lalu text-align itu property untuk set alignment dari teks nya misal center, right, justify, dll.
 
 text-shadow itu propery untuk set shadow dari komponen nya, format value nya seperti ini A, B, C, D . A adalah shadow bagian kanan, B shadow bagiam bawah, dan C adalah distorsi atau kejelasan dari shadow nya, D adalah warna dari shadow nya. untuk value A, B, C kita bisa pakai pixel.
 
 word-spacing itu property untuk set jarak spasi per kata, dan letter-spacing propery untuk set jarak spasi antar huruf, untuk value nya bisa pakai pixel atau em.
 
 hover itu untuk menambahkan style perubahan ketika pointer masuk ke komponen nya, active itu untuk menambahkan style saat komponen nya aktif, dan visited untuk menambahkan style pada komponen yang sudah kita kunjungi biasa nya link. kita bisa menambahkan hover di selector nya, dengan menambahkan :hover di samping kanan selector. begitupun dengan active dan visited.
 
**8. Box, Height, Width dan Overflow**

 Untuk membuat box kita dapat memanfaatkan elemen div html, lalu ditambah style. height itu property untuk set ketinggian dari komponen nya, disini div untuk mengatur tinggi box. width itu property untuk set lebar dari suatu komponen, disini div untuk mengatur lebar dari box. Kita dapat mengatur min dan max dari width dan height nya.
 
 Overflow adalah property untuk mengatur bagian yang tidak muat atau melewati width dan height nya, utuk value nya bisa hidden untuk menyembunyikan bagian yang tidak muat, atau scroll untuk menambahkan scroll bar.
 
**9. Padding, Border, dan Margin**

 padding adalah property untuk mengatur area kosong di sekitar content atau bisa di sebut area paling dekat content. border adalah bagian di luar padding yang biasa nya di atur dengan value solid, atau px, dll. dan yang paling luar itu adalah margin, ia mengatur area kosong di area paling luar content.
 
 border sendiri punya banyak sub-property seperti border-top-style(style border atas), border-bottom-width(ketebalan border bawah), border-color. untuk border-style ada solid, double, dotted(titik2), dashed(garis putus2).
 
 Untuk urutan dari border, padding, margin width itu jika ada 2 value maka A adalah atas-bawah, B adalah kanan-kiri . jika ada 4 value maka A adalah atas, B adalah kanan, C adalah bawah dan D adalah kiri.

**10. Display Element**

 Display inline, itu untuk menampilkan dalam 1 line yang sama, dan terhubung. kalau Display block ia akan mengambil space atau baris yang berbeda.
 
 Kalau Display inline-block ia akan di tampilkan di line yang sama tapi masih mewarisi sifat dari block. Lalu ada display flex, ia akan menyesuaikan dengan komponen yang ada di dalam display flex.
 
**B. Latihan Soal**
<br>
<br>
**1. Preview Latihan Soal 1 - Text**

<img width="1920" height="1080" alt="Screenshot_20261018_205955" src="https://github.com/user-attachments/assets/57ee9f16-4abb-4d99-ae07-4caea1d9a161" />

<br>
<br>

**2. Preview Latihan Soal 2 - Text**
<br>
<br>

<img width="1920" height="1080" alt="Screenshot_20261018_214706" src="https://github.com/user-attachments/assets/e08292c4-202f-4e13-8327-f73935e678ba" />

<br>
<br>

**3. Preview Latihan Soal 3 - Box Model**
<br>
<br>

<img width="1920" height="1080" alt="Screenshot_20261018_231616" src="https://github.com/user-attachments/assets/88666e55-4e1e-4727-85d4-6e65b0d1eefa" />

<br>
<br>

**4. Preview Studi Kasus 1 - Berita**
<br>

**Main**
<br>

<img width="1920" height="1080" alt="Screenshot_20261020_112220" src="https://github.com/user-attachments/assets/82e71aab-bdb6-4275-94ea-2c058961b2cd" />

<br>
<br>

**Content**
<br>

<img width="1920" height="1080" alt="Screenshot_20261020_112238" src="https://github.com/user-attachments/assets/b4a3e2c1-bd98-467d-a8ea-e60eef230582" />

<br>
<br>

**5. Preview Studi Kasus 2 - Perpustakaan**
<br>

**Beranda**
<br>

<img width="1920" height="1080" alt="Screenshot_20261020_233125" src="https://github.com/user-attachments/assets/3a1042be-f2e7-4df1-a61b-038f04f6f5d3" />

<br>
<br>

**Buku**
<br>

<img width="1920" height="1080" alt="Screenshot_20261020_234018" src="https://github.com/user-attachments/assets/4d1c878c-0e67-4461-9408-db3dfd7d5dcd" />

<br>
<br>

**Kontak**
<br>

<img width="1920" height="1080" alt="Screenshot_20261020_233147" src="https://github.com/user-attachments/assets/2ea5ec8f-477f-40a4-8670-f948582bcae9" />

<br>
<br>
 
