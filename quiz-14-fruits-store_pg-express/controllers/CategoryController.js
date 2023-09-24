const { category } = require("../models");

class CategoryController {
  static async getCategory(req, res) {
    try {
      let categories = await category.findAll({
        order: [["id", "asc"]],
      });
      res.render("categories.ejs", { categories });
    } catch (err) {
      res.json(err);
    }
  }

  static async addPage(req, res) {
    try {
      res.render("categoriesAdd.ejs");
    } catch (err) {
      res.json(err);
    }
  }

  static async add(req, res) {
    try {
      const { name } = req.body;
      let results = await category.create({ name });
      res.redirect("/categories");
    } catch (err) {
      res.json(err);
    }
  }
  static async delete(req, res) {
    const id = +req.params.id;
    try {
      let results = await category.destroy({
        where: { id },
      });

      results === 1
        ? res.redirect("/categories")
        : res.json({
            message: `category id: ${id} does not exist`,
          });
    } catch (err) {
      res.json(err);
    }
  }

  static async updatePage(req, res) {
    const id = +req.params.id;
    try {
      let categories = await category.findByPk(id);
      res.render("categoriesEdit.ejs", { categories });
    } catch (err) {
      res.json(err);
    }
  }

  static async update(req, res) {
    const id = +req.params.id;
    try {
      const { name } = req.body;
      let results = await category.update({ name }, { where: { id } });
      results[0] === 1
        ? res.redirect("/categories")
        : res.json({
            message: `category id: ${id} does not exist`,
          });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = CategoryController;
