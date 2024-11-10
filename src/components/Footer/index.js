import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4">
      <div className="container mx-auto text-center text-white">
        <p className="text-sm">
          Made with <FaHeart className="inline text-red-500" /> by Count2Birth
          Team &copy; 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
