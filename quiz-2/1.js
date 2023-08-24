let fruits = ["Jeruk", "Mangga", "Jambu", "Durian", "Rambutan"];
let vegetables = ["Kangkung", "Bayam", "Tomat", "Bawang", "Bayam"];

// A. push
fruits.push("Anggur", "Pisang", "Sirsak");
console.log("\n  A . push ");
console.log(fruits);

// B. pop
fruits.pop();
console.log("\n  B . pop ");
console.log(fruits);

// C. splice
fruits.splice(2, 1);
console.log("\n  C. splice ");
console.log(fruits);

// D. splice - hapus kecuali jeruk, mangga & banana
fruits.splice(2, 3);
console.log("\n  D. splice hapus");
console.log(fruits);

// E. splice - Tambahkan Rambutan dan bengkoang
fruits.splice(-1, 0, "Rambutan", "Bengkuang");
console.log("\n  E. splice tambahkan");
console.log(fruits);

// F. splice - replace banana => Nangka
fruits.splice(-1, 1, "Nangka");
console.log("\n F. splice Replace ");
console.log(fruits);

// G. Concat - Join  fruit & vegetables
let mixFood = fruits.concat(vegetables);
console.log("\n G. Concat ( hasil menyesuaikan array terbaru )");
console.log(mixFood);

// H. Reverse
mixFood.reverse();
console.log("\n H. Reverse ");
console.log(mixFood);

// I. Reverse (mengembalikan data)
mixFood.reverse();
console.log("\n I. Reverse (mengembalikan nilai");
console.log(mixFood);

// J. Penggunaan Fungsi baru (Switch )

const switchItem = (vege, itemFruit, itemVege) => {
  let arr = vege;
  let indexFruit = arr.indexOf(itemFruit);
  let indexVegetable = arr.indexOf(itemVege);

  if (indexFruit != -1 && indexVegetable != -1) {
    arr.splice(indexFruit, 1, itemVege);
    console.log("\n J. Fungsi Menukar data");
    arr.splice(indexVegetable, 1, itemFruit);
    console.log(arr);
  } else {
    console.log("Nilai Tidak Ada");
  }
};
switchItem(mixFood, "Tomat", "Jeruk");
switchItem(mixFood, "Bayam", "Bengkuang");
switchItem(mixFood, "Bayam", "brokoli"); // Data Tidak ada
