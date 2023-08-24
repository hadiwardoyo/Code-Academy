let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const cekSembilan = (number) => {
  let items = number;
  let tmp = [[], [], [], [], [], [], [], []];

  let x = 0;

  for (let i = 0; i < items.length - 1; i++) {
    for (let j = 1; j < items.length; j++) {
      if (items[i] + items[j] == 17) {
        tmp[x].push(items[i], items[j]);
        x++;
      }
    }
  }
  return tmp;
};
console.log(cekSembilan(numbers));

/**
 *Output :
 [
  [ 6, 11 ], [ 7, 10 ],
  [ 8, 9 ],  [ 9, 8 ],
  [ 10, 7 ], [],
  [],        []
]
 */
