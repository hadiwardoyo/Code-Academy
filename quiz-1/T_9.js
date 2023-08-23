const randomPosition = function (k) {
  let hasil = [];
  for (let i = 100; i < 900; i++) {
    if (i % 10 == k) {
      hasil.push(i);
    } else if (Math.floor(i / 10) % 10 == k) {
      hasil.push(i);
    } else if (Math.floor(i / 100) % 10 == k) {
      hasil.push(i);
    } else {
    }
  }
  return hasil;
};

console.log(randomPosition(6)); //mencari 100-900 yang mengandung angka 6

// [
//     106, 116, 126, 136, 146, 156, 160, 161, 162, 163, 164, 165,
//     166, 167, 168, 169, 176, 186, 196, 206, 216, 226, 236, 246,
//     256, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 276,
//     286, 296, 306, 316, 326, 336, 346, 356, 360, 361, 362, 363,
//     364, 365, 366, 367, 368, 369, 376, 386, 396, 406, 416, 426,
//     436, 446, 456, 460, 461, 462, 463, 464, 465, 466, 467, 468,
//     469, 476, 486, 496, 506, 516, 526, 536, 546, 556, 560, 561,
//     562, 563, 564, 565, 566, 567, 568, 569, 576, 586, 596, 600,
//     601, 602, 603, 604,
//     ... 133 more items
//   ]
