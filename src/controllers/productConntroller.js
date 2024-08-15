import productServices from "../services/productServices.js";
import { CatchError } from "../utils/catchError.js";

class ProductController {
  constructor() {};

  async findAll(_req, res) {
    try {
      const products = await productServices.findAll();
      res.status(200).json(products);
    } catch (error) {
      return CatchError(error, res);
    };
  };

  async create(req, res) {
    try {
      const product = req.body;
      const newProduct = await productServices.create(product);
      res.status(201).json(newProduct);
    } catch (error) {
      return CatchError(error, res);
    };
  };

  async update(req, res) {
    try {
      const id = req.params.id;
      const product = req.body;
      await productServices.update(id, product);
      res.status(200).json({ message: "Product updated successfully" });
    } catch (error) {
      return CatchError(error, res);
    };
  };

  async delete(req, res) {
    try {
      const id = req.params.id;
      await productServices.delete(id);
      res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
      return CatchError(error, res);
    };
  };

  async findById(req, res) {
    try {
      const id = req.params.id;
      const product = await productServices.findById(id);
      res.status(200).json(product);
    } catch (error) {
      return CatchError(error, res);
    };
  };

};


export default new ProductController();