import Link from "next/link";
import React from "react";
import { IoAdd } from "react-icons/io5";

const CreateButton = () => {
  return (
    <button className="md:hidden fixed right-7 bottom-10 bg-orange-600 text-white shadow-2xl p-3 rounded-full text-2xl">
      <Link href={"/create-event"}>
        <IoAdd />
      </Link>
    </button>
  );
};

export default CreateButton;
