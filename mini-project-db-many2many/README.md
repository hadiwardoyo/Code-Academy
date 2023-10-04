# MINI PROJECT Many to Many DB

# ilab

## -> Database Table

- mataPraktikum
- praktikan
- mataPraktikum
- jurusan (diluar relasi)

---

> `mataKuliah`

| Field             | Datatype | Modifiers   | catatan                 |
| ----------------- | -------- | ----------- | ----------------------- |
| id                | SERIAL   | PRIMARY KEY |
| nama              | VARCHAR  | NOT NULL    |
| jurusan           | VARCHAR  | NOT NULL    |
| tahun_akademik    | VARCHAR  | NOT NULL    |
| semester_akademik | VARCHAR  | NOT NULL    | ganjil / genap          |
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
| fakultas         | VARCHAR  | NOT NULL    |
| tahun_didirikan  | INT      | NOT NULL    |
| nomor_akreditasi | VARCHAR  | ALLOW NULL  |

---

## -> DAFTAR ROUTING

| method | route                                        | keterangan                                                                   | status pengerjaan |
| ------ | -------------------------------------------- | ---------------------------------------------------------------------------- | ----------------- |
| GET    | /                                            | tampilan homepage tidak memuat data apapun                                   | done              |
| GET    | /mataKuliah                                  | menampilkan halaman berisi detail _mata kuliah_                              | done              |
| GET    | /mataKuliah/data                             | mendapatkan seluruh data _mata kuliah_ yang ada                              | done              |
| GET    | /praktikan                                   | menampilkan halaman berisi detail*praktikan*                                 | done              |
| GET    | /praktikan/data                              | mendapatkan seluruh data _praktikan_ yang ada                                | done              |
| GET    | /mataPraktikum/data                          | mendapatkan seluruh data _kelas praktikum_ yang ada                          | done              |
| ------ | -----------------                            | ------------------------------------------------------                       | ----------------- |
| GET    | /mataKuliah/add                              | menuju form menambahkan mataKuliah                                           | done              |
| POST   | /mataKuliah/add                              | menyimpan data hasil input `mataKuliah/add`                                  | done              |
| GET    | /praktikan/add                               | menuju form menambahkan _praktikan_                                          | done              |
| POST   | /praktikan/add                               | menyimpan data hasil input `praktikan/add`                                   | done              |
| GET    | /mataPraktikum/add                           | menambahkan kelas praktikum berdasarkan data _mataKuliah_ dan _praktikan id_ |
| ------ | -----------------                            | ------------------------------------------------------                       | ----------------- |
| GET    | /mataKuliah/delete/:id                       | menghapus 1 mata kuliah beserta _seluruh kelasPraktikum_                     | done              |
| GET    | /praktikan/delete/:id                        | menghapus 1 praktikan dan menghapusnya di _kelas yang ada_                   | done              |
| GET    | /mataPraktikum/delete/:idMatkul/:idPraktikan | menghapus kelas praktikum (_menghapus koneksi_)                              | -tampilan         |
| ------ | -----------------                            | ------------------------------------------------------                       | ----------------- |
| GET    | /mataKuliah/update/:id                       | menampilkan halaman edit data _mataKuliah_ berdasarkan id                    | done              |
| POST   | /mataKuliah/update/:id                       | mengubah data _mataKuliah_ berdasarkan id                                    | done              |
| GET    | /praktikan/update/:id                        | menampilkan halaman edit data _praktikan_ berdasarkan id                     | done              |
| POST   | /praktikan/update/:id                        | mengubah data _praktikan_ berdasarkan id _praktikan_                         | done              |
| ------ | -----------------                            | ------------------------------------------------------                       | ----------------- |
| get    | /praktikan/:id/matkul                        | menampilkan halaman detail praktikan beserta _kelas praktikum_ yang ditempuh | done              |

## -> ROUTING TAMBAHAN (optional)

| method | route               | keterangan                                             | status pengerjaan |
| ------ | ------------------- | ------------------------------------------------------ | ----------------- |
| GET    | /jurusan            | mendapatkan _data jurusan lengkap_                     | done              |
| GET    | /jurusan/add        | menuju form menambahkan jurusan                        | -                 |
| POST   | /jurusan/add        | menyimpan data hasil input `jurusan/add`               | done              |
| GET    | /jurusan/delete/:id | menghapus 1 jurusan sesuai _id_                        | done              |
| GET    | /jurusan/update/:id | menampilkan halaman edit data _jurusan_ berdasarkan id | -                 |
| POST   | /jurusan/update/:id | mengubah data _jurusan_ berdasarkan id                 | done              |
