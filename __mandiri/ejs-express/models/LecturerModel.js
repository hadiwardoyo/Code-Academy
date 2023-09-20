const fs = require("fs");
const { resolve } = require("path");

class LecturerModel {
  constructor(id, name, matkul, age, city) {
    this.id = id;
    this.name = name;
    this.matkul = matkul;
    this.age = age;
    this.city = city;
  }

  static getAllLecturer() {
    return new Promise((resolve, reject) => {
      fs.readFile("./lecturer.json", "utf8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          let lecturer = JSON.parse(data);
          lecturer.map((lecture) => {
            const { id, name, matkul, age, city } = lecture;
            return new LecturerModel(id, name, matkul, age, city);
          });
          resolve(lecturer);
        }
      });
    });
  }

  static information(id) {
    return new Promise((resolve, reject) => {
      this.getAllLecturer()
        .then((result) => {
          let lecturer = result;
          let findId = lecturer.filter((tmp) => tmp.id === id);
          if (findId.length !== 0) {
            resolve(findId[0]);
          } else {
            throw {
              message: `Lecturer with id: ${id} not found`,
            };
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

module.exports = LecturerModel;
