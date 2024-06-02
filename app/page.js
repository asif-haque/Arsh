import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-[100vh] px-5 py-20">
      <div className="">
        <h1 className="text-4xl font-bold">
          One Stop Solution To Your{" "}
          <span className="text-orange-600">Event Management</span>
        </h1>
        <Link
          href={"/create-event"}
          className="w-fit bg-orange-600 px-5 py-2 rounded-full text-white text-xl font-semibold flex items-center gap-2 mt-8"
        >
          <span>Create Event</span> <FaArrowRight />
        </Link>
      </div>
    </div>
  );
}
