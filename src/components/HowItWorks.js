// Install the required packages if not already done
// npm install react bootstrap tailwindcss

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import selectRole from "../assets/Group 33.png"
import search from "../assets/Layer_x0020_1.png"
import edit from "../assets/edit (1) 1.png"
import support from "../assets/Group (2).png"
import edit2 from "../assets/Group (1).png"
import file from "../assets/Group.png"

const HowItWorks = () => {
  return (
    <div className="container mx-auto py-16 text-center">
      <h1 className="text-2xl font-bold mb-4">How it works?</h1>
      <p className="text-gray-600 text-center w-[839px] m-auto text-xl mb-12">
        Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.
      </p>
      
      <div className="row g-0 pt-10">
        {/* Card 1 */}
        <div className="col-md-4" >
          <div className="p-6 bg-[#E8FBFF]">
          <div className="flex flex-col items-center justify-center mb-4 text-center">
  <img height={74.35} width={74.35} src={selectRole} alt="select" />
  <h5 className="font-semibold mb-9 mt-4">Select Your Role and Sign Up</h5>
</div>

          
         
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4" >
          <div className="p-6 bg-white">
          <div className="flex flex-col items-center justify-center mb-4 text-center">
  <img height={74.35} width={74.35} src={file} alt="select" />
  <h5 className="font-semibold mb-2 mt-4">Buyers Post Your Requirements</h5>
</div>
</div>
</div>

        {/* Card 3 */}
        <div className="col-md-4" >
          <div className="p-6 bg-[#E8FBFF]">
          <div className="flex flex-col items-center justify-center mb-4 text-center">
  <img height={74.35} width={74.35} src={search} alt="select" />
  <h5 className="font-semibold mb-2 mt-4"> Review, Select, and Contact the Best Suppliers</h5>
</div>
</div>
</div>

      

        {/* Card 4 */}
        <div className="col-md-4" >
          <div className="p-6 bg-white">
          <div className="flex flex-col items-center justify-center mb-4 text-center">
  <img height={74.35} width={74.35} src={edit} alt="select" />
  <h5 className="font-semibold mb-2 mt-4"> Suppliers Complete your profile and get notified for opportunities</h5>
</div>
</div>
</div>
          {/* Card 5 */}
          <div className="col-md-4" >
          <div className="p-6 bg-[#E8FBFF]">
          <div className="flex flex-col items-center justify-center mb-4 text-center">
  <img height={74.35} width={74.35} src={edit2} alt="select" />
  <h5 className="font-semibold mb-2 mt-4">Contact to Buyers and Share your Quote for the service</h5>
</div>
</div>
</div>
          {/* Card 5 */}
          <div className="col-md-4" >
          <div className="p-6 bg-white">
          <div className="flex flex-col items-center justify-center mb-4 text-center">
  <img height={74.35} width={74.35} src={support} alt="select" />
  <h5 className="font-semibold mb-2 mt-4">Both the Parties can Connect and Make Business Leave a Feedback</h5>
</div>
        
      </div>
      </div>
      </div>
    </div>
  );
};

export default HowItWorks;
