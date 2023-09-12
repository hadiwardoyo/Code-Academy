class Art {
  constructor(id, name, price, artist, type) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.type = type;
    this.artist = artist;
  }
}

class Sculpture extends Art {
  constructor(id, name, price, artist) {
    super(id, name, price, artist);
    this.type = "sculpture";
  }
}

class Painting extends Art {
  constructor(id, name, price, artist) {
    super(id, name, price, artist);
    this.type = "painting";
  }
}

class Carving extends Art {
  constructor(id, name, price, artist) {
    super(id, name, price, artist);
    this.type = "carving";
  }
}

module.exports = {
  Sculpture,
  Painting,
  Carving,
};
