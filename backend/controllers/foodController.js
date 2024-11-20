import foodModel from "../models/foodModel.js";
import fs from "fs";

const addFood = async (req, res) => {
  const imageFileName = req.file.filename;
  const { name, description, category, price } = req.body;

  const food = new foodModel({
    name,
    description,
    price,
    category,
    image: imageFileName,
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food item added successfully!" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const foodList = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    if (!foods) {
      return res.json({ success: false, message: "food not found" });
    }
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    console.log(food);

    fs.unlink(`upload/${food.image}`, () => {});
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "food item removed successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
export { addFood, foodList, removeFood };
