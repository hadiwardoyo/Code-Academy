# live-code-2

## Summary

Vincent selaku CEO dan GM dari sebuah Perusahaan Seni ingin memiliki sebuah aplikasi yang memungkinkan untuk Seniman untuk menampilkan dan menjual hasil karyanya. Aplikasi tersebut ingin di jadikan sebuah Showroowm agar bisa di lihat oleh orang banyak.

Aplikasi ini dapat Login berdasarkan _role_ tertentu, dari `Admin`, `Scuplter`, `Painter`, `Carver`. Dan masing-masing _role_ memiliki akses command tersendiri. Sehingga _role_ tertentu tidak bisa CRUD dari _role_ yang lainnya. Misal: `Sculpter` tidak bisa menghapus karya orang lain selain dirinya.

## Time

** ~ 210 menit **

## Classes

1. `User` memiliki _sub class_:

- `Admin`
- `Sculpter`
- `Painter`
- `Carver`

2. `Art` memiliki _sub class_:

- `Sculpture`
- `Painting`
- `Carving`

3. `SuperAdmin`

4. `Artwork`

### Attributes & Methods

1. `User` memiliki attributes:

- id
- username
- password
- role
- loggedIn (true / false)

2. `Art` memiliki attributes:

- id
- name
- price
- type
- artist

3. `SuperAdmin` berisi method2 untuk CRUD `User`

4. `Artwork` berisi method2 untuk CRUD `Art`

## Commands

### Not Logged In

`Admin` atau `User` belum Login maka berikut command yang diberikan

1. _node index.js help_

   ```js
   // node index.js help
   /*
   Welcome Guest, what would you like today:
   node index.js help
   node index.js login <username> <password>
   */
   ```

2. _node index.js login_

   - Login dengan menggunakan _role_ tertentu, bisa `Admin`, `Sculpter`, `Painter`, `Carver`
   - Ketika sudah login maka status _online_ akan menjadi _true_ dalam `users.json` menandakan bahwa user tersebut sedang login.

   ```js
   // node index.js login admin 123

   // Result:
   // Welcome admin to your page.
   ```

### Logged In

`Admin` sedang Login maka berikut command yang di berikan:

1. _node index.js help_

   ```js
   /*
       Welcome Admin, what would you do today:
       node index.js help
       node index.js show
       node index.js add <role> <username>
       node index.js changePwd <password>
       node index.js delete <id>
       node index.js update <id> <username>
       node index.js logOut  
   */
   ```

2. _node index.js show_

   - Menampilkan list `User` dan _role_ nya

   ```js
   /*
       User list:
       1. admin - "Admin"
       2. jake - "Sculpter"
       3. jack - "Painter"
       4. jane - "Carver"
       5. jim - "Admin"
   */
   ```

3. _node index.js add <role> <username>_

   - Membuat user baru dan memasukkan ke dalam `users.json`

   ```js
   // node index.js add Sculpter "jona123"

   // Result:
   // A Sculpter named "jona123" has been created
   ```

4. _node index.js changePwd <password>_

   - Mengubah pwd

   ```js
   // node index.js changePwd abc

   // Result:
   // Pwd has been changed
   ```

5. _node index.js delete <id>_

   - Menghapus user berdasarkan id

   ```js
   // node index.js delete 3

   // Result:
   // A "Painter" has been deleted.

   // Jika tidak ada
   // User not found.
   ```

6. _node index.js update <id> <username>_

   - Mengubah username berdasarkan id

   ```js
   // node index.js update 5 "jim123"

   // Result:
   // A "Admin" has been updated

   // Jika tidak ada
   // User not found
   ```

7. _node index.js logOut_

   - Logout dari session sekarang dan mengubah _loggedIn_ menjadi false

### Sculpter, Painter, Carver

- `Sculpter`, `Painter`, `Carver` sedang Login maka berikut command yang di berikan:

1. _node index.js help_

   ```js
   /*
   Welcome jack a Sculpter, what would you do today:
   node index.js help
   node index.js artworks
   node index.js create <name> <price> 
   node index.js remove <id>
   node index.js edit <id> <name> <price> 
   node index.js changePwd <password>
   node index.js logOut
   */
   ```

2. _node index.js artworks_

   - Menampilkan hasil karya dari user tersebut

   ```js
   // node index.js artworks

   /*
   Your artworks:
   1. "Masterpiece" - Rp. 1000000
   2. "Sit down" - Rp. 500000
   */
   ```

3. _node index.js create_

   - Membuat artworks

   ```js
   // node index.js create "Masterpiece" 1000000

   // Result:
   // "Masterpiece" has been created.
   ```

4. _node index.js remove_

   - Menghapus artwork berdasarkan id

   ```js
   // node index.js remove 3

   // Result:
   // Your artwork "Masterpiece" has been deleted.

   // Jika tidak ada
   // Artwork not found

   // Jika bukan karya user tersebut
   // You can't delete other's artwork
   ```

5. _node index.js edit_

   - Mengubah artwork name, price berdasarkan id

   ```js
   // node index.js edit 1 "Master man" 1500000

   // Result
   // Your artwork has been edited.

   // Jika tidak ada
   // Artwork not found

   // Jika bukan karya user tersebut
   // You can't update other's artwork.
   ```

6. _node index.js changePwd_

   - Mengubah password

   ```js
   // node index.js changePwd abcde

   // Result:
   // Your password has been changed.
   ```

7. _node index.js logOut_

   - Logout dari session sekarang dan mengubah online menjadi false.

## How to Submit

- Clone repository
- Buat branch masing2
- Kerjakan dalam branch tersebut
- Add, Commit, Push
- Done
