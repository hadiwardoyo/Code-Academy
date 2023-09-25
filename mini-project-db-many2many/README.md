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

| Field         | Datatype | Modifiers   | catatan |
| ------------- | -------- | ----------- | ------- |
| id            | SERIAL   | PRIMARY KEY |
| mataKuliah_id | INT      | NOT NULL    |
| praktikan_id  | INT      | NOT NULL    |
| kelas         | VARCHAR  | NOT NULL    |

---

## -> DAFTAR ROUTING

| method | route              | keterangan                                               | status pengerjaan |
| ------ | ------------------ | -------------------------------------------------------- | ----------------- |
| GET    | /                  | tampilan homepage                                        |
| GET    | /mataKuliah        | tampilan seluruh data _mata kuliah_ dan _kelas_ yang ada |
| GET    | /praktikan         | tampilan seluruh data _praktikan_ & _list kelas_         |
| GET    | /mataKuliah/detail | tampilan _detail praktikan_ yang ada _di kelas_          |
| ------ | -----------------  | ------------------------------------------------------   | ----------------- |
| GET    | /mataKuliah/add    | menuju form menambahkan mataKuliah                       |
| POST   | /mataKuliah/add    | menyimpan data hasil input `mataKuliah/add`              |
| GET    | /praktikan/add     | menuju form menambahkan praktikan (coba input csv)       |
| POST   | /praktikan/add     | menyimpan data hasil input `mataKuliah/add`              |
