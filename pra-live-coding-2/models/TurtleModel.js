class Turtle {
  constructor(id, name, species, price, patterns) {
    this.id = id;
    this.name = name;
    this.species = species;
    this.price = price;
    this.patterns = patterns || [];
  }
}

class SnappingTurtle extends Turtle {}

class Tortoise extends Turtle {}

class Terrapins extends Turtle {}

module.exports = {
  Turtle,
  SnappingTurtle,
  Tortoise,
  Terrapins,
};
