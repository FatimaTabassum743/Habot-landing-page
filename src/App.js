// import React from 'react';
// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import CategorySection from './components/CategorySection';
// import VideoSection from './components/VideoSection';
// import SupplierFinder from './components/SupplierFinder';
// import HowItWorks from './components/HowItWorks';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <HeroSection />
//       <CategorySection />
//       <VideoSection />
//       <SupplierFinder />
//       <HowItWorks />
//       <Footer />
//     </div>
//   );
// }

// export default App;
// App.js
import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Add your Tailwind CSS imports here
import habot from "./assets/image.png";
import background from "./assets/background.png";
import CategorySection from "./components/CategorySection";
import VideoSection from "./components/VideoSection";
import SupplierFinder from "./components/SupplierFinder";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import searchbar from "./assets/Group 1 (2).png";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 py-3 shadow-md bg-white h-[86px]">
      <img src={habot} alt="habot" height={43} width={181} />

      {/* Hamburger Menu */}
      <button className="md:hidden" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Navigation Links */}
      <div className={`md:flex md:space-x-6 text-lg ${isOpen ? 'block' : 'hidden'} md:block`}>
        <a href="#" className="text-gray-700 no-underline">
          Find Suppliers
        </a>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-gray-700 no-underline"
          >
            Find Service Tags
          </button>
          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 1</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 2</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 3</a>
            </div>
          )}
        </div>
        <button className="btn btn-outline-success">Login / Sign Up</button>
      </div>
    </nav>

      {/* Hero Section */}
      <section
        className="flex flex-col items-center justify-center text-center py-20 text-white"
        style={{
          backgroundImage: `linear-gradient(356.01deg, rgba(7, 47, 87, 0.75) 50.8%, rgba(7, 47, 87, 0) 94.58%), linear-gradient(0deg, rgba(7, 47, 87, 0.45), rgba(7, 47, 87, 0.45)), url(${background})`,
          // backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-4xl font-bold mb-4">Are You a Supplier?</h2>
        <p className="text-2xl mb-8">Explore Matching Opportunities.</p>

        {/* Search Boxes */}
        <div className="flex gap-4 items-center max-w-2xl w-full px-4">
          {/* <input
            type="text"
            placeholder="Search your required service here"
            className="form-control p-2 rounded-md shadow-sm flex-grow"
          />
          <input
            type="text"
            placeholder="Search your desired location here"
            className="form-control p-2 rounded-md shadow-sm flex-grow"
          />
          <button className="btn btn-success px-3 py-2">Search</button> */}
          <img src={searchbar} alt="search"></img>
        </div>

        <p className="text-white mt-8 ">
          <b>Are you a buyer?</b>{" "}
          <a href="#" className="underline text-white">
            Click here if you are looking to post a requirement
          </a>
        </p>
      </section>
      <CategorySection />
      <VideoSection />
      <SupplierFinder />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;

