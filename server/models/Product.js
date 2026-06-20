import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
   rating: {
    type: Number,
    default: 4.5,
   },
    image: {
      type: String,
      default: "",
    },

    countInStock: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Product",
  productSchema
);