import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const ListItem = ({url}) => {
  const [list, setList] = useState([]);
  const fetchList = async () => {
    try {
      const res = await axios.get(`${url}/api/food/list`);
      if (res.data.success) {
        setList(res.data.data);
        console.log(res.data);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${url}/api/food/remove/${id}`);
      if (res.data.success) {
        await fetchList();
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col min-w-[80vw] mx-4">
      <p className="my-4 capitalize font-semibold text-2xl">all food list</p>
      <div className="flex justify-between w-full border-b-2">
        <b>image</b>
        <b>name</b>
        <b>category</b>
        <b>price</b>
        <b>action</b>
      </div>

      {list.map((item, index) => {
        return (
          <div
            key={index}
            className="flex justify-between w-full p-3 border-b-2"
          >
            <img
              src={"http://localhost:4000/images/" + item.image}
              alt=""
              className="w-10"
            />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{item.price}</p>
            <button onClick={() => handleDelete(item._id)}>x</button>
          </div>
        );
      })}
    </div>
  );
};

export default ListItem;
