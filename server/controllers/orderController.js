import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  try {
    const { user, orderItems, totalPrice } = req.body;

    const order = await Order.create({
      user,
      orderItems,
      totalPrice,
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate(
      "user",
      "name email"
    );

    res.json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};