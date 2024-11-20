import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="h-[80vh] w-full">
      <form className="flex flex-col mx-auto items-center my-7 max-w-md gap-4">
        <h1 className="font-semibold text-2xl capitalize my-3">sign in</h1>
        <input type="email" placeholder="email" className="w-full p-3" />
        <input type="password" placeholder="password" className="w-full p-3" />
        <button className="w-full bg-gray-600 p-3 rounded-lg uppercase font-semibold text-2xl text-white">
          sign in
        </button>
        <div className="flex gap-4">
          <input type="checkbox" />
          <p className="capitalize">
            by containing i agree the terms of use and privacy policy
          </p>
        </div>
        <div className="flex self-start gap-3">
          <span>do not have account</span>{" "}
          <Link className="text-blue-600" to={"/sign-up"}>
            create account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
