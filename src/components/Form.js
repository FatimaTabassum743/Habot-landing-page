import React, { useState } from "react";
import wedding from "../assets/wedding.jpg";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    mobile: "",
    email: "",
    gender: "",
    dob: "",
    maritalStatus: "Unmarried",
    qualification: "",
    height: "",
    religion: "",
    caste: "",
    profession: "",
    captcha: "",
  });

  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.surname) newErrors.surname = "Surname is required";

    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.dob) newErrors.dob = "Date of Birth is required";
    if (!formData.qualification) newErrors.qualification = "Qualification is required";

    if (!formData.height) newErrors.height = "Height is required";
    if (!formData.religion) newErrors.religion = "Religion is required";
    if (!formData.caste) newErrors.caste = "Caste is required";
    if (!formData.profession) newErrors.profession = "Profession is required";
    if (formData.captcha !== "OZH8M2") newErrors.captcha = "Captcha is incorrect";

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setIsModalOpen(true); // Show modal on success
      setFormData({
        name: "",
        surname: "",
        mobile: "",
        email: "",
        gender: "",
        dob: "",
        maritalStatus: "Unmarried",
        qualification: "",
        height: "",
        religion: "",
        caste: "",
        profession: "",
        captcha: "",
      }); // Reset form
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="min-h-screen bg-yellow-300">
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <h2 className="text-xl font-bold mb-4">Successfully Registered!</h2>
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Main section with image and overlay form */}
      <div className="relative">
        <img
          src={wedding}
          alt="Marriage"
          className="w-full h-[70vh] object-cover"
        />

        <div className="absolute top-0 right-0 bg-white p-4 shadow-lg w-[40vw]  h-[90vh] overflow-y-auto m-2">
          <h2 className=" text-center text-xl font-bold mb-1 text-orange-300">
            Register Free & Get Your Matched Partner
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Name and Surname */}
            <div className="flex mb-1">
              <label className="w-1/2 mr-2">Enter your name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Enter your name"
                onChange={handleChange}
                className="flex-1 p-1 border border-gray-300 rounded"
              />
              {errors.name && <span className="text-red-600 text-sm">{errors.name}</span>}
            </div>
            <div className="flex mb-1">
              <label className="w-1/2 mr-2">Enter your surname</label>
              <input
                type="text"
                name="surname"
                value={formData.surname}
                placeholder="Enter your surname"
                onChange={handleChange}
                className="flex-1 p-1 border border-gray-300 rounded"
              />
              {errors.surname && <span className="text-red-600 text-sm">{errors.surname}</span>}
            </div>

            {/* Mobile Number */}
           
            <div className="flex">
              <label className="mr-2 w-1/2">Enter mobile number</label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                placeholder="Enter mobile number"
                onChange={handleChange}
                className="flex-1 p-1 border border-gray-300 rounded"
              />
         
              {errors.mobile && <span className="text-red-600 text-sm">{errors.mobile}</span>}
            </div>
            <div className="flex">
              <label className="mr-2 w-1/2"></label>
              <h2 className=" float-right text-l flex-1 p-1 text-blue-400">
            Click <Link to="/" className="text-red-300">Here</Link> To Verify Mobile 
          </h2>
            </div>
          
         
          
            

            {/* Email */}
            <div className="flex mb-1">
              <label className="w-1/2 mr-2">Enter your email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Enter your email"
                onChange={handleChange}
                className="flex-1 p-1 border border-gray-300 rounded"
              />
              {errors.email && <span className="text-red-600 text-sm">{errors.email}</span>}
            </div>

            {/* Gender Selection */}
            <div className="flex mb-1">
              <label className="w-1/2 mr-2">Gender</label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    id="male"
                    onChange={handleChange}
                  />
                  <label htmlFor="male" className="ml-1">Male</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    id="female"
                    onChange={handleChange}
                  />
                  <label htmlFor="female" className="ml-1">Female</label>
                </div>
              </div>
              {errors.gender && <span className="text-red-600 text-sm">{errors.gender}</span>}
            </div>

            {/* Date of Birth */}
            <div className="flex mb-1">
              <label className="w-1/2 mr-2">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="flex-1 p-1 border border-gray-300 rounded"
              />
              {errors.dob && <span className="text-red-600 text-sm">{errors.dob}</span>}
            </div>

            {/* Marital Status */}
            <div className="flex mb-1">
              <label className="w-1/2 mr-2">Marital Status</label>
              <select
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
                className="flex-1 p-1 border border-gray-300 rounded"
              >
                <option value="Unmarried">Unmarried</option>
                <option value="Married">Married</option>
              </select>
            </div>

            {/* Qualification */}
            <div className="flex mb-1">
              <label className="w-1/2 mr-2">Qualification</label>
              <input
                type="text"
                name="qualification"
                value={formData.qualification}
                placeholder="Enter your qualification"
                onChange={handleChange}
                className="flex-1 p-1 border border-gray-300 rounded"
              />
              {errors.qualification && <span className="text-red-600 text-sm">{errors.qualification}</span>}
            </div>

            {/* Select Dropdowns */}
            <div className="flex mb-1">
              <label className="w-1/2 mr-2">Height</label>
              <select
                name="height"
                value={formData.height}
                onChange={handleChange}
                className="flex-1 p-1 border border-gray-300 rounded"
              >
                <option value="">Select Height</option>
                <option value="5'0">5'0</option>
                <option value="5'5">5'5</option>
                <option value="6'0">6'0</option>
              </select>
              {errors.height && <span className="text-red-600 text-sm">{errors.height}</span>}
            </div>

            <div className="flex mb-1">
              <label className="w-1/2 mr-1">Religion</label>
              <select
                name="religion"
                value={formData.religion}
                onChange={handleChange}
                className="flex-1 p-1 border border-gray-300 rounded"
              >
                <option value="">Select Religion</option>
                <option value="Hindu">Hindu</option>
                <option value="Christian">Christian</option>
                <option value="Muslim">Muslim</option>
              </select>
              {errors.religion && <span className="text-red-600 text-sm">{errors.religion}</span>}
            </div>

            <div className="flex mb-1">
              <label className="w-1/2 mr-2">Caste</label>
              <select
                name="caste"
                value={formData.caste}
                onChange={handleChange}
                className="flex-1 p-1 border border-gray-300 rounded"
              >
                <option value="">Select Caste</option>
                <option value="General">General</option>
                <option value="OBC">OBC</option>
                <option value="SC/ST">SC/ST</option>
              </select>
              {errors.caste && <span className="text-red-600 text-sm">{errors.caste}</span>}
            </div>

            <div className="flex mb-1">
              <label className="w-1/2 mr-2">Profession</label>
              <select
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                className="flex-1 p-1 border border-gray-300 rounded"
              >
                <option value="">Select Profession</option>
                <option value="Engineer">Engineer</option>
                <option value="Doctor">Doctor</option>
                <option value="Teacher">Teacher</option>
              </select>
              {errors.profession && <span className="text-red-600 text-sm">{errors.profession}</span>}
            </div>

            {/* Captcha */}
            <div className="flex mb-1">
              <label className="w-1/2 mr-2"></label>
              <h2
              
            
                className="flex-1 p-1 font-bold text-center"
              >O Z H 8 M 2</h2>
              
            </div>
            <div className="flex mb-1">
              <label className="w-1/2 mr-2">Enter Captcha</label>
              <input
                type="text"
                name="captcha"
                value={formData.captcha}
                placeholder="Enter Captcha"
                onChange={handleChange}
                className="flex-1 p-1 border border-gray-300 rounded"
              />
              {errors.captcha && <span className="text-red-600 text-sm">{errors.captcha}</span>}
            </div>
            <div className="flex mb-1 justify-between">
              <label className=" mr-2 text-red-300 font-semibold">Verify Mobile is Mandatory Registration</label>
              <button
                type="submit"
               
              
                className="flex-1 p-1 border bg-red-400 text-white"
              >Register</button>
           
            </div>

           
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
