"use client";
import { useEventsContext } from "@/lib/EventsContext";
import React, { useEffect, useMemo, useState } from "react";
import EventDiv from "../components/event-div/EventDiv";
import Loading from "../components/loading/Loading";
import { CiFilter } from "react-icons/ci";
import { debounce } from "@/utils/utils";
import FilterBox from "../components/filter-box/FilterBox";
import { IoClose } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";

const Page = () => {
  const { events, setEvents } = useEventsContext();
  const [isMounted, setIsMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterApplied, setIsFilterApplied] = useState(false);
  const [resultEvents, setResultEvents] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const searchEvents = (value) => {
    if (events.length) {
      const searchResult = events.filter((event) =>
        event.eventName.toLowerCase().includes(value?.toLowerCase())
      );
      setResultEvents(searchResult);
    }
  };
  const debouncedSearchEvents = useMemo(
    () => debounce(searchEvents, 1 * 1000),
    []
  ); // to not provoke debounce on every re-render

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    // debounced request for search, i.e. after a certain delay
    debouncedSearchEvents(value);
  };

  if (!isMounted) {
    return <Loading />;
  }

  if (!events.length) {
    return (
      <div className="min-h-[90vh] text-xl font-semibold m-5">
        No events registered yet.
      </div>
    );
  }

  return (
    <div className="min-h-[90vh] p-5 lg:px-[5vw]">
      <div className="w-fit lg:mx-auto relative mb-10">
        <h1 className="text-3xl lg:text-5xl font-bold flex gap-2 items-center my-5 lg:mx-auto">
          All Events
        </h1>
        <img
          src="/underline.svg"
          alt="underline image"
          className="w-[100px] lg:w-[180px] absolute left-[50px] lg:left-[70px] lg:-bottom-[15px] -bottom-[10px]"
        />
      </div>

      <div className="lg:flex gap-10">
        <div className="flex-[0.6] lg:my-5">
          <div className="mb-5 flex lg:block lg:space-y-5 gap-2">
            <input
              type="text"
              className="w-full outline-none px-4 py-2 lg:py-4 bg-white rounded-full border"
              placeholder="Search Events"
              value={searchTerm}
              onChange={handleChange}
            />
            <div
              className="flex items-center text-neutral-400 bg-white w-fit px-3 py-2 lg:py-3 hover:cursor-pointer rounded-full border"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              Filters
              {isFilterOpen ? (
                <IoClose className="text-2xl text-black" />
              ) : isFilterApplied ? (
                <FaFilter />
              ) : (
                <CiFilter className="text-2xl" />
              )}
            </div>
          </div>

          <div
            className={` bg-white rounded-xl ${
              isFilterOpen ? `h-[220px] border` : `h-0`
            } transition-all duration-300`}
          >
            <FilterBox
              isFilterOpen={isFilterOpen}
              setIsFilterOpen={setIsFilterOpen}
              resultEvents={resultEvents}
              setResultEvents={setResultEvents}
              setIsFilterApplied={setIsFilterApplied}
            />
          </div>
        </div>

        <div className="space-y-5 pt-5 flex-1">
          {!searchTerm && !isFilterApplied ? (
            events
              .toReversed()
              .map((event) => <EventDiv key={event.id} event={event} />)
          ) : resultEvents?.length ? (
            resultEvents
              .toReversed()
              .map((event) => <EventDiv key={event.id} event={event} />)
          ) : (
            <div className="min-h-[90vh] text-xl font-semibold text-center">
              No events found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
