const { SuperAdmin, Artwork } = require("../models/SuperAdmin");
const Views = require("../views/Views");

class Controller {
  static getStatus() {
    return SuperAdmin.getStatus();
  }
  static message(msg) {
    Views.message(msg);
  }

  static help(params) {
    Views.help(params);
  }
  static login(params) {
    SuperAdmin.login(params);
  }
  static logout(params) {
    SuperAdmin.logout(params);
  }
  static changePwd(data, params) {
    let tmp = SuperAdmin.changePwd(data, params);
    this.message(tmp);
  }
  static show(params) {
    let { username, role } = params[0];
    let data = [];

    if (role === "admin") {
      data = SuperAdmin.getUser();
    } else if (params.length === 0) {
      Views.message("input salah");
    } else {
      data = Artwork.getArt();
    }

    Views.show(data, role, username);
  }

  static deleteUser(params) {
    let tmp = SuperAdmin.deleteUser(params[0]);
    this.message(tmp);
  }
  static deleteArt(status, params) {
    let { username } = status[0];
    let tmp = Artwork.deleteArt(username, params[0]);
    this.message(tmp);
  }
  static update(params) {
    let tmp = SuperAdmin.update(params);
    this.message(tmp);
  }
  static edit(data, params) {
    let tmp = Artwork.edit(data[0], params);
    this.message(tmp);
  }

  static add(params) {
    let tmp = SuperAdmin.add(params);
    this.message(tmp);
  }

  static create(data, params) {
    let tmp = Artwork.create(data[0], params);
    this.message(tmp);
  }
}

module.exports = Controller;
