const fs = require("fs");

class jobModel {
  constructor(id, name, category, max_salary, min_salary) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.max_salary = max_salary;
    this.min_salary = min_salary;
  }

  static getJob() {
    return new Promise((resolve, reject) => {
      fs.readFile("./json/jobs.json", "utf8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          let jobs = JSON.parse(data);
          jobs.map((jobs) => {
            const { id, name, category, max_salary, min_salary } = jobs;
            return new jobModel(id, name, category, max_salary, min_salary);
          });
          resolve(jobs);
        }
      });
    });
  }

  static addJob(params) {
    return new Promise((resolve, reject) => {
      this.getJob()
        .then((result) => {
          let jobs = result;
          let idNew = jobs[jobs.length - 1].id + 1;
          let { name, category, max_salary, min_salary } = params;
          max_salary = Number(max_salary);
          min_salary = Number(min_salary);

          if (isNaN(max_salary) || isNaN(min_salary)) {
            throw {
              message: "Salary must be Number",
            };
          } else {
            let jobNew = new jobModel(
              idNew,
              name.toLowerCase(),
              category.toLowerCase(),
              max_salary,
              min_salary
            );
            jobs.push(jobNew);
            this.save(jobs);
            resolve(jobNew);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static getId(id) {
    return new Promise((resolve, reject) => {
      this.getJob()
        .then((result) => {
          let jobs = result;
          let findId = jobs.filter((job) => job.id === id);
          if (findId.length > 0) {
            resolve(findId[0]);
          } else {
            throw {
              message: `job with id ${id} not found`,
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
      this.getJob()
        .then((result) => {
          let jobs = result;
          let findId = jobs.filter((job) => job.id === id);
          jobs = jobs.filter((job) => job.id !== id);
          this.save(jobs);
          if (findId.length > 0) {
            resolve(`"${findId[0].name}" has been deleted`);
          } else {
            throw {
              message: `job with id ${id} not found`,
            };
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static editJob(idNew, params) {
    let tmp = 0;
    return new Promise((resolve, reject) => {
      this.getJob()
        .then((result) => {
          let jobs = result;
          let { name, category, max_salary, min_salary } = params;
          max_salary = Number(max_salary);
          min_salary = Number(min_salary);
          if (isNaN(max_salary) || isNaN(min_salary)) {
            throw {
              message: "salary must be Number",
            };
          } else {
            jobs = jobs.map((job) => {
              if (job.id === idNew) {
                tmp++;
                job.name = name.toLowerCase();
                job.category = category.toLowerCase();
                job.max_salary = max_salary;
                job.min_salary = min_salary;
              }
              return job;
            });

            if (tmp > 0) {
              this.save(jobs);
              resolve(jobs);
              console.log(jobs);
            } else {
              throw {
                message: `Jobs with id ${idNew} not found`,
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
    fs.writeFileSync("./json/jobs.json", JSON.stringify(data, null, 3));
  }
}
module.exports = jobModel;
