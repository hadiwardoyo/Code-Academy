const fs = require("fs");

class employerModel {
  constructor(id, name, type, total_employee, city) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.total_employee = total_employee;
    this.city = city;
  }

  static getEmployer() {
    return new Promise((resolve, reject) => {
      fs.readFile("./json/employers.json", "utf8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          let employers = JSON.parse(data);
          employers.map((employer) => {
            const { id, name, type, total_employee, city } = employer;
            return new employerModel(id, name, type, total_employee, city);
          });
          resolve(employers);
        }
      });
    });
  }

  static addEmployer(params) {
    return new Promise((resolve, reject) => {
      this.getEmployer()
        .then((result) => {
          let employers = result;
          let idNew = employers[employers.length - 1].id + 1;
          let { name, type, total_employee, city } = params;
          total_employee = Number(total_employee);

          if (isNaN(total_employee)) {
            throw {
              message: "-total employee- must be Number",
            };
          } else {
            let employerNew = new employerModel(
              idNew,
              name.toLowerCase(),
              type.toLowerCase(),
              total_employee,
              city.toLowerCase()
            );
            employers.push(employerNew);
            this.save(employers);
            resolve(employerNew);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static getId(id) {
    return new Promise((resolve, reject) => {
      this.getEmployer()
        .then((result) => {
          let employers = result;
          let findId = employers.filter((employer) => employer.id === id);
          if (findId.length > 0) {
            resolve(findId[0]);
          } else {
            throw {
              message: `employer with id ${id} not found`,
            };
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      this.getEmployer()
        .then((result) => {
          let employers = result;
          let findId = employers.filter((employer) => employer.id === id);
          employers = employers.filter((employer) => employer.id !== id);
          this.save(employers);
          if (findId.length > 0) {
            resolve(`"${findId[0].name}" has been deleted`);
          } else {
            throw {
              message: `employer with id ${id} not found`,
            };
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static editEmployer(idNew, params) {
    let tmp = 0;
    return new Promise((resolve, reject) => {
      this.getEmployer()
        .then((result) => {
          let employers = result;
          let { name, type, total_employee, city } = params;
          total_employee = Number(total_employee);
          if (isNaN(total_employee)) {
            throw {
              message: "total epmployee must be Number",
            };
          } else {
            employers = employers.map((employer) => {
              if (employer.id === idNew) {
                tmp++;
                employer.name = name.toLowerCase();
                employer.type = type.toLowerCase();
                employer.total_employee = total_employee;
                employer.city = city.toLowerCase();
              }
              return employer;
            });

            if (tmp > 0) {
              this.save(employers);
              resolve(employers);
              console.log(employers);
            } else {
              throw {
                message: `Employer with id ${idNew} not found`,
              };
            }
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static save(data) {
    fs.writeFileSync("./json/employers.json", JSON.stringify(data, null, 3));
  }
}
module.exports = employerModel;
