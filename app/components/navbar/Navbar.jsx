"use client";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import MobileNavbox from "./MobileNavbox";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "All Events", path: "/events" },
    { name: "Create Event", path: "/create-event" },
  ];
  return (
    <div className="px-5 h-[10vh] flex justify-between items-center bg-white md:px-[10vh]">
      <h1 className="text-2xl font-bold">ProEvent</h1>
      <button className="text-2xl md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <FiMenu />
      </button>
      <MobileNavbox
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        navItems={navItems}
        path={path}
      />
      <ul className="ml-auto hidden md:flex gap-10">
        {navItems.map((item) => (
          <div
            key={item.name}
            className={`${
              path === item.path && `text-orange-600`
            } hover:font-bold transition-all`}
          >
            <Link href={item.path}>{item.name}</Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
