const fs = require("fs");

class StudentModel {
  constructor(id, name, major, semester, city) {
    this.id = id;
    this.name = name;
    this.major = major;
    this.semester = semester;
    this.city = city;
  }

  static getAllStudent() {
    return new Promise((resolve, reject) => {
      fs.readFile("./student.json", "utf8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          let students = JSON.parse(data);
          students.map((student) => {
            const { id, name, major, semester, city } = student;
            return new StudentModel(id, name, major, semester, city);
          });
          resolve(students);
        }
      });
    });
  }

  static create(params) {
    return new Promise((resolve, reject) => {
      this.getAllStudent()
        .then((result) => {
          let students = result;
          let idNew = students[students.length - 1].id + 1;

          const { name, major, semester, city } = params;

          let studentNew = new StudentModel(
            idNew,
            name.toLowerCase(),
            major.toLowerCase(),
            semester,
            city.toLowerCase()
          );
          students.push(studentNew);
          this.save(students);
          resolve(studentNew);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      this.getAllStudent()
        .then((result) => {
          let students = result;
          let findId = students.filter((student) => student.id === id);
          students = students.filter((student) => student.id !== id);
          this.save(students);
          if (findId.length > 0) {
            resolve(`"${findId[0].name}" has been deleted`);
          } else {
            throw {
              message: `Student with id ${id} not found`,
            };
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static update(idNew, params) {
    let tmp = 0;
    return new Promise((resolve, reject) => {
      this.getAllStudent()
        .then((result) => {
          let students = result;
          const { name, major, semester, city } = params;
          students = students.map((student) => {
            if (student.id === idNew) {
              tmp++;
              student.name = name.toLowerCase();
              student.major = major.toLowerCase();
              student.semester = semester;
              student.city = city.toLowerCase();
            }
            return student;
          });
          if (tmp > 0) {
            this.save(students);
            resolve(`data id: ${idNew} has been updated`);
          } else {
            throw {
              message: `Student with id ${idNew} not found`,
            };
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static information(id) {
    return new Promise((resolve, reject) => {
      this.getAllStudent()
        .then((result) => {
          let students = result;
          let findId = students.filter((student) => student.id === id);
          if (findId.length > 0) {
            resolve(findId[0]);
          } else {
            throw {
              message: `Student with id ${id} not found`,
            };
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static search(searchQuery) {
    return new Promise((resolve, reject) => {
      this.getAllStudent()
        .then((result) => {
          let students = result;
          const { name } = searchQuery;
          let findData = students.filter(
            (student) => student.name.toLowerCase() === name.toLowerCase()
          );
          resolve(findData);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static save(students) {
    fs.writeFileSync("./student.json", JSON.stringify(students, null, 3));
  }
}

module.exports = StudentModel;
