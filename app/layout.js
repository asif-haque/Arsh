import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import { EventsContextProvider } from "@/lib/EventsContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Event Management Website",
  description: "Manages event",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-tr from-white to-slate-100 bg-no-repeat`}
      >
        <EventsContextProvider>
          <nav>
            <Navbar />
          </nav>
          {children}
        </EventsContextProvider>
        <footer className="text-center bg-slate-700 py-10 text-white">
          Check out my portfolio:{" "}
          <a
            href="https://github.com/asif-haque/"
            target="_blank"
            className="hover:underline"
          >
            GitHub
          </a>
        </footer>
      </body>
    </html>
  );
}
