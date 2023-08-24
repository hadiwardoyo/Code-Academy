const fs = require("fs");

const getItems = () => {
  let items = fs.readFileSync("./data34.csv", "utf8");
  items = items.split("\r\n");
  let tempItems = [];
  for (let i = 0; i < items.length; i++) {
    tempItems.push(items[i].split(""));
  }
  return tempItems;
};

const filterProduct = (s, produk) => {
  let hasil = [];
  for (let i = 0; i < produk.length; i++) {
    if (produk[i][0] == s) {
      //   hasil.push(produk[i]);
      hasil.push(produk[i].join(""));
    }
  }
  return hasil;
};
console.log(filterProduct("A", getItems()));
console.log(filterProduct("B", getItems()));
console.log(filterProduct("S", getItems()));

/**
Output :

[ 'Asus Laptop 5432', 'AK-47' ]
[ 'Bluetooth Adapter', 'Backpack of Holding' ]
[
  'Solo Leveling Webtoon',
  'Squirming Tentacle USB Fishquarium',
  'Space Bar Keyboard Organizer & USB Hub Pop'
]
 */
