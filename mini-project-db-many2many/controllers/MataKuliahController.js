const { mataKuliah, jurusan } = require("../models");

class MataKuliahController {
  static async getMatkul(req, res) {
    try {
      let matkuls = await mataKuliah.findAll({
        order: [["id", "asc"]],
      });
      res.json(matkuls);
    } catch (err) {
      res.json(err);
    }
  }

  static async view(req, res) {
    try {
      let matkuls = await mataKuliah.findAll({
        order: [["id", "asc"]],
      });
      res.render("mataKuliah/index.ejs", { mataKuliah: matkuls });
    } catch (err) {
      res.json(err);
    }
  }

  static async addPage(req, res) {
    try {
      let jurusans = await jurusan.findAll({
        order: [["id", "asc"]],
      });
      res.render("mataKuliah/addPage.ejs", { jurusan: jurusans });
    } catch (err) {
      res.json(err);
    }
  }
  static async add(req, res) {
    try {
      const { nama, jurusan, jumlah_peserta } = req.body;
      let matkuls = await mataKuliah.create({
        nama,
        jurusan,
        jumlah_peserta,
      });
      res.redirect("/mataKuliah");
    } catch (err) {
      res.json(err);
    }
  }
  static async delete(req, res) {
    try {
      let id = req.params.id;
      let matkuls = await mataKuliah.destroy({
        where: {
          id,
        },
      });

      matkuls === 1 ? res.redirect("/mataKuliah") : res.json(`${id} not found`);
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
      let matkuls = await mataKuliah.findByPk(id);
      res.render("mataKuliah/editPage.ejs", {
        jurusan: jurusans,
        mataKuliah: matkuls,
      });
    } catch (err) {
      res.json(err);
    }
  }

  static async update(req, res) {
    try {
      let id = req.params.id;
      const {
        nama,
        jurusan,
        tahun_akademik,
        semester_akademik,
        jumlah_peserta,
      } = req.body;
      let results = await mataKuliah.update(
        { nama, jurusan, tahun_akademik, semester_akademik, jumlah_peserta },
        { where: { id } }
      );
      results[0] === 1
        ? res.redirect("/mataKuliah")
        : res.json({
            message: `Mata Kuliah id: ${id} does not exist`,
          });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = MataKuliahController;
