const fs = require("fs");

class employeeModel {
  constructor(id, name, job, age, city) {
    this.id = id;
    this.name = name;
    this.job = job;
    this.age = age;
    this.city = city;
  }

  static getEmployee() {
    return new Promise((resolve, reject) => {
      fs.readFile("./json/employees.json", "utf8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          let employees = JSON.parse(data);
          employees.map((employee) => {
            const { id, name, job, age, city } = employees;
            return new employeeModel(id, name, job, age, city);
          });
          resolve(employees);
        }
      });
    });
  }

  static addEmployee(params) {
    return new Promise((resolve, reject) => {
      this.getEmployee()
        .then((result) => {
          let employees = result;
          let idNew = employees[employees.length - 1].id + 1;
          let { name, job, age, city } = params;
          age = Number(age);
          if (isNaN(age)) {
            throw {
              message: "Age must be Number",
            };
          } else {
            let employeeNew = new employeeModel(
              idNew,
              name.toLowerCase(),
              job.toLowerCase(),
              age,
              city.toLowerCase()
            );
            employees.push(employeeNew);
            this.save(employees);
            console.log(employees);
            resolve(employeeNew);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static getId(id) {
    return new Promise((resolve, reject) => {
      this.getEmployee()
        .then((result) => {
          let employees = result;
          let findId = employees.filter((employee) => employee.id === id);
          if (findId.length > 0) {
            resolve(findId[0]);
          } else {
            throw {
              message: `Employee with id ${id} not found`,
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
      this.getEmployee()
        .then((result) => {
          let employees = result;
          let findId = employees.filter((employee) => employee.id === id);
          employees = employees.filter((employee) => employee.id !== id);
          this.save(employees);
          if (findId.length > 0) {
            resolve(`"${findId[0].name}" has been deleted`);
          } else {
            throw {
              message: `Employee with id ${id} not found`,
            };
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static editEmployee(idNew, params) {
    let tmp = 0;
    return new Promise((resolve, reject) => {
      this.getEmployee()
        .then((result) => {
          let employees = result;
          let { name, job, age, city } = params;
          age = Number(age);
          console.log(age);
          if (isNaN(age)) {
            throw {
              message: "Age must be Number",
            };
          } else {
            employees = employees.map((employee) => {
              if (employee.id === idNew) {
                tmp++;
                employee.name = name.toLowerCase();
                employee.job = job.toLowerCase();
                employee.age = age;
                employee.city = city.toLowerCase();
              }
              return employee;
            });

            if (tmp > 0) {
              this.save(employees);
              resolve(employees);
              console.log(employees);
            } else {
              throw {
                message: `Employee with id ${idNew} not found`,
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
    fs.writeFileSync("./json/employees.json", JSON.stringify(data, null, 3));
  }
}
module.exports = employeeModel;
