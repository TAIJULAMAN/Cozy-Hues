/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import {
  FaFacebook,
  FaFax,
  FaInstagram,
  FaPhoneVolume,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { IoMdMailUnread } from "react-icons/io";
import { Link } from "react-router-dom";
import CheakoutInput from "../Checkout/CheakoutInput";
import { useState } from "react";
import LowerHero from './../../Components/Home/LowerHero/LowerHero';

const HeaderContact = () => {
    const [formData, setFormData] = useState({
        nameValue: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
      });
    const handleEmailChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
    
    
  return (
    <div>
  <div className="flex flex-col lg:flex-row items-start justify-center gap-10 p-6 lg:px-28">
      {/* Left Side */}
      <div className="flex-1 space-y-6">
        <h2 className="text-5xl font-semibold text-gray-800 py-4">
          Get in touch
        </h2>
        <p className="text-xl font-medium text-gray-600 py-6">
          We're here for you every step of the way. Whether you have questions,
          need order assistance, or want to share feedback, our friendly
          customer support team is ready to assist. Our team is here to help!
          Reach out to us via
        </p>
        <div className="space-y-4 text-xl font-medium">
          <div className="flex items-center gap-3 ">
            
            <span className="w-9 h-8 bg-[#fff0e6] rounded-md">
              <IoMdMailUnread className="text-[#ff7132] ml-1.5 mt-1 text-2xl" />
            </span>
       
            <span className="text-gray-800 ">mdaminur.cc@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-9 h-8 bg-[#ebeeff] rounded-md">
              {" "}
              <FaPhoneVolume className="text-[#4a67ff] ml-1.5 mt-1 text-2xl" />{" "}
            </span>

            <span className="text-gray-800">+88 01405074838</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-9 h-8 bg-[#f4eefa] rounded-md">
              {" "}
              <FaFax className="text-[#8c4cce] ml-1.5 mt-1 text-2xl" />
            </span>

            <span className="text-gray-800">(401) 279-9587</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-9 h-8 bg-[#e7f7ef] rounded-md">
              {" "}
              <HiOutlineBuildingOffice className="text-[#22b463] ml-1.5 mt-1 text-2xl" />
            </span>

            <span className="text-gray-800">
              5678 Seltice Way Coeur D Alene
            </span>
          </div>
        </div>
        <div>
          <h3 className="text-3xl mt-12 mb-4 font-semibold text-gray-800">
            Stay Connected
          </h3>
          <div className="flex space-x-4 mt-2 text-2xl text-[#b18d49]">
            <Link to="#" className="">
              <FaInstagram />
            </Link>
            <Link to="#" className="">
              <FaTwitter />
            </Link>
            <Link to="#" className="">
              <FaFacebook />
            </Link>
            <Link to="#" className="">
              <FaPinterest />
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1  bg-[#2d5356] text-white p-8 rounded-lg">
        <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
        <form>
  <div className="space-y-4 ">
    <CheakoutInput
      label="Name"
      type="text"
      name="name"
      placeholder="Enter your name"
    //   value={formData.nameValue} 
      onChange={handleEmailChange} 
      required={true}
      additionalClasses="px-4 py-3 mt-1 bg-[#365e61] focus:bg-white text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
    />
    
    <CheakoutInput
      label="Email Address"
      type="email"
      name="email"
      placeholder="Enter your email"
    //   value={emailValue} 
      onChange={handleEmailChange} 
      required={true}
      additionalClasses="px-4 py-3 mt-1 bg-[#365e61] focus:bg-white text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
    />
    
    <CheakoutInput
      label="Phone Number"
      type="text"
      name="phone"
      placeholder="Enter your phone number"
    //   value={phoneValue} 
      onChange={handleEmailChange} 
      required={true}
      additionalClasses="px-4 py-3 mt-1 bg-[#365e61] focus:bg-white text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
    />
    
    <CheakoutInput
      label="Message"
      type="text"
      name="message"
      placeholder="Enter your message"
    //   value={messageValue}
      onChange={handleEmailChange} 
      required={true}
      additionalClasses="h-28 px-4 py-3 mt-1 bg-[#365e61] focus:bg-white text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" 
    />
  </div>
  
<div className="w-full flex justify-center py-12">
<button
    type="submit"
    className="mt-6 bg-[#e9b03b] w-2/4 py-2 rounded-xl font-bold hover:bg-yellow-500 transition-colors  "
  >
    Submit
  </button>
</div>
</form>

      </div>
     
    </div>
    <div className="my-12">
     <LowerHero/>
</div>
    </div>
  
  );
};

export default HeaderContact;
