import React, { use } from "react";
import { NavLink } from "react-router";

const catagoryPromise = fetch('/catagories.json').then(res=>res.json());
console.log(catagoryPromise)

const Catagories = () => {
    const catagories = use(catagoryPromise);
    console.log(catagories)
  return (
    <div className="flex flex-col gap-4 mt-3">
      {catagories.map((catagory) => (
        <NavLink to={`catagory/${catagory.id}`} className="btn hover:bg-gray-200 text-sm bg-base-100 border-0" key={catagory.id}>
          {catagory.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Catagories;
