# Patisserie-chef

Exercise OOP

## SUMMARY

Seorang chef specialis makanan manis / dessert akan membuat 3 jenis dessert yaitu Chocolate Cookies, Sweet Cookies, Strawberry Cookies. Dimana dia akan membuat nya dalam Kitchen (factory class).

Bantulah chef tsb untuk membuat Cookies dengan bantuan OOP menggunakan bahasa Javascript.

## DIRECTION

### Task 1 _DONE_

Buat class Cookie, yang berisi attribute :

- id
- name
- price
- ingredients (array)
- type

### Task 2 _DONE_

Buat class inheritance utk Chocolate, Sweet, Strawberry, yang memiliki attribute tambahan berupa :

- isSweet (_false -> by defaultf_)

### Task 3 _DONE_

Buat class Kitchen sebagai factory class, yang memiliki attribute dan method :

- Key

  - container : berisi cookies2 yang dibuat

- Method

  - bake(...cookies) :

  method ini bertujuan untuk membuat kue dan memasukkan ke dalam container

  - eat(id) :

  method ini bertujuan utk delete cookies dari container

  - addSugar(id) :

  method ini bertujuan untuk mengganti isSweet menjadi true atau false

  - showCookies() :

  method ini bertujuan untuk melihat cookies yang ada.

### Task 4 _DONE_

Pisah kan file menjadi 3 file js.

### Task 5

a. Buatlah sebuah method untuk menampilkan ingredients dari sebuah cookie

    - showIngredients(id) _DONE_

    ```js
        /*
        "Chocolate Sweety" ingredients are:
        1. Chocolate
        2. Butter
        */
    ```

b. Buatlah sebuah method untuk menambahkan ingredients ke sebuah cookie

    - addIngredient(id,ingredients) _DONE_

c. Buatlah sebuah method untuk mengkategorikan ingredient

    - categoriesCookiesByIngredient(ingredientName) _DONE_

    ```js
        // Contoh: ingredientName => Chocolate
        /*
            Cookies with Chocolate Ingredients:
            1. Chocolate Sweety
            2. Brownies cakep
        */
       // Jika tidak ada kategori nya maka print "There's no cookie."

    ```

d. Buatlah sebuah method untuk mengurutkan harga

    - sortCookies(type) // type ada 2 : 'asc' dan 'desc' _DONE_

e. Buatlah sebuah method untuk mengkategorikan cookies

    - categoriesCookies() _Done_

    ```js
    /*
    Chocolate:
    1. Chocolate Cookies
    2. Brownies Cakep

    Sweet:
    1. Sweet Butter

    Strawberry:
    1. Red Velvet
    2. Berry Cake
    */
    ```

```js
/*
Our Cookies:
1. [v] Chocolate Sweety, Rp 10000
2. [ ] Plain butter, Rp. 5000
*/
```
