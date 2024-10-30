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
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Add your Tailwind CSS imports here
import habot from "./assets/image.png";
import background from "./assets/background.png"
import CategorySection from './components/CategorySection';
import VideoSection from './components/VideoSection';
import SupplierFinder from './components/SupplierFinder';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import searchbar from "./assets/Group 1 (2).png"

function App() {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 py-3 shadow-md bg-white h-[86px]">
        <img src={habot} alt='habot' height={43} width={181}></img>
        <div className="space-x-6 text-lg">
          <a href="#" className="text-gray-700 no-underline ">Find Suppliers</a>
          <a href="#" className="text-gray-700 no-underline">Find Service Tags</a>
          {/* <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></hr></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </li> */}

          <button className="btn btn-outline-success">Login / Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
    className="flex flex-col items-center justify-center text-center py-20 text-white"
    style={{
      backgroundImage: `linear-gradient(356.01deg, rgba(7, 47, 87, 0.75) 50.8%, rgba(7, 47, 87, 0) 94.58%), linear-gradient(0deg, rgba(7, 47, 87, 0.45), rgba(7, 47, 87, 0.45)), url(${background})`,
      // backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
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
          <img src={searchbar} alt='search'></img>
        </div>

        <p className="text-white mt-8 ">
          <b>Are you a buyer?</b> <a href="#" className="underline text-white">Click here if you are looking to post a requirement</a>
        </p>
      </section>
      <CategorySection/>
      <VideoSection />
      <SupplierFinder/>
      <HowItWorks/>
      <Footer/>
    </div>
  );
}

export default App;
