import React, { useState } from 'react';

const VideoSection = () => {
  const [activeTab, setActiveTab] = useState('buyer'); // Default active tab

  const points = {
    buyer: [
      ' You can negotiate prices.',
      ' You have access to exclusive deals.',
      ' You can receive personalized service.',
    ],
    supplier: [
      ' You can expand your customer base.',
      ' You can gain market insights.',
      ' You can benefit from bulk orders.',
    ],
  };

  return (
    <div className="video-section flex justify-between bg-[#072F57] w-[75vw] flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row h-[400px] m-auto p-16">
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video"
        className="mx-auto"
        allowFullScreen
      ></iframe>
      <div>
        <ul className="nav nav-underline">
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === 'buyer' ? 'active' : ''}`}
              onClick={() => setActiveTab('buyer')}
              style={{ color: activeTab === 'buyer' ? 'orange' : 'white',cursor:"pointer",  fontSize: "18px" }} // Active tab in orange, others in white
            >
              Buyer
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === 'supplier' ? 'active' : ''}`}
              onClick={() => setActiveTab('supplier')}
              style={{ color: activeTab === 'supplier' ? 'orange' : 'white',cursor:"pointer" }} // Active tab in orange, others in white
            >
              Supplier
            </a>
          </li>
        </ul>
        <div className="points mt-4">
          {points[activeTab].map((point, index) => (
            <div key={index} className="point-item flex items-center text-white"> {/* Set text color to white */}
              <span className="success-mark text-green-500 mr-2">✅</span> {/* Green check mark */}
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
