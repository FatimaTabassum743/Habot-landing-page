import React from 'react';

const CategorySection = () => {
  return (
<section className="container mx-auto my-8 text-center grid grid-cols-2 justify-between gap-48">        <div>
      <h2 className="text-2xl font-bold mb-4">Ready to Dive into HABOT?</h2>
      <p className="text-gray-600 text-start">Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</p>
      <button type="button" class="btn btn-success text-start text-lg float-start">Sign Up Today →</button>
      </div>
      <div className="flex flex-col items-center mt-4 space-y-2 text-center">
  <div className="flex justify-center space-x-2">
    <button type="button" className="btn btn-outline-warning w-40 hover-arrow">Abu Dhabi</button>
    <button type="button" className="btn btn-outline-warning w-40 hover-arrow">Dubai</button>
  </div>
  <div className="flex justify-center space-x-2">
    <button type="button" className="btn btn-outline-warning w-40 hover-arrow">Sharjah & Ajman</button>
    <button type="button" className="btn btn-outline-warning w-40 hover-arrow">Fujairah</button>
  </div>
  <div className="flex justify-center space-x-2">
    <button type="button" className="btn btn-outline-warning w-40 hover-arrow py-2">Fujairah</button>
    <button type="button" className="btn btn-outline-warning w-40 hover-arrow">Umm Al Quwain</button>
  </div>
</div>

    </section>
  );
};

export default CategorySection;