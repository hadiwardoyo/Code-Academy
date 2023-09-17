# tugas-rest-api

## Tasks->

# A. API

## 1. Apa itu API dan REST API?

- API (Application Programming Interface) ialah sebuah software atau perangkat lunak yang menghubungkan aplikasi yang telah kita buat dengan aplikasi yang lain. tujuannya adalah untuk saling berbagi data atau informasi antar aplikasi yang telah di koneksikan melalui API tersebut.

- Rest API merupakan salah satu jenis API yang menerapkan architecture REST (Representational State Transfer). Definisi dari REST itu sendiri ialah sebuah prinsip desain web bagaiamana sebuah data disimpan, diakses, maupun dipindahkan melalui protokol HTTP.

## 2. Apa itu Web API?

- Definisi Web API adalah sebuah aplikasi / interface yang menghubungkan aplikasi yang satu dengan aplikasi yang lain pada sebuah sistem berbasis website.

## 3. Apa istilah _request_ dan _response_ dalam REST API?

- Istilah _Request_ dalam REST API ialah sebuah perminaatn yang dikirim oleh client (aplikasi mobile / web) kepada server melalui protokol HTTP. Request dapat berisi parameter, data, maupun informasi lainnya yang dibutuhkan oleh server untuk memproses permintaan tersebut.
- Sedangkan _Response_ dalam REST API merupakan balasan yang dikirim oleh server berdasarkan request yang diminta oleh client. Response dapat berisi status, data maupun informasi lainnya yang dibutuhkan oleh client.

## 4. Sebutkan 5 HTTP Method yang kamu ketahui?

- HTTP method yan umum digunakan ialah : _*GET, POST, PUT, PATCH dan DELETE*_

## 5. Apa fungsi dari software Postman?

Postman berfungsi sebagai REST client yang digunakan untuk uji coba REST API. Postman juga dapat digunakan oleh developer sebagai tool untuk menguji API yang telah dibuat. bebrapa manfaat/ fitur lainnya ialah:

- Mengirim HTTP request kepada server
- Menguji response yang diterima
- Membuat dokumentasi dari API
- Membuat mock server

---

# B. NPM

## 1. Apa arti dan singkatan dari NPM?

NPM adalah singkatan dari _Node Package Manager_ yaitu tool yang digunakan untuk mengelola package atau modul javascript dalam pengembangan berbasih node.js. NPM memungkinkan pengguna untuk mencari, menginstall, mengupdate maupun menghapus package yang dibutuhkanoleh aplikasi dengan cepat dan mudah

## 2. Apa itu Yarn, apakah sama dengan NPM?

Yarn merupakan alternatif untuk NPM. yarn merupakan aplikasi yang berfungsi sebagai manager paket javascript yang dikembangkan oleh facebook. yarn mendukung fitur pemasangan paket secara parallel dan penanganan konflik versi. Yarn cenderung lebih cepat dan lebih aman dibandingkan dengan NPM.

## 3. Apa fungsi dari _package.json_?

Fungsi dari _package.json_ ialah tempat menyimpan informasi tentang proyek Node.js seperti nama, versi, deskripsi, dll. <br>
File ini digunakan oleh nNPM untuk dapat mengelola paket-paket yang akan digunakan dalam proyek.Format dari file ini dalah JSON yang merupakan format yang sederhana dan mudah dipahami.

## 4. Apa perbedaan _dependencies_ dan _devDependencies_ dalam package.json?

- _Dependencies_ adalah paket-paket yang dibutuhkan oleh aplikasi anda dalam tahap produksi yaitu pada saat aplikasi kita akan dijalankan oleh end user. contoh paketnya adalah seperti express, mongoose, react dll.
- Sedangkan _devDependencies_ ialah paket-paket yang digunakan / dibutuhkan pada saat pengujian lokal yaitu pada saat sedang membuat maupun menguji aplikasi tersebut. contoh paket-paket yang membantu pada saat pengembangan seperti jest, babel, webpack dll.

## 5. Apa _command_ jika ingin menginstall package _express_ dalam npm?

- Command yang digunakan (untuk versi terbaru) adalah: _npm install express_

---

# C. _JSON_

## 1. Apa singkatan dari JsOn ?

- Singkatan dari JSON / JsON adalah Javascript Object Notation

## 2. Sebutkan tipe data dalam JsOn ?

- JSON identik dengan kumpulan pasangan key dan value. dimana key selalu ber tipe string dan value memiliki beragam tipe data yaitu seperti: String, Number,Booleam, Object, Array dan Null.
