# MINI PROJECT Many to Many DB

# ilab

## -> Database Table

- mataPraktikum
- praktikan
- mataPraktikum

---

> `mataKuliah`

| Field             | Datatype | Modifiers   | catatan                 |
| ----------------- | -------- | ----------- | ----------------------- |
| id                | SERIAL   | PRIMARY KEY |
| nama              | VARCHAR  | NOT NULL    |
| jurusan           | VARCHAR  | NOT NULL    |
| tahun_akademik    | VARCHAR  | NOT NULL    |
| semester_akademik | VARCHAR  | NOT NULL    |
| jumlah_peserta    | INT      | ALLOW NULL  | generate data praktikan |

---

> `praktikan`

| Field       | Datatype | Modifiers   | catatan             |
| ----------- | -------- | ----------- | ------------------- |
| id          | SERIAL   | PRIMARY KEY |
| nim         | INT      | NOT NULL    |
| nama        | VARCHAR  | NOT NULL    |
| jurusan     | VARCHAR  | NOT NULL    |
| fakultas    | VARCHAR  | NOT NULL    |
| tahun_masuk | INT      | NOT NULL    |
| status      | VARCHAR  | NOT NULL    | aktif / tidak aktif |

---

> `mataPraktikum`

| Field         | Datatype | Modifiers   | catatan (example) |
| ------------- | -------- | ----------- | ----------------- |
| id            | SERIAL   | PRIMARY KEY |
| mataKuliah_id | INT      | NOT NULL    |
| praktikan_id  | INT      | NOT NULL    |
| kelas         | VARCHAR  | NOT NULL    |
| hari          | VARCHAR  | NOT NULL    | senin, selasa     |
| pukul         | VARCHAR  | NOT NULL    | 13.00-14.00       |

---

> `jurusan` (tidak menggunakan relasi)

| Field            | Datatype | Modifiers   | catatan (example) |
| ---------------- | -------- | ----------- | ----------------- |
| id               | SERIAL   | PRIMARY KEY |
| nama             | VARCHAR  | NOT NULL    |
| fakultas         | INT      | NOT NULL    |
| tahun_didirikan  | INT      | NOT NULL    |
| nomor_akreditasi | VARCHAR  | ALLOW NULL  |

---

## -> DAFTAR ROUTING

| method | route                     | keterangan                                                           | status pengerjaan |
| ------ | ------------------------- | -------------------------------------------------------------------- | ----------------- |
| GET    | /                         | tampilan homepage                                                    |
| GET    | /mataKuliah               | tampilan seluruh data _mata kuliah_ dan _kelas_ yang ada             |
| GET    | /praktikan                | tampilan seluruh data _praktikan_ & _list kelas_                     |
| GET    | /mataKuliah/detail        | tampilan _detail mataKuliah_ yang ada _di kelas_                     |
| ------ | -----------------         | ------------------------------------------------------               | ----------------- |
| GET    | /mataKuliah/add           | menuju form menambahkan mataKuliah                                   |
| POST   | /mataKuliah/add           | menyimpan data hasil input `mataKuliah/add`                          |
| GET    | /praktikan/add            | menuju form menambahkan praktikan (coba input csv) + kelas praktikum |
| POST   | /praktikan/add            | menyimpan data hasil input `mataKuliah/add`                          |
| GET    | /mataPraktikum/add        | menambahkan kelas praktikum berdasarkan _mataKuliah_ dan             |
| ------ | -----------------         | ------------------------------------------------------               | ----------------- |
| GET    | /mataKuliah/delete/:id    | menghapus 1 mata kuliah beserta _seluruh kelasPraktikum_             |
| GET    | /praktikan/delete/:id     | menghapus 1 praktikan dan menghapusnya di _kelas yang ada_           |
| GET    | /mataPraktikum/delete/:id | menghapus kelas praktikum (_menghapus koneksi_)                      |                   |
| ------ | -----------------         | ------------------------------------------------------               | ----------------- |
| GET    | /mataKuliah/update/:id    | menampilkan halaman edit data _mataKuliah_ berdasarkan id            |
| POST   | /mataKuliah/update/:id    | mengubah data _mataKuliah_ berdasarkan id                            |
| GET    | /praktikan/update/:id     | menampilkan halaman edit data _praktikan_ berdasarkan id             |
| POST   | /praktikan/update/:id     | mengubah data _praktikan dan kelas_ berdasarkan id _praktikan_       |
| GET    | /mataPraktikum/update/:id | menampilkan halaman edit data _keanggotaan di kelas_, berdasarkan id |
| POST   | /praktikan/update/:id     | mengubah data _praktikan_ berdasarkan id _praktikan_                 |
| ------ | -----------------         | ------------------------------------------------------               | ----------------- |

## -> ROUTING TAMBAHAN (optional)

| method | route               | keterangan                                             | status pengerjaan |
| ------ | ------------------- | ------------------------------------------------------ | ----------------- |
| GET    | /jurusan            | mendapatkan _data jurusan lengkap_                     |
| GET    | /jurusan/add        | menuju form menambahkan jurusan                        |
| POST   | /jurusan/add        | menyimpan data hasil input `jurusan/add`               |
| GET    | /jurusan/delete/:id | menghapus 1 jurusan sesuai _id_                        |
| GET    | /jurusan/update/:id | menampilkan halaman edit data _jurusan_ berdasarkan id |
| POST   | /jurusan/update/:id | mengubah data _jurusan_ berdasarkan id                 |
