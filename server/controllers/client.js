import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import Users from "../models/User.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    const productsWithStats = await Promise.all(
      products.map(async (product) => {
        const stat = await ProductStat.find({
          productId: product._id,
        });
        return {
          ...product._doc,
          stat,
        };
      })
    );
    res.status(200).json(productsWithStats);
  } catch (error) {
    res.status(404).json({ message: error.message });
    console.log(error);
  }
};

export const getCostumers = async (req, res) => {
  try {
    const costumers = await Users.find({ role: "user" }).select("-password");

    res.status(200).json(costumers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getTransactions = async (req, res) => {
  try {
    res.status(200).json();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
