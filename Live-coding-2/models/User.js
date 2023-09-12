class User {
  constructor(id, username, password, loggedIn, role) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.role = role;
    this.loggedIn = loggedIn;
  }
}

class Admin extends User {
  constructor(id, username, password, loggedIn) {
    super(id, username, password, loggedIn);
    this.role = "admin";
  }
}

class Sculpter extends User {
  constructor(id, username, password, loggedIn) {
    super(id, username, password, loggedIn);
    this.role = "sculpter";
  }
}

class Painter extends User {
  constructor(id, username, password, loggedIn) {
    super(id, username, password, loggedIn);
    this.role = "painter";
  }
}

class Carver extends User {
  constructor(id, username, password, loggedIn) {
    super(id, username, password, loggedIn);
    this.role = "carver";
  }
}

module.exports = {
  Admin,
  Sculpter,
  Painter,
  Carver,
};
