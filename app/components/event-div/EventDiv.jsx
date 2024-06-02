import Link from "next/link";
import React from "react";
import { CiCalendarDate } from "react-icons/ci";

const EventDiv = ({ event }) => {
  return (
    <div className="bg-zinc-50 rounded-xl p-3 border hover:shadow-lg hover:border-none hover:bg-zinc-100 transition-all duration-500">
      <Link href={`/events/${event.id}`}>
        <div className="text-2xl font-semibold mb-2 border-b pb-1 px-1">
          {event.eventName}
        </div>
        <div className="flex gap-1 text-sm items-center mb-2">
          <CiCalendarDate className="text-2xl text-orange-600" />
          <div className="">{event.eventDate}</div>
        </div>
        <div className="line-clamp-3">{event.eventDesc}</div>
      </Link>
    </div>
  );
};

export default EventDiv;
