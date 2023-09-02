const Kitchen = require("./Kitchen");

const dapur = new Kitchen();

// const kue2 = new Kitchen(1, "nastar", 25000, "", "", true);
dapur.bake(1, "nastar", 25000, "chocolate white", "chocolate");
dapur.bake(2, "Brownies", 17000, "chocolate blue, salt", "chocolate");
dapur.bake(3, "red valvet", 10000, "common strawberry, salt", "strawberry");
dapur.bake(
  4,
  "Berry Cake",
  21000,
  "strawberry a5, butter, salt, sugar",
  "strawberry",
  true
);
dapur.bake(
  4,
  "Sweet Butter cheese",
  31000,
  "cheese, butter, baking powder",
  "sweet"
);
// dapur.eat(2);
dapur.addSugar(1);

dapur.showCookies();
console.log("\n===========================\n");

// dapur.showIngredients(1);

// dapur.addIngredients(1, "butter, baking soda")

// dapur.categoriesCookiesByIngredient("butter");

// dapur.sortCookies("desc");

dapur.categoriesCookies();

console.log("\n===========================");
console.log(dapur.container);
