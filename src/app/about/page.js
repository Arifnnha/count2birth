"use client"; 

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg my-6 mt-20 md:mt-25">
        <h1 className="text-2xl font-bold text-center mb-6 text-purple-600">
          About Count2Birth
        </h1>
        <p className="text-lg mb-4">
          Count2Birth adalah aplikasi pengingat ulang tahun yang memungkinkan
          kamu untuk mencatat tanggal ulang tahun teman-teman dan menghitung
          mundur waktu hingga hari ulang tahun mereka.
        </p>
        <p className="text-lg">
          Dengan aplikasi ini, kamu dapat dengan mudah melacak ulang tahun
          teman-teman dan selalu ingat untuk memberikan ucapan ulang tahun pada
          waktunya!
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
