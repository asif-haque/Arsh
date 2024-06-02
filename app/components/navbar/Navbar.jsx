"use client";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import MobileNavbox from "./MobileNavbox";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "All Events", path: "/events" },
    { name: "Create Event", path: "/create-event" },
  ];
  return (
    <div className="px-5 h-[10vh] flex justify-between items-center bg-white">
      <h1 className="text-2xl font-bold">ProEvent</h1>
      <button className="text-2xl md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <FiMenu />
      </button>
      <MobileNavbox isOpen={isOpen} setIsOpen={setIsOpen} navItems={navItems} />
    </div>
  );
};

export default Navbar;
