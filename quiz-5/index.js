let fs = require("fs");

let data = fs.readFileSync("tracks.json", "utf8");
data = JSON.parse(data);
// console.log(data.expense);

const getTracks = () => {
  for (let key in data) {
    console.log(key + " :");
    for (let value in data[key]) {
      for (let i = 0; i < data[key][value].length; i++) {
        console.log(
          `${data[key][value][i].id}. ${
            data[key][value][i].name
          } : ${rupiahFormatter(data[key][value][i].subtotal)} `
        );
      }
    }
  }
  console.log("\n =============================");
  return data;
};

const rupiahFormatter = (angka) => {
  if (angka === undefined) {
    return "inputkan angka";
  } else {
    return angka.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  }
};

const addTrack = (type, name, price) => {
  type.toLowerCase();
  let tmp = 0;
  switch (type) {
    case "expense":
      tmp = data.expense.total + price;
      data.expense.total = tmp;
      data.expense.lists.push({
        id: data.expense.lists.length + 1,
        name: name,
        subtotal: price,
      });
      // console.log(data.expense.lists);
      // console.log(data.expense.total);
      break;
    case "income":
      tmp = data.income.total + price;
      data.income.total = tmp;
      data.income.lists.push({
        id: data.income.lists.length + 1,
        name: name,
        subtotal: price,
      });
      // console.log(data.income.lists);
      // console.log(data.income.total);
      break;
    default:
      console.log("Input the right track!!");
  }
};

const deleteTrack = (type, id) => {
  let tmp = 1;
  let arr = [];
  if (type === "income") {
    for (let i = 0; i < data.income.lists.length; i++) {
      if (data.income.lists[i].id != id) {
        data.income.lists[i].id = tmp;
        arr.push(data.income.lists[i]);
        tmp++;
      }
    }
  } else {
    for (let i = 0; i < data.expense.lists.length; i++) {
      if (data.expense.lists[i].id != id) {
        data.expense.lists[i].id = tmp;
        arr.push(data.expense.lists[i]);
        tmp++;
      }
    }
  }
  data.income.lists = arr;
};

const statusTrack = () => {
  if (data.expense.total > data.income.total) {
    console.log("kurangi Pengeluaran Anda");
  } else {
    console.log("Keuangan anda aman");
  }
};
getTracks();
deleteTrack("income", 1);

getTracks();

addTrack("expense", "bayar bootcamp sebelah", 3000000);
addTrack("income", "mengikuti bootcamp", 4000000);

getTracks();
statusTrack();
