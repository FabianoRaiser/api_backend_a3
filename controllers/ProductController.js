const Product = require("../models/productModel");
const Controller = require("./Controller");

class ProductController extends Controller {
    constructor(model) {
        super(model);
    }
    
    async searchByTag(req, res, next) {
        try {
            const { tag } = req.params;

            const filteredList = await this.Model.find({ tag: tag });

            if (filteredList.length > 0) {
                res.status(200).json({ message: 'Categoria Encontrada', filteredList });
            } else {
                res.status(404).json({ message: 'Categoria não encontrada' });
            }
        } catch (e) {
            next(e);
        }
    }
}

const productController = new ProductController(Product);

module.exports = productController;
