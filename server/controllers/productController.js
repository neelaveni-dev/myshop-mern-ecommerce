import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
  try {
    const category = req.query.category;

    let products;

    if (category) {
      products = await Product.find({ category });
    } else {
      products = await Product.find();
    }

    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const {
      name,
      price,
      description,
      image,
      countInStock,
      category,
    } = req.body;

    const product = await Product.create({
      name,
      price,
      description,
      image,
      countInStock,
      category,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    product.name = req.body.name || product.name;
    product.price = req.body.price || product.price;
    product.description =
      req.body.description || product.description;
    product.image = req.body.image || product.image;
    product.countInStock =
      req.body.countInStock || product.countInStock;
    product.category =
      req.body.category || product.category;

    const updatedProduct = await product.save();

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    await product.deleteOne();

    res.json({
      message: "Product deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(
      req.params.id
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};