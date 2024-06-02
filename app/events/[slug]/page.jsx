"use client";
import Loading from "@/app/components/loading/Loading";
import { useEventsContext } from "@/lib/EventsContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";

const Page = ({ params }) => {
  const [isMounted, setIsMounted] = useState(false);
  const id = params.slug;
  const { events } = useEventsContext();
  const tappedEvent = events.find((event) => event.id === id);

  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <Loading />;

  return (
    <div className="p-7 lg:px-[25vw] min-h-[90vh]">
      <div className="flex mb-5 items-center gap-2 text-neutral-400">
        <FaChevronLeft
          className="text-orange-600 text-xs lg:text-base hover:cursor-pointer"
          onClick={() => router.back()}
        />
        <Link href={"/events"}>All Events</Link>
        <span>/</span>
        <span className="underline underline-offset-2">{tappedEvent.eventName}</span>
      </div>

      <div className="font-semibold text-2xl mb-3">{tappedEvent.eventName}</div>
      <div className="mb-7">
        <span className="font-medium">Deadline: </span>
        {tappedEvent.eventDate}
      </div>
      <div className="mb-7">{tappedEvent.eventDesc}</div>
    </div>
  );
};

export default Page;
