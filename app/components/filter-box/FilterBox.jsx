import { useEventsContext } from "@/lib/EventsContext";
import React, { useState } from "react";

const FilterBox = ({
  isFilterOpen,
  setIsFilterOpen,
  resultEvents,
  setResultEvents,
  setIsFilterApplied,
}) => {
  const initialValue = { deadline: false, sortParam: "new2old" };
  const [value, setValue] = useState(initialValue);
  const { events } = useEventsContext();

  console.log(value);

  const handleFilters = (e) => {
    e.preventDefault();
    if (JSON.stringify(value) === JSON.stringify(initialValue)) {
      setIsFilterApplied(false);
      setIsFilterOpen(false);
      return;
    }
    setIsFilterApplied(true);
    let filteredArray;
    if (value.deadline) {
      filteredArray = events.filter(
        (item) => new Date(item.eventDate) > new Date(Date.now())
      );
    } else {
      filteredArray = [...events];
    }
    switch (value.sortParam) {
      case "old2new":
        filteredArray.reverse();
        break;
      case "deadline":
        filteredArray.sort((a, b) => {
          return new Date(a.eventDate) - new Date(b.eventDate);
        });
        break;
      default:
        break;
    }
    console.log(filteredArray);
    setResultEvents(filteredArray);
    setIsFilterOpen(false);
  };

  return (
    <div className={`${isFilterOpen ? `block` : `block`} p-5`}>
      <form onSubmit={handleFilters}>
        <div className="mb-2">
          <h3 className="mb-1 font-semibold">Filter by:</h3>
          <div className="space-x-2">
            <input
              type="checkbox"
              name="deadline"
              id="deadline"
              checked={value.deadline}
              onChange={(e) =>
                setValue({ ...value, deadline: e.target.checked })
              }
            />
            <label htmlFor="deadline">Upcoming Deadlines</label>
          </div>
        </div>

        <div className="">
          <h3 className="mb-1 font-semibold">Sort by:</h3>
          <select
            name="sortParam"
            id="sortParam"
            className="outline-none border p-1 rounded-full hover:cursor-pointer"
            value={value.sortParam}
            onChange={(e) => setValue({ ...value, sortParam: e.target.value })}
          >
            <option value="new2old">New to Old</option>
            <option value="old2new">Old to New</option>
            <option value="deadline">Deadline</option>
          </select>
        </div>
      </form>
      <button
        className="bg-orange-500 text-white px-3 py-1 rounded-full mr-3 my-5"
        onClick={handleFilters}
      >
        Apply
      </button>
      <button
        className="border border-orange-500 text-orange-600 px-3 py-1 rounded-full"
        onClick={() => setValue(initialValue)}
      >
        Clear
      </button>
    </div>
  );
};

export default FilterBox;
