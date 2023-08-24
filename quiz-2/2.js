const fs = require("fs");

const getItems = () => {
  let items = fs.readFileSync("./data2.csv", "utf8");
  items = items.split("\r\n");
  items = items.join(" ");
  items = items.split(" ");
  return items;
};
console.log(getItems());

/**
Outputs :
[
  'LG',        'Monitor',   'Asus',        'Laptop',
  '5432',      'Mix',       'For',         'Youtuber',
  'Bluetooth', 'Adapter',   'Solo',        'Leveling',
  'Webtoon',   'Panasoni',  'Air',         'Conditioner',
  'Karaoke',   'Bazooka',   'PowerBank',   '24',
  'Hours',     'Backpack',  'of',          'Holding',
  'Game',      'Box',       '5',           'Universal',
  'Gadget',    'Charger',   'USB',         'Squirming',
  'Tentacle',  'USB',       'Fishquarium', 'Intel',
  'Processor', '8',         'core',        '',
  'Space',     'Bar',       'Keyboard',    'Organizer',
  '&',         'USB',       'Hub',         'Pop',
  'USB',       'Pet',       'Rock',        'Powerstation',
  '5',         'Dual',      'Heated',      'Travel',
  'Mug',       'Crosley',   'Collegiate',  'Portable',
  'USB',       'Turntable', 'Hoodie',      'AK-47'
]
 */
