# quiz-5

## INCOME & EXPENSE TRACKER

### SUMMARY

Buatlah sebuah income and expense tracker yang dapat mengatur list pengeluaran dan pemasukan.

### TASKS

Aplikasikan modular function untuk membuat aplikasi tersebut. Berikut rincian :

1. function getTracks()

- mengambil variable tracks lalu menghasilkan output seperti berikut :

```
Expense :
1. Bayar cicilan : Rp. 1.000.000
2. Beli Makan : Rp. 500.000
Income
1. Income 1 : Rp. 1.000.000
2. Jual makan : Rp. 500.000
```

2. function addTrack(type,name,price)

- menambahkan track (type : expense dan income), diluar itu error ("Input the right track!!")

3. function deleteTrack(type,id)

- menghapus track (type : expense dan income) diluar itu error ("Input the right track")

4. function statusTrack()

- untuk mengecek balance dengan rumus income - expense
  jika Minus tampilkan message : "Kurangi pengeluaran"
  jika Plus tampilkan message : "Aman gan"

5. function rupiahFormatter(price)

- mengubah digit harga menjadi rupiah
