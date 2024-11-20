import React from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { Route, Routes } from "react-router-dom";
import AddItem from "./pages/AddItem";
import ListItem from "./pages/ListItem";
import Order from "./pages/Order";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const url = "http://localhost:4000";
  return (
    <div>
      <div>
        <ToastContainer />
        <NavBar />
        <hr className="w-full bg-gray-400 h-[2px]" />
      </div>
      <div className="flex gap-6">
        <SideBar />
        <Routes>
          <Route path="/add" element={<AddItem url={url} />} />
          <Route path="/list" element={<ListItem url={url} />} />
          <Route path="/order" element={<Order url={url} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
