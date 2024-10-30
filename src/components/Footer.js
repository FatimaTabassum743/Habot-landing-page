import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import habot from "../assets/Group 4.png";
import list from "../assets/List.png";

const Footer = () => {
  return (
    <footer className="bg-[#123557] text-white py-8">
      <div className="container mx-auto">
        <div className="row">
          {/* Logo and Copyright */}
          <div className="col-md-3 mb-4">
            <div className="flex items-center text-white">

            <img src={habot} alt='habot' height={43} width={181}></img>
              {/* <div className="text-2xl font-bold mr-2">HABOT</div> */}
            </div>
            <p className="text-gray-400 mt-2">© R Singhania</p>
          </div>

          {/* Links */}
          <div className="col-md-6 mb-4 flex justify-between">
            <div>
              <h6 className="font-semibold">Company</h6>
              <ul className="list-unstyled mt-2 text-gray-300">
                <li><a href="#about" className="hover:text-gray-100 text-white no-underline">About</a></li>
                <li><a href="#faq" className="hover:text-gray-100 text-white no-underline">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold">Terms</h6>
              <ul className="list-unstyled mt-2 text-gray-300">
                <li><a href="#privacy" className="hover:text-gray-100 text-white no-underline">Data privacy</a></li>
                <li><a href="#terms" className="hover:text-gray-100 text-white no-underline">Terms</a></li>
                <li><a href="#accessibility" className="hover:text-gray-100 text-white no-underline">Accessibility</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold">Related</h6>
              <ul className="list-unstyled mt-2 text-gray-300">
                <li><a href="#buyer" className="hover:text-gray-100 text-white no-underline">Find Buyer</a></li>
                <li><a href="#feedback" className="hover:text-gray-100 text-white no-underline">Feedback</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="col-md-3 mb-4 flex justify-end float-end items-center space-x-4">
            <img src={list} alt='list'></img>
            {/* <a href="#linkedin" className=" hover:text-gray-100 text-white no-underline"><i className="fab fa-linkedin"></i></a>
            <a href="#twitter" className=" hover:text-gray-100 text-white no-underline"><i className="fab fa-twitter"></i></a>
            <a href="#facebook" className=" hover:text-gray-100 text-white no-underline"><i className="fab fa-facebook"></i></a>
            <a href="#instagram" className=" hover:text-gray-100 text-white no-underline"><i className="fab fa-instagram"></i></a> */}
          </div>
        </div> 
      </div>
    </footer>
  );
};

export default Footer;
