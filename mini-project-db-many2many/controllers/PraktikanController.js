const { praktikan, mataPraktikum, mataKuliah, jurusan } = require("../models");

class PraktikanController {
  static async getPraktikan(req, res) {
    try {
      let praktikans = await praktikan.findAll({
        order: [["id", "asc"]],
      });
      res.json(praktikans);
    } catch (err) {
      res.json(err);
    }
  }
  static async view(req, res) {
    try {
      let praktikans = await praktikan.findAll({
        order: [["id", "asc"]],
      });

      res.render("praktikan/index.ejs", { praktikan: praktikans });
    } catch (err) {
      res.json(err);
    }
  }

  static async addPage(req, res) {
    try {
      let jurusans = await jurusan.findAll({
        order: [["id", "asc"]],
      });
      res.render("praktikan/addPage.ejs", { jurusan: jurusans });
    } catch (err) {
      res.json(err);
    }
  }
  static async add(req, res) {
    try {
      const { nim, nama, jurusan, fakultas, tahun_masuk } = req.body;
      let results = await praktikan.create({
        nim,
        nama,
        jurusan,
        fakultas,
        tahun_masuk,
      });
      res.redirect("/praktikan");
    } catch (err) {
      res.json(err);
    }
  }
  static async delete(req, res) {
    try {
      let id = req.params.id;

      let praktikans = await praktikan.destroy({
        where: {
          id,
        },
      });

      praktikans === 1
        ? res.redirect("/praktikan")
        : res.json(`${id} not found`);
    } catch (err) {
      res.json(err);
    }
  }

  static async updatePage(req, res) {
    try {
      const id = +req.params.id;
      let jurusans = await jurusan.findAll({
        order: [["id", "asc"]],
      });
      let praktikans = await praktikan.findByPk(id);
      res.render("praktikan/editPage.ejs", {
        jurusan: jurusans,
        praktikan: praktikans,
      });
    } catch (err) {
      res.json(err);
    }
  }

  static async update(req, res) {
    try {
      let id = req.params.id;
      const { nim, nama, jurusan, fakultas, tahun_masuk, status } = req.body;
      let results = await praktikan.update(
        {
          nim,
          nama,
          jurusan,
          fakultas,
          tahun_masuk,
          status,
        },
        { where: { id } }
      );
      results[0] === 1
        ? res.redirect("/praktikan")
        : res.json({
            message: `praktikan id: ${id} does not exist`,
          });
    } catch (err) {
      res.json(err);
    }
  }
  static async viewMatkul(req, res) {
    try {
      let id = +req.params.id;
      let result = await mataPraktikum.findAll({
        where: { praktikan_id: id },
        include: [praktikan, mataKuliah],
      });
      let praktikans = await praktikan.findByPk(id);
      if (result.length !== 0) {
        let matkuls = result.map((el) => {
          return el.mataKuliah.dataValues || {};
        });
        let kelas = result.map((el) => {
          return el.dataValues.kelas;
        });

        let resultMatapraktikum = {
          kelas,
          ...result[0].praktikan.dataValues,
          matkuls,
        };

        res.render("praktikan/detail.ejs", {
          result: resultMatapraktikum,
          praktikans,
        });
      } else {
        let resultMatapraktikum = {
          matkuls: [],
        };
        res.render("praktikan/detail.ejs", {
          result: resultMatapraktikum,
          praktikans,
        });
      }
    } catch (err) {
      res.json({
        err: err.message,
        message: "id tidak dapat ditemukan",
      });
    }
  }
}

module.exports = PraktikanController;
