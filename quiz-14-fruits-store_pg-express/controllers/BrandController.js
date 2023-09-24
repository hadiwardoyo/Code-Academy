const { brand } = require("../models");

class BrandController {
  static async getBrand(req, res) {
    try {
      let brands = await brand.findAll({
        order: [["id", "asc"]],
      });
      //   res.json(brands);
      res.render("brands.ejs", { brands });
    } catch (err) {
      res.json(err);
    }
  }

  static async addPage(req, res) {
    try {
      res.render("brandsAdd.ejs");
    } catch (err) {
      res.json(err);
    }
  }

  static async add(req, res) {
    try {
      const { name, image, city, total_employees } = req.body;
      let results = await brand.create({ name, image, city, total_employees });
      res.redirect("/brands");
    } catch (err) {
      res.json(err);
    }
  }
  static async delete(req, res) {
    const id = +req.params.id;
    try {
      let results = await brand.destroy({
        where: { id },
      });

      results === 1
        ? res.redirect("/brands")
        : res.json({
            message: `brand id:${id} does not exist`,
          });
    } catch (err) {
      res.json(err);
    }
  }

  static async updatePage(req, res) {
    const id = +req.params.id;
    try {
      let brands = await brand.findByPk(id);
      res.render("brandsEdit.ejs", { brands });
    } catch (err) {
      res.json(err);
    }
  }

  static async update(req, res) {
    const id = +req.params.id;
    try {
      const { name, image, city, total_employees } = req.body;
      let results = await brand.update(
        { name, image, city, total_employees },
        { where: { id } }
      );
      results[0] === 1
        ? res.redirect("/brands")
        : res.json({
            message: `brand id: ${id} does not exist`,
          });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = BrandController;
