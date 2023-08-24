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

const tampilan = () => {
  let tmp = getItems();
  let huruf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let arr = huruf.split("");
  for (let i = 0; i < huruf.length; i++) {
    console.log(`----------- ${arr[i]}-----------`);
    for (let j = 0; j < filterProduct(arr[i], tmp).length; j++) {
      console.log(filterProduct(arr[i], tmp)[j]);
    }
  }
};
tampilan();

/**
Output :
----------- A-----------
Asus Laptop 5432
AK-47
----------- B-----------
Bluetooth Adapter
Backpack of Holding
----------- C-----------
Crosley Collegiate Portable USB Turntable Hoodie
----------- D-----------
Dual Heated Travel Mug
----------- E-----------
----------- F-----------
----------- G-----------
Game Box 5
----------- H-----------
----------- I-----------
Intel Processor 8 core
----------- J-----------
----------- K-----------
Karaoke Bazooka
----------- L-----------
LG Monitor
----------- M-----------
Mix For Youtuber
----------- N-----------
----------- O-----------
----------- P-----------
Panasonic Air Conditioner
PowerBank 24 Hours
----------- Q-----------
----------- R-----------
----------- S-----------
Solo Leveling Webtoon
Squirming Tentacle USB Fishquarium
Space Bar Keyboard Organizer & USB Hub Pop
----------- T-----------
----------- U-----------
Universal Gadget Charger USB
USB Pet Rock Powerstation 5
----------- V-----------
----------- W-----------
----------- X-----------
----------- Y-----------
----------- Z-----------
 */
