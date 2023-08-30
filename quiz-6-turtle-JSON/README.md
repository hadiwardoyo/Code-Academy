# Snappy Turtle Shop

![1](https://d24chjhol3kq77.cloudfront.net/trbusiness.com/wp-content/uploads/2021/08/Jewel-Changi-Turtle-store.jpg)

## Summary

Pengusaha bernama Vincent mempunyai toko reptil khususnya kura-kura bernama **Snappy Turtle Shop**. Dia memiliki banyak jenis kura-kira baik dari spesies unik hingga spesies kura-kura darat. Vincent memiliki banyak `TurtleBox` yang terdiri dari beberapa jenis `Turtle`. Dia membutuhkan sebuah aplikasi untuk mengatur pergerakan penjualan dan pembelian dari toko.

## JSON

Berikut adalah _turtleboxes.json_ :

<dropdown>

```json
[
  {
    "id": 1,
    "boxName": "Snappy Garden",
    "turtles": [
      {
        "id": 1,
        "name": "Common Snapping Turtle",
        "species": "SnappingTurtle",
        "size": 10,
        "weight": 500,
        "price": 3500000,
        "patterns": ["brown", "blade"]
      },
      {
        "id": 2,
        "name": "Common Snapping Turtle",
        "species": "SnappingTurtle",
        "size": 5,
        "weight": 350,
        "price": 1500000,
        "patterns": ["brown", "blade"]
      }
    ]
  },
  {
    "id": 2,
    "boxName": "Land and Sea",
    "turtles": [
      {
        "id": 1,
        "name": "Sulcata",
        "species": "Tortoise",
        "size": 5,
        "weight": 750,
        "price": 1500000,
        "patterns": ["brown"]
      },
      {
        "id": 2,
        "name": "Red Eyed Slider Turtle",
        "species": "Terrapins",
        "size": 3,
        "weight": 200,
        "price": 500000,
        "patterns": ["red", "blade"]
      }
    ]
  }
]
```

</dropdown>

## Tasks

### Attributes:

`Turtle` memiliki attribute berikut:

- id
- name
- species - ada 3 family - `SnappingTurtle`, `Tortoise`, `Terrapins`
- price
- patterns - array
- size ()(cm)
- weight (gram)

### Method:

Buatlah variable `TurtleBox` sebagai variable utama utk CRUD, dengan method sebagai berikut:

a. showBoxes() _done_

    - Menampilkan boxes yang berisi kura-kura

    ```js
    /*
    Turtle boxes in our shop:
    1. Snappy Garden - 2 turtles
    2. Land and Sea - 2 turtles
    */
    ```

b. createBox(boxName) _done_

    - Membuat turtle box baru
    - Tidak boleh membuat nama turtle box dengan nama yang sudah ada.

c. addTurtle(boxName, name, species, price, patterns, size, weight) _Done_

    - Memasukkan turtle ke dalam box berdasarkan name
    - Patterns by default langsung []
    - id turtle mengikuti tiap box

d. sellTurtle(boxName, id)

    - Menghapus turtle dari box berdasarkan id

e. countTotalPrice(boxName) _Done_

    - Menghitung total price dari sebuah box

f. boxDetail(boxName) _Done_

    - Menampilkan detail dari box berdasarkan dari boxName

    ```js
    /*
    "Snappy Garden" turtles are:
    1. Common Snapping Turtle - Rp. 3500000
    Species: SnappingTurtle, Size: 10cm, Weight: 500gr.
    Patterns: brown, and blade.
    2. Aligator Snapping Turtle - Rp. 1500000
    Species: SnappingTurtle, Size: 5cm, Weight: 350gr.
    Patterns: black, and blade.
    */
    ```

g. filterPerSpecies(species) - ada 3 species

```js
// Pilih species Tortoise
/*
Result:
These are our Tortoise collections: (2 in total)
1. Sulcata - Rp. 1500000, size: 5, weight: 500
2. Sulcata - Rp. 500000, size: 3, weigth: 350
*/
---

**CARA MENGERJAKAN DAN MENGUMPULKAN TUGAS**

1. Git clone repository
2. Buat branch baru
3. Kerjakan di branch masing-masing
4. Add, Commit, Push
5. Pull Request

---
```
