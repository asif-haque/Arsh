import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";

const MobileNavbox = ({ isOpen, setIsOpen, navItems }) => {
  const path = usePathname();
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
      <div className="my-16 text-xl space-y-5">
        {navItems.map((item) => (
          <div
            key={item.name}
            className={`${path === item.path && `text-orange-600`}`}
          >
            <Link href={item.path}>{item.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileNavbox;
