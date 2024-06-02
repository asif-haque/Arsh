import React, { useState } from "react";

const FilterBox = ({ isFilterOpen }) => {
  const [value, setValue] = useState({});

  const handleFilters = (e) => {
    e.preventDefault();
    console.log(e.target.deadline.checked);
  };
  return (
    <div className={`${isFilterOpen ? `block` : `hidden`}`}>
      <form onSubmit={handleFilters}>
        <div className="">
          <input
            type="radio"
            name="deadline"
            onChange={(e) => setValue({ ...value, deadline: e.target.checked })}
          />
        </div>
        <button className="bg-neutral-400 text-white px-3 py-1 rounded-full">
          Apply
        </button>
        <button className="bg-neutral-300 text-white px-3 py-1 rounded-full">
          Clear
        </button>
      </form>
    </div>
  );
};

export default FilterBox;
