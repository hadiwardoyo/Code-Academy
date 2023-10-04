const { mataPraktikum, praktikan, mataKuliah } = require("../models");

class MataPraktikumController {
  static async getMatprak(req, res) {
    try {
      let mataPraktikums = await mataPraktikum.findAll({
        // order: [["id", "asc"]],
        include: [mataKuliah, praktikan],
      });
      res.json(mataPraktikums);
    } catch (err) {
      res.json(err);
    }
  }
  static async view(req, res) {
    try {
      let mataPraktikums = await mataPraktikum.findAll({
        order: [["id", "asc"]],
        include: [mataKuliah, praktikan],
      });
      res.render("mataPraktikum/index.ejs", { mataPraktikums });
    } catch (err) {
      res.json(err);
    }
  }
  static async addPage(req, res) {
    try {
      let idPraktikan = req.params.id;
      let matkuls = await mataKuliah.findAll({
        order: [["id", "asc"]],
      });
      let kelas = ["A", "B", "C", "D", "E", "F", "G", "H"];
      let hari = [
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu",
        "Minggu",
      ];

      res.render("mataPraktikum/addKelas.ejs", {
        mataKuliah: matkuls,
        idPraktikan,
        kelas,
        hari,
      });
    } catch (err) {
      res.json(err);
    }
  }
  static async add(req, res) {
    try {
      let { mataKuliah_id, praktikan_id, kelas, hari, pukul } = req.body;
      praktikan_id = +praktikan_id;
      mataKuliah_id = +mataKuliah_id;
      let results = await mataPraktikum.create({
        mataKuliah_id,
        praktikan_id,
        kelas,
        hari,
        pukul,
      });
      let tmp = await mataKuliah.findByPk(mataKuliah_id);
      let jumlah_peserta = tmp.dataValues.jumlah_peserta + 1;
      let matkul = await mataKuliah.update(
        {
          jumlah_peserta,
        },
        { where: { id: mataKuliah_id } }
      );
      // console.log(jumlah_peserta);
      res.redirect("/praktikan");
    } catch (err) {
      res.json(err);
    }
  }
  static async delete(req, res) {
    try {
      let id1 = +req.params.idMatkul;
      let id2 = +req.params.idPraktikan;

      let results = await mataPraktikum.destroy({
        where: { mataKuliah_id: id1, praktikan_id: id2 },
      });

      results === 1
        ? res.redirect("/mataPraktikum")
        : res.json(`${id} not found`);
    } catch (err) {
      res.json(err);
    }
  }

  static async updatePage(req, res) {}

  static async update(req, res) {}
}

module.exports = MataPraktikumController;
