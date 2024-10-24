import React from 'react';
import weddingImage from '../assets/wedding.jpg'; // Use appropriate image path

const ImageSection = () => {
  return (
    <div className="lg:w-1/2 p-5 bg-slate-300">
      <img src={weddingImage} alt="Wedding" className="rounded-lg shadow-lg w-full object-cover" />
    </div>
  );
};

export default ImageSection;
