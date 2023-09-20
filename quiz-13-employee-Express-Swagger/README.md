# Employee Data

## Learning Competencies

1. Students understands about WEB API
2. Students can apply REST API Architecture
3. Students can apply MVC concept in WEB API
4. Students understands how to use Postman
5. Students able to make API Documentation

## Summary

Employee HR Management adalah sebuah aplikasi mengenai data karyawan, posisi pekerjaan, dan nama perusahaan. Sehingga ada 3 bagian utama: `Employee`, `Job`, `Employer`. Buatlah aplikasi tersebut dengan menggunakan **Express.js** dan **Node.js** agar menjadi sebuah API.

## Tasks

<blockquote>
Untuk mengerjakan lebih baik buat dari awal dan jangan kopi paste ya
</blockquote>

### Task 1 (done)

Buatlah 3 class: `Employee`, `Job`, `Employer` dengan ketentuan berikut:

- Attributes dalam class `Employee` :

  | key  | keterangan                  |
  | ---- | --------------------------- |
  | id   | primary key, akan increment |
  | name | string                      |
  | job  | string                      |
  | age  | number                      |
  | city | string                      |

- Attributes dalam class `Job` :

  | key        | keterangan                  |
  | ---------- | --------------------------- |
  | id         | primary key, akan increment |
  | name       | string                      |
  | category   | string                      |
  | max_salary | number                      |
  | min_salary | number                      |

- Attributes dalam class `Employer` :

  | key            | keterangan                  |
  | -------------- | --------------------------- |
  | id             | primary key, akan increment |
  | name           | string                      |
  | type           | string                      |
  | total_employee | number                      |
  | city           | stri                        |

### Task 2 (done)

Buatlah database menggunakan _json_ sebagai berikut:

1. `employees.json`
2. `jobs.json`
3. `employers.json`

### Task 3

Buatlah _endpoints_ dalam folder **Routes** seperti berikut:

| Method | Endpoints             | Keterangan                                  | status |
| ------ | --------------------- | ------------------------------------------- | ------ |
| GET    | /                     | berisi home page                            | done   |
| GET    | /employees            | berisi data karyawan dari `employees.json`  | done   |
| GET    | /jobs                 | berisi data pekerjaan dari `jobs.json`      | done   |
| GET    | /employers            | berisi data pekerjaan dari `employers.json` |
| POST   | /employees/create     | berfungsi untuk menambahkan data            | done   |
| POST   | /jobs/create          | berfungsi untuk menambahkan data            | done   |
| POST   | /employers/create     | berfungsi untuk menambahkan data            |
| GET    | /employees/delete/:id | menghapus dari id                           | done   |
| GET    | /jobs/delete/:id      | menghapus dari id                           | done   |
| GET    | /employers/delete/:id | menghapus dari id                           |
| POST   | /employees/update/:id | berfungsi untuk merubah data                | done   |
| POST   | /jobs/update/:id      | berfungsi untuk merubah data                | done   |
| POST   | /employers/update/:id | berfungsi untuk merubah data                |

---

### Task 4

Interface dapat dibuat menggunakan _EJS_, agar memudahkan membuat aplikasi dengan cepat dapat menggunakan _Bootstrap_

### Task 5

Swagger merupakan salah satu platform untuk membuat **API Documentation**

Buatlah API Documentation dengan bantuan **Swagger**

## NOTE

A. Gunakan postman untuk test

B. Perhatikan penamaan variable, identation, dsb

C. Agar lebih cepat bisa menggunakan built in function
