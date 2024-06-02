import React from "react";

const EventForm = ({ handleSubmit }) => {
  return (
    <div className="w-full md:pt-5">
      <form className="mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="eventName"
            className="block mb-2 font-medium text-gray-900"
          >
            Event Name
          </label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            className="bg-white outline-none border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Name of the Event"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="eventDesc"
            className="block mb-2 font-medium text-gray-900"
          >
            Event Description
          </label>
          <textarea
            id="eventDesc"
            name="eventDesc"
            rows="4"
            className="block outline-none p-2.5 w-full text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Description of the Event"
            required
          ></textarea>
        </div>

        <div className="mb-5">
          <label
            htmlFor="eventDate"
            className="block mb-2 font-medium text-gray-900"
          >
            Submission Deadline
          </label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            className="bg-white outline-none border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Name of the Event"
          />
        </div>
        <button
          type="submit"
          className="bg-orange-600 px-6 py-3 text-white rounded-full mt-2 md:mt-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EventForm;
