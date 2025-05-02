import React from "react";
import Header from "../../Components/Header/Header";
import Marqurey from "../../Components/Marqurey/Marqurey";
import NavBa from "../../Components/Navbar/NavBa";
import LeftAside from "../../Components/LeftAside/LeftAside";
import { Outlet } from "react-router";
import RightAside from "./../../Components/RightAside/RightAside";

const HomeLayOut = () => {
  return (
    <>
      <header>
        <Header></Header>
        <Marqurey></Marqurey>
        <nav>
          <NavBa></NavBa>
        </nav>
      </header>
      <main className="grid grid-cols-12 w-11/12 gap-8 mx-auto mt-12">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </>
  );
};

export default HomeLayOut;
