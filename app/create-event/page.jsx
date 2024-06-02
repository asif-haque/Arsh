"use client";
import { useEventsContext } from "@/lib/EventsContext";
import React from "react";
import { MdEventNote } from "react-icons/md";
import EventForm from "../components/event-form/EventForm";
import { useRouter } from "next/navigation";

const Page = () => {
  const { events, setEventsWithLocalStorage } = useEventsContext();
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const id = crypto.randomUUID();
    setEventsWithLocalStorage([...events, { ...data, id }]);
    router.push(`/events/${id}`);
  };

  return (
    <div className="px-5">
      <div className="w-fit relative">
        <h1 className="text-3xl font-bold flex gap-2 items-center my-5">
          <span>Create an Event</span>
          <MdEventNote className="text-3xl text-orange-600" />
        </h1>
        <img
          src="/underline.svg"
          alt="underline image"
          className="w-[100px] absolute left-[140px] -bottom-[10px]"
        />
      </div>

      <EventForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default Page;
