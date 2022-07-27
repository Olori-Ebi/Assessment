const express = require('express');
const ProductController = require('../controllers/product.controller');
const authMiddleware = require('../middleware/auth.middleware');
const upload = require('../middleware/multer');

const productRouter = express.Router();

productRouter.route("/product").post(authMiddleware, upload.single("product_img"), ProductController.createProduct);
productRouter.route("/product/radius").get(authMiddleware, ProductController.getProductsByRadius);
productRouter.route("/product/:productId").get(authMiddleware, ProductController.getProduct);

module.exports = productRouter;