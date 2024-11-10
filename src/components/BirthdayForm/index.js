// src/app/components/BirthdayForm/index.js
import { useState } from "react";

const BirthdayForm = ({ addBirthday }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && date) {
      addBirthday({ name, date });
      setName("");
      setDate("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-lg font-medium">Nama</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="Nama teman"
          required
        />
      </div>
      <div>
        <label htmlFor="date" className="block text-lg font-medium">Tanggal Ulang Tahun</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>
      <button type="submit" className="w-full p-2 bg-purple-600 text-white rounded-md mt-4">
        Tambah Ulang Tahun
      </button>
    </form>
  );
};

export default BirthdayForm;
