import foodModel from "../models/foodModel.js";

export const addFood = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    const image = req.file.path; // path to uploaded file

    const newFood = new foodModel({
      name,
      description,
      price,
      image,
      category,
    });

    await newFood.save();
    newFood.image = newFood.image.replace(/\\/g, "/");
    await newFood.save();
    res
      .status(201)
      .json({ message: "Food item added successfully", data: newFood });
  } catch (error) {
    res.status(500).json({ message: "Failed to add food item", error });
  }
};


