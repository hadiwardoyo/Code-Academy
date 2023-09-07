class Cookie {
  constructor(id, name, price, ingredients, type) {
    let tmp = ingredients.split(", ");
    this.id = id;
    this.name = name;
    this.price = price;
    this.ingredients = tmp || [];
    this.type = type;
  }
}

class Chocolate extends Cookie {
  constructor(id, name, price, ingredients, type, isSweet) {
    super(id, name, price, ingredients, type);
    this.isSweet = isSweet || false;
  }
}

class Sweet extends Cookie {
  constructor(id, name, price, ingredients, type, isSweet) {
    super(id, name, price, ingredients, type);
    this.isSweet = isSweet || false;
  }
}

class Strawberry extends Cookie {
  constructor(id, name, price, ingredients, type, isSweet) {
    super(id, name, price, ingredients, type);
    this.isSweet = isSweet || false;
  }
}

module.exports = {
  Cookie,
  Chocolate,
  Sweet,
  Strawberry,
};
