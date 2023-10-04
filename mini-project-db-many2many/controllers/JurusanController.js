const { jurusan } = require("../models");

class JurusanController {
  static async getJurusan(req, res) {
    try {
      let jurusans = await jurusan.findAll({
        order: [["id", "asc"]],
      });
      res.json(jurusans);
    } catch (err) {
      res.json(err);
    }
  }
  static async view(req, res) {
    try {
      let jurusans = await jurusan.findAll({
        order: [["id", "asc"]],
      });
      res.json(jurusans);
    } catch (err) {
      res.json(err);
    }
  }
  static async addPage(req, res) {
    try {
      res.json("fitur ini belum ada");
    } catch (err) {
      res.json(err);
    }
  }
  static async add(req, res) {
    try {
      const { nama, fakultas, tahun_didirikan, nomor_akreditasi } = req.body;
      let jurusans = await jurusan.create({
        nama,
        fakultas,
        tahun_didirikan,
        nomor_akreditasi,
      });
      res.json({
        message: "BERHASIL",
      });
    } catch (err) {
      res.json(err);
    }
  }
  static async delete(req, res) {
    try {
      let id = req.params.id;
      let cari = await jurusan.findAll({
        where: {
          id,
        },
      });

      let jurusans = await jurusan.destroy({
        where: {
          id,
        },
      });

      jurusans === 1
        ? res.json(`"${cari[0].nama}" has successful deleted`)
        : res.json(`${id} not found`);
    } catch (err) {
      res.json(err);
    }
  }

  static async updatePage(req, res) {
    try {
      res.json({
        message: "fitur ini belum ada",
      });
    } catch (err) {
      res.json(err);
    }
  }

  static async update(req, res) {
    try {
      let id = req.params.id;
      const { nama, fakultas, tahun_didirikan, nomor_akreditasi } = req.body;
      let results = await jurusan.update(
        { nama, fakultas, tahun_didirikan, nomor_akreditasi },
        { where: { id } }
      );
      results[0] === 1
        ? res.json({
            message: `jurusan has successfully updated`,
          })
        : res.json({
            message: `jurusan id: ${id} does not exist`,
          });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = JurusanController;
