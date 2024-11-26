const express = require("express");
const productController = require("../controllers/ProductController.js");

const router = express.Router();

router.post("/products", (req, res, next) =>
  productController.create(req, res, next)
);
router.get("/products", (req, res, next) =>
  productController.getAll(req, res, next)
);
router.get("/products/:id", (req, res, next) =>
  productController.getOneById(req, res, next)
);
router.put("/products/:id", (req, res, next) =>
  productController.update(req, res, next)
);
router.delete("/products/:id", (req, res, next) =>
  productController.erase(req, res, next)
);
router.get("/products/tags/:tag", (req, res, next) =>
  productController.searchByTag(req, res, next)
);

module.exports = router;
