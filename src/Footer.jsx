import logo from "../src/assets/images/logo.png";
import name from "../src/assets/images/name.png";

const Footer = () => {
  return (
    <footer className="bg-yellow-300 dark:bg-yellow-300/90 font-poppins">
      <div className="max-w-screen-xl mx-auto p-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-16" />
          <img src={name} className="w-25 ml-0" />
        </div>

        <div className="text-pink-500 text-sm text-center md:text-right">
          © {new Date().getFullYear()} Pink Paradise. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
