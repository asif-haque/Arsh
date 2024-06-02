"use client";
import { useEventsContext } from "@/lib/EventsContext";
import React, { useEffect, useState } from "react";
import EventDiv from "../components/event-div/EventDiv";
import Loading from "../components/loading/Loading";

const Page = () => {
  const { events } = useEventsContext();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

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
    <div className="min-h-[90vh] p-5">
      <div className="w-fit relative mb-7">
        <h1 className="text-3xl font-bold flex gap-2 items-center my-5">
          <span>All Events</span>
        </h1>
        <img
          src="/underline.svg"
          alt="underline image"
          className="w-[100px] absolute left-[50px] -bottom-[10px]"
        />
      </div>
      <div className="space-y-5">
        {events.map((event) => (
          <EventDiv key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Page;
