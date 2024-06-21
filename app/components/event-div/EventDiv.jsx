import { fetchData } from "@/data/data";
import { useEventsContext } from "@/lib/EventsContext";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiCalendarDate } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const EventDiv = ({ event }) => {
  const { events, setEventsWithLocalStorage } = useEventsContext();
  const [data, setData] = useState([]);
  const handleDelete = (e) => {
    e.stopPropagation();
    const newEvents = events.filter((item) => item.id !== event.id);
    console.log(newEvents);
    setEventsWithLocalStorage(newEvents);
  };

  useEffect(() => {
    fetchData().then((res) => {
      setData(res);
      console.log(res);
    });
  }, []);

  return (
    <div className="bg-zinc-50 rounded-xl p-3 border hover:shadow-lg hover:border-none hover:bg-zinc-100 transition-all duration-500">
      <div className="text-2xl font-semibold mb-2 border-b pb-1 px-1 flex justify-between">
        <Link href={`/events/${event.id}`}>
          <span>{event.eventName}</span>
        </Link>
        <MdDelete onClick={handleDelete} className="hover:cursor-pointer" />
      </div>
      <Link href={`/events/${event.id}`}>
        <div className="flex gap-1 text-sm items-center mb-2">
          <CiCalendarDate className="text-2xl text-orange-600" />
          <div className="">{event.eventDate}</div>
        </div>
        <div className="line-clamp-3">{event.eventDesc}</div>
      </Link>

      {/* <div className="flex justify-start gap-5">
        <div className="">Register</div>
        <div className="">Rs. 5000000</div>
      </div>
      <div className="flex gap-5 my-3">
        <div className="rounded-full w-10 overflow-hidden">
          <img
            src="https://cdn.proelevate.in/accenture_f7864a08ef.png"
            alt=""
            className="size-full object-cover"
          />
        </div>
        <div className="">
          <div className="font-bold text-xl">ABC</div>
          <div className="flex gap-5">
            <div className="">Lorem</div>
            <div className="">Ipsum</div>
            <div className="">xyz</div>
          </div>
        </div>
      </div>
      <div className=""></div> */}
    </div>
  );
};

export default EventDiv;
