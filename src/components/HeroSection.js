import React from 'react';

const HeroSection = () => {
  return (
    <section
    className="flex flex-col items-center justify-center text-center py-20 text-white"
    style={{
      backgroundImage: background,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
      <h1 className="text-4xl font-bold mb-4">Are You a Supplier? Explore Matching Opportunities.</h1>
      <div className="container mx-auto">
        <input
          type="text"
          placeholder="Search..."
          className="form-control w-1/2 mx-auto"
        />
        <button className="btn btn-primary mt-4">Explore</button>
      </div>
    </section>
  );
};

export default HeroSection;