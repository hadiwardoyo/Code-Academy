const { Admin, Sculpter, Painter, Carver } = require("./User");
const { Sculpture, Painting, Carving } = require("./Art");

const fs = require("fs");

class SuperAdmin {
  static saveUser(data) {
    fs.writeFileSync("./users.json", JSON.stringify(data, null, 3));
  }
  static getUser() {
    let data = JSON.parse(fs.readFileSync("./users.json", "utf8"));

    data = data.map((user) => {
      let { id, username, password, role, loggedIn } = user;
      if (role === "admin") {
        return new Admin(id, username, password, loggedIn);
      } else if (role === "sculpter") {
        return new Sculpter(id, username, password, loggedIn);
      } else if (role === "painter") {
        return new Painter(id, username, password, loggedIn);
      } else if (role === "carver") {
        return new Carver(id, username, password, loggedIn);
      }
    });
    return data;
  }
  static getStatus() {
    let data = this.getUser();
    data = data.filter((x) => x.loggedIn === true);
    return data;
  }
  static login(params) {
    let data = this.getUser();
    let usernameNew = params[0];
    let passwordNew = +params[1];

    data = data.map((x) => {
      let { id, username, password, role, loggedIn } = x;
      x.id = id;
      x.username = username;
      x.password = password;
      x.role = role;
      if (x.username === usernameNew && x.password === passwordNew) {
        x.loggedIn = true;
      }
      return x;
    });
    this.saveUser(data);
  }
  static logout(params) {
    let data = this.getUser();
    let usernameNew = params[0].username;
    let passwordNew = params[0].password;

    data = data.map((x) => {
      let { id, username, password, role, loggedIn } = x;
      x.id = id;
      x.username = username;
      x.password = password;
      x.role = role;
      if (x.username === usernameNew && x.password === passwordNew) {
        x.loggedIn = false;
      }
      return x;
    });
    this.saveUser(data);
  }
  static changePwd(arr, params) {
    let data = this.getUser();
    let id2 = arr[0].id;
    let newPwd = +params[0];

    data = data.map((element) => {
      let { id, username, password, role, loggedIn } = element;
      if (element.id === id2) {
        element.id = id;
        element.username = username;
        element.password = newPwd;
        element.role = role;
        element.loggedIn = loggedIn;
      } else {
        element.id = id;
        element.username = username;
        element.password = password;
        element.role = role;
        element.loggedIn = loggedIn;
      }
      return element;
    });
    this.saveUser(data);
    return "Password has been change";
  }
  static deleteUser(params) {
    let data = this.getUser();
    let idNew = +params[0];
    let tmp = data.find((x) => x.id === idNew);
    if (tmp === undefined) {
      return "Id tidak ditemukan";
    } else {
      data = data.filter((user) => user.id !== idNew);
      this.saveUser(data);
      return "data user berhasil di hapus";
    }
  }
  static update(params) {
    let data = this.getUser();
    let id2 = +params[0];
    let newUser = params[1];

    data = data.map((element) => {
      let { id, username, password, role, loggedIn } = element;
      if (element.id === id2) {
        element.id = id;
        element.username = newUser;
        element.password = password;
        element.role = role;
        element.loggedIn = loggedIn;
      } else {
        element.id = id;
        element.username = username;
        element.password = password;
        element.role = role;
        element.loggedIn = loggedIn;
      }
      return element;
    });
    console.log(data);
    this.saveUser(data);
    return "Password has been change";
  }
  static add(params) {
    let data = this.getUser();
    let idNew = data[data.length - 1].id + 1;
    let newUsername = params[1];
    let newRole = params[0];

    let tmp = data.find((x) => x.username === newUsername);
    if (tmp !== undefined) {
      return "Username sudh ada, silahkan gunakan username lainnya";
    } else {
      if (newRole.toLowerCase() === "admin") {
        data.push(new Admin(idNew, newUsername, 12345, false));
      } else if (newRole.toLowerCase() === "sculpter") {
        data.push(new Sculpter(idNew, newUsername, 12345, false));
      } else if (newRole.toLowerCase() === "painter") {
        data.push(new Painter(idNew, newUsername, 12345, false));
      } else if (newRole.toLowerCase() === "carver") {
        data.push(new Carver(idNew, newUsername, 12345, false));
      }
    }
    this.saveUser(data);
    return `"${newUsername}" has been created`;
  }
}

class Artwork {
  static saveArt(data) {
    fs.writeFileSync("./artworks.json", JSON.stringify(data, null, 3));
  }
  static getArt() {
    let data = JSON.parse(fs.readFileSync("./artworks.json", "utf8"));

    data = data.map((art) => {
      let { id, name, price, type, artist } = art;
      if (type === "sculpture") {
        return new Sculpture(id, name, price, artist);
      } else if (type === "painting") {
        return new Painting(id, name, price, artist);
      } else if (type === "carving") {
        return new Carving(id, name, price, artist);
      }
    });

    return data;
  }
  static logout(params) {
    SuperAdmin.logout(params);
  }
  static deleteArt(name, params) {
    let data = this.getArt();
    let idNew = +params[0];
    let arr2 = data.filter((art) => art.artist === name);
    let tmp = arr2.find((x) => x.id === idNew);

    if (tmp === undefined) {
      return "Id tidak ditemukan / id bukan milik anda";
    } else {
      data = data.filter((user) => user.id !== idNew);
      this.saveArt(data);
      return "data user berhasil di hapus";
    }
  }
  static edit(arr, params) {
    let data = this.getArt();
    let id2 = +params[0];
    let newName = params[1];
    let newPrice = +params[2];

    let arr2 = data.filter((art) => art.artist === arr.username);
    let tmp = arr2.find((x) => x.id === id2);

    if (tmp === undefined) {
      return "Id tidak ditemukan / id bukan milik anda";
    } else {
      data = data.map((element) => {
        let { id, name, price, type, artist } = element;
        if (element.id === id2) {
          element.id = id;
          element.name = newName;
          element.price = newPrice;
          element.type = type;
          element.artist = artist;
        } else {
          element.id = id;
          element.name = name;
          element.price = price;
          element.type = type;
          element.artist = artist;
        }
        return element;
      });
    }

    console.log(data);
    this.saveArt(data);
    return "data has been changed";
  }
  static create(arr, params) {
    let data = this.getArt();
    let typebaru = arr.role;
    let artist = arr.username;
    let id = data[data.length - 1].id + 1;
    let name = params[0];
    let price = params[1];

    let arr2 = data.filter((art) => art.artist === artist);
    let tmp = arr2.find((x) => x.name.toLowerCase() === name.toLowerCase());

    if (tmp !== undefined) {
      return `"${name}" sudah ada, silahkan gunakan nama lain`;
    } else {
      if (typebaru.toLowerCase() === "sculpter") {
        data.push(new Sculpture(id, name, price, artist));
      } else if (typebaru.toLowerCase() === "painter") {
        data.push(new Painting(id, name, price, artist));
      } else if (typebaru.toLowerCase() === "carver") {
        data.push(new Carving(id, name, price, artist));
      }
    }
    this.saveArt(data);
    console.log(data);
    return `${params[0]} has been created`;
  }
  /**
   * dikarenakan beberapa method yang sama dengan superadmin, maka saya tidak membuatnya dengan yg baru
   */
}

module.exports = {
  SuperAdmin,
  Artwork,
};
