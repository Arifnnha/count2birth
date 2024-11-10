"use client";

import { useEffect, useState } from "react";

const BirthdayCountdown = ({ birthdayDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const birthday = new Date(birthdayDate);

      // Adjust year if birthday has already passed this year
      if (now > birthday) {
        birthday.setFullYear(now.getFullYear() + 1);
      }

      const difference = birthday - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const timerId = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timerId); // Clean up interval on unmount
  }, [birthdayDate]);

  return (
    <div className="text-center">
      <h3 className="text-lg font-bold mb-2">Countdown to Birthday</h3>
      <p className="text-2xl font-semibold">
        {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m :{" "}
        {timeLeft.seconds}s
      </p>
    </div>
  );
};

export default BirthdayCountdown;
