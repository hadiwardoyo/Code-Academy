const { Chocolate, Sweet, Strawberry } = require("./Cookie");

class Kitchen {
  constructor(container) {
    this.container = container || [];
  }

  bake(...cookies) {
    // let lastIndex = this.container.length - 1 || 0;
    // let tmp = this.container.id[lastIndex + 1] || null;

    switch (cookies[4]) {
      case "chocolate":
        this.container.push(new Chocolate(...cookies));
        break;
      case "sweet":
        this.container.push(new Sweet(...cookies));
        break;
      case "strawberry":
        this.container.push(new Strawberry(...cookies));
        break;
    }
  }

  eat(id) {
    this.container = this.container.filter((kue) => kue.id !== id);
    console.log("Eat Successfull");
  }

  addSugar(id) {
    this.container = this.container.map((kue) => {
      if (kue.id === id) {
        kue.isSweet = true;
      }
      return kue;
    });
  }

  showCookies() {
    console.log("List of Menu: ");
    this.container.forEach((element, index) => {
      console.log(
        ` ${index + 1} - ${element.name}, Price: ${element.price}, ${
          element.isSweet ? "mengandung gula" : "tidak mengandung gula"
        }`
      );
    });
  }

  showIngredients(id) {
    this.container.forEach((element) => {
      if (element.id === id) {
        console.log(`\ningredient of  ${element.name}`);
        element.ingredients.forEach((element, index) => {
          console.log(`${index + 1}. ${element}`);
        });
      }
    });
  }
  addIngredients(id, ingredientsName) {
    let tmp = ingredientsName.split(", ");
    this.container.forEach((element) => {
      if (element.id === id) {
        element.ingredients = element.ingredients.concat(tmp);
        console.log("Add Ingredients Successfull");
        this.showIngredients(element.id);
      }
    });
  }

  categoriesCookiesByIngredient(ingredientName) {
    console.log(`\nIngredients Cookie  by ${ingredientName}`);
    let list = this.container.filter((incredient) =>
      incredient.ingredients.includes(ingredientName)
    );
    if (list.length == 0) {
      console.log(`\nIngredients ${ingredientName} not found`);
    } else {
      list.forEach((element, index) => {
        console.log(` ${index + 1} - ${element.name}`);
      });
    }
  }

  sortCookies(type) {
    let tmp = [];
    switch (type) {
      case "asc":
        tmp = this.container.sort((a, b) => a.price - b.price);
        tmp.forEach((element, index) => {
          console.log(
            ` ${index + 1} -  ${element.name} Price: ${element.price}`
          );
        });
        break;
      case "desc":
        tmp = this.container.sort((a, b) => b.price - a.price);
        tmp.forEach((element, index) => {
          console.log(
            ` ${index + 1} -  ${element.name} Price: ${element.price}`
          );
        });
        break;
      default:
        console.log("input wrong");
    }
  }

  categoriesCookies() {
    let arr = ["chocolate", "sweet", "strawberry"];
    arr.forEach((category) => {
      let tmp = 1;
      console.log(`\nCategories of ${category}`);
      this.container.forEach((category2, index) => {
        if (category == category2.type) {
          console.log(`${tmp}. ${category2.name}`);
          tmp++;
        }
      });
    });
  }
}

module.exports = Kitchen;
