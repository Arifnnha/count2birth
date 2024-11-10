"use client";

import { useState, useEffect } from "react";
import BirthdayForm from "@/components/BirthdayForm";
import BirthdayList from "@/components/BirthdayList";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HomePage = () => {
  const [birthdays, setBirthdays] = useState([]);

  // Memuat data ulang tahun dari localStorage saat pertama kali halaman dimuat
  useEffect(() => {
    const storedBirthdays = JSON.parse(localStorage.getItem("birthdays")) || [];
    setBirthdays(storedBirthdays);
  }, []);

  // Menyimpan data ulang tahun ke localStorage setiap kali `birthdays` diperbarui
  useEffect(() => {
    localStorage.setItem("birthdays", JSON.stringify(birthdays));
  }, [birthdays]);

  const addBirthday = (birthday) => {
    setBirthdays((prevBirthdays) => [...prevBirthdays, birthday]);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg my-6 mt-20 md:mt-25">
        <h1 className="text-2xl font-bold text-center mb-6 text-purple-600">
          Count2Birth - Pengingat Ulang Tahun
        </h1>
        <BirthdayForm addBirthday={addBirthday} />
        <BirthdayList birthdays={birthdays} />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
