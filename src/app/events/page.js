// src/app/events/page.js
"use client";

import { useState, useEffect } from "react";
import BirthdayCountdown from "@/components/BirthdayCountdown"; // Jika ada countdown
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Events = () => {
  const [events, setEvents] = useState([]);

  // Memuat data ulang tahun dari localStorage
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("birthdays"));
    if (storedEvents) {
      setEvents(storedEvents);
    }
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
      <Navbar />
      <div className="">
        <main className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg my-6 mt-20 md:mt-25">
          <h1 className="text-2xl font-bold text-center mb-6 text-purple-600">
            Upcoming Events
          </h1>
          <div className="space-y-4">
            {events.length > 0 ? (
              events.map((event, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-purple-100 p-4 rounded shadow-md"
                >
                  <div>
                    <h3 className="text-lg font-semibold">{event.name}</h3>
                    <p>{event.date}</p>
                  </div>
                  <BirthdayCountdown birthdayDate={event.date} />
                </div>
              ))
            ) : (
              <p className="text-center">Belum ada event yang ditambahkan.</p>
            )}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
