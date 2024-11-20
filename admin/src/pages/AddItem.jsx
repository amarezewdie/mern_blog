import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const AddItem = ({url}) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("description", data.description);
    formData.append("image", image);
    try {
      const res = await axios.post(
        `${url}/api/food/add`,
        formData
      );
      if (res.data.success) {
        toast.success(res.data.message);
        setData({
          name: "",
          category: "",
          price: "",
          description: "",
        });
        setImage(false);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((perv) => ({ ...perv, [name]: value }));
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex m-7 flex-col gap-4 items-start max-w-md"
      >
        <p className="capitalize">upload image</p>
        <div className="flex flex-col w-28">
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            type="file"
            hidden
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label className="capitalize">product name</label>
          <input
            type="text"
            placeholder="type here"
            className="p-3 w-full"
            name="name"
            value={data.name}
            onChange={onChangeHandler}
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label className="capitalize"> product description</label>
          <textarea
            name="description"
            value={data.description}
            rows="6"
            placeholder="write content here"
            className="px-3 w-full"
            onChange={onChangeHandler}
          ></textarea>
        </div>
        <div className="flex gap-4 w-full">
          <div className="flex flex-col gap-2">
            <label className="capitalize" htmlFor="product category">
              product category
            </label>
            <select
              name="category"
              value={data.category}
              onChange={onChangeHandler}
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure vag">Pure vag</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <p className="capitalize">product price</p>
            <input
              type="number"
              name="price"
              value={data.price}
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <button className="px-3 bg-black text-white py-1">add</button>
      </form>
    </div>
  );
};

export default AddItem;
