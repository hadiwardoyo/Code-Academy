/**
 * Weapon Scavenging
 *
 * Array 2 dimensi yang diberikan merupakan asumsi jumlah daerah yang ada
 *
 * Officer Rick mencari senjata - senjata yang dia dapat dari daerah yang dia lewati dan bertujuan untuk mendapatkan sebanyak mungkin dari total energi yang dia milik.
 *
 * Senjata yang di cari berupa kode seperti berikut :
 * R : Revolver
 * H : Handgun
 * S : Shotgun
 * Jika dia menemukan jenis lain atau barang lain maka di abaikan.
 *
 * Contoh :
 * [
 *      ["#","#","S","#","H","#","R"],
 *      ["X","#","#","A","R","H","S"],
 *      ["R","#","K","#","?","S","H"]
 * ]
 *
 * Test Case I
 * Energi : 21
 * Result :
 * [
 *      ["Revolver",3], ["Handgun",3], ["Shotgun",3]
 * ]
 *
 * Test Case II
 * Energi : 7
 * Result :
 * [
 *      ["Revolver",1], ["Handgun",1], ["Shotgun",1]
 * ]
 *
 * RULES : Tidak boleh menggunakan built in function!!
 * Kecuali: .push()
 */

const searchWeapons = (map, energy) => {
  let tmp = [
    ["Revolver", 0],
    ["Handgun", 0],
    ["Shotgun", 0],
  ];
  if (energy === undefined) {
    return "anda tidak memiliki energi";
  }

  for (let j = 0; j < map.length && energy > 0; j++) {
    for (let k = 0; k < map[j].length && energy > 0; k++, energy--) {
      if (map[j][k] === "R") {
        tmp[0][1]++;
      } else if (map[j][k] === "H") {
        tmp[1][1]++;
      } else if (map[j][k] === "S") {
        tmp[2][1]++;
      }
    }
  }
  if (energy > 0) {
    return `${tmp}   => , dan kamu masih memiliki ${energy} energy`;
  } else {
    return `${tmp}`;
  }
};

// Test
console.log(
  searchWeapons(
    [
      ["R", "H", "#", "#", "S"],
      ["#", "#", "R", "S", "#"],
      [" ", " ", "R", "H", "S"],
    ],
    10
  )
);
// [['Revolver',2],['Handgun',1], ['Shotgun,2]]

console.log(searchWeapons([["#", "S", "#"]]));
// You don't have energy

console.log(
  searchWeapons(
    [
      ["#", "#", "#", "#", "?"],
      ["#", " ", "@"],
      ["R", "H", "S", "?", " ", "A", "B"],
    ],
    19
  )
);
// [["Revolver",1], ['Handgun',1], ['Shotgun',1]]

/**
 * Output :
Revolver,2,Handgun,1,Shotgun,2
anda tidak memiliki energi
Revolver,1,Handgun,1,Shotgun,1   => , dan kamu masih memiliki 4 energy
 */
