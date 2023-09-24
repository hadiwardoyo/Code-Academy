const { fruit, category, brand } = require("../models");

class FruitController {
  static async getFruit(req, res) {
    try {
      let fruits = await fruit.findAll({
        include: [category, brand],
        order: [["id", "asc"]],
      });
      res.render("fruits.ejs", { fruits });
    } catch (err) {
      res.json(err);
    }
  }
  static async addPage(req, res) {
    try {
      let brands = await brand.findAll({
        order: [["id", "asc"]],
      });
      let categories = await category.findAll({
        order: [["id", "asc"]],
      });
      res.render("fruitsAdd.ejs", { brands, categories });
    } catch (err) {
      res.json(err);
    }
  }

  static async add(req, res) {
    console.log(req.body);
    try {
      const { name, image, price, stock, categories_id, brand_id } = req.body;
      let results = await fruit.create({
        name,
        image,
        price,
        stock,
        categories_id,
        brand_id,
      });
      res.redirect("/fruits");
    } catch (err) {
      res.json(err);
    }
  }
  static async delete(req, res) {
    const id = +req.params.id;
    try {
      let results = await fruit.destroy({
        where: { id },
      });

      results === 1
        ? res.redirect("/fruits")
        : res.json({
            message: `fruit id: ${id} does not exist`,
          });
    } catch (err) {
      res.json(err);
    }
  }

  static async updatePage(req, res) {
    const id = +req.params.id;
    try {
      let brands = await brand.findAll({
        order: [["id", "asc"]],
      });
      let categories = await category.findAll({
        order: [["id", "asc"]],
      });
      let fruits = await fruit.findByPk(id, {
        include: [category, brand],
      });
      res.render("fruitsEdit.ejs", {
        fruits,
        brands,
        categories,
      });
    } catch (err) {
      res.json(err);
    }
  }

  static async update(req, res) {
    const id = +req.params.id;
    try {
      const { name, image, price, stock, categories_id, brand_id } = req.body;
      let results = await fruit.update(
        { name, image, price, stock, categories_id, brand_id },
        { where: { id } }
      );
      results[0] === 1
        ? res.redirect("/fruits")
        : res.json({
            message: `fruit id: ${id} does not exist`,
          });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = FruitController;
