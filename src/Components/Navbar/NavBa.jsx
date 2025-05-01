import React from "react";
import { NavLink } from "react-router";
import user from "../../assets/user.png";

const NavBa = () => {
  return (
    <div className="grid grid-cols-3 mx-auto w-11/12 mt-6">
      <div></div>
      <div className="flex">
        <ul className="flex mx-auto items-center gap-8 font-normal text-xl">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/career">Career</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-end gap-3 ">
        <img src={user} alt="user" />
        <button className="btn btn-lg text-xl text-white  bg-[#403F3F]">
          Login
        </button>
      </div>
    </div>
  );
};

export default NavBa;
