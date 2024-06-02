"use client";
import { createContext, useContext, useState } from "react";

const EventsContext = createContext();

export const EventsContextProvider = ({ children }) => {
  let initialState;
  try {
    // whenever refreshed
    initialState = localStorage.getItem("events")
      ? JSON.parse(localStorage.getItem("events"))
      : [];
  } catch (error) {
    console.error("Error parsing localStorage events: ", error);
    initialState = [];
  }
  const [events, setEvents] = useState(initialState);
  const setEventsWithLocalStorage = (state) => {
    setEvents(state);
    localStorage.setItem("events", JSON.stringify(state));
  };

  return (
    <EventsContext.Provider
      value={{ events, setEvents, setEventsWithLocalStorage }}
    >
      {children}
    </EventsContext.Provider>
  );
};

export const useEventsContext = () => {
  return useContext(EventsContext);
};
