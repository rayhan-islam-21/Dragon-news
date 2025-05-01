import React from "react";
import logo from "../../assets/logo.png";
import { format } from "date-fns";
import Marqurey from "../Marqurey/Marqurey";
import NavBa from "../Navbar/NavBa";

const Header = () => {
  return (
      <div className="w-11/12 flex justify-center mx-auto gap-2 items-center flex-col mt-8">
        <img src={logo} className="w-[380px]" alt="logo" />
        <p className="text-[#706F6F]">Journalism Without Fear or Favour</p>
        <p className="text-[#403F3F] font-bold">
          {format(new Date(), "EEEE, LLLL dd, uuu")}
        </p>
      </div>
     
  );
};

export default Header;
