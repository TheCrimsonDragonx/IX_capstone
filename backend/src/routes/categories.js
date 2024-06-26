const express = require("express");
const router = express.Router();

const categoryController = require('../controllers/categories')

router.post("/", (req, res) => {
  categoryController.createCategory(req, res);
});

router.get("/", (req, res) => {
  categoryController.getCategories(req, res)
});

router.put("/", (req, res) => {
  categoryController.updateCategoryByID(req, res);
});

router.delete("/", (req, res) => {
  categoryController.deleteCategoryByID(req, res);
});

module.exports = router;