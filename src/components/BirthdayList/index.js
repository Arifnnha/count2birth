"use client";

import BirthdayCountdown from "../BirthdayCountdown";

const BirthdayList = ({ birthdays }) => {
  return (
    <div className="p-4 space-y-4">
      {birthdays.map((friend, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center bg-purple-100 p-4 rounded shadow-md"
        >
          <div className="text-center">
            <h3 className="text-lg font-bold">{friend.name}</h3>
            <p>{friend.date}</p>
          </div>
          <BirthdayCountdown birthdayDate={friend.date} />
        </div>
      ))}
    </div>
  );
};

export default BirthdayList;
