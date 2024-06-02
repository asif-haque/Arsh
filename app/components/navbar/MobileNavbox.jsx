import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const MobileNavbox = ({ isOpen, setIsOpen, navItems, path }) => {
  useEffect(() => {
    setIsOpen(false);
  }, [path]);

  return (
    <div
      className={`fixed z-50 h-screen bg-white left-0 top-0 w-full p-5 ${
        isOpen ? `translate-y-0` : `-translate-y-full`
      } transition-all duration-300`}
    >
      <button
        className="text-3xl absolute right-5"
        onClick={() => setIsOpen(false)}
      >
        <IoClose />
      </button>
      <div className="my-16 text-xl font-semibold space-y-6">
        {navItems.map((item) => (
          <div className="" key={item.name}>
            <Link href={item.path}>
              <div className={`${path === item.path && `text-orange-600`} flex justify-between items-center`}>
                {item.name}
                <FaAngleRight />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileNavbox;
