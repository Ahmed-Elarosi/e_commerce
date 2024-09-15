import Product from "../models/product.model";

export const getProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("error in fetching products", error.message);
    res
      .status(500)
      .json({ success: false, message: "Server error, products not found" });
  }
};
