import React from "react";
import { MdLocationPin } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

function Contact() {
  return (
    <section className="send-us min-h-screen bg-white m-10  px-4 py-8 shadow-2xl text-[#d07635]">
      <div className="container text-2xl mb-6 text-center">
        <h2 className=" font-bold py-2">Send Us</h2>
        <p>
          Contact us for all quesitions and opinions, or you can solve your
          problem in a shorter time with our contact
          <br /> offices.{" "}
        </p>
      </div>

      <div className="grid container  lg:grid-cols-2 p-4 w-full ">
        <form className="bg-white p-6  rounded-lg shadow-md w-full max-w-md">
          <div className="flex flex-col md:flex-row w-full gap-4">
            <div className="mb-4 w-full md:w-1/2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                type="text"
                id="name"
                placeholder="Name"
              />
            </div>

            <div className="mb-4 w-full md:w-1/2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                type="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone number
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
              type="tel"
              id="phone"
              placeholder="Phone number"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Your message
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 h-24 resize-none"
              id="message"
              placeholder="Your message"
            ></textarea>
          </div>

          <button
            className="w-1/2 bg-[#d07635] hover:bg-orange-500 text-white p-2 rounded-md  transition duration-200"
            type="submit"
          >
            Send Message
          </button>
        </form>

        <div className=" grid grid-cols-1 md:grid-cols-1 gap-3  ">
          <div className=" flex items-center">
            <div className="flex items-center">
              <span className="text-gray-600 text-2xl flex items-center justify-center h-8 w-12 ">
                <MdLocationPin className="hover:text-orange-500 cursor-pointer" />
              </span>
              <h3 className="text-lg font-semibold"> Address</h3>
            </div>
            <p className="mt-2 text-gray-600 ml-5">
              Al-Madfaiyah Park, Rocket Garden Street, Sheraton entrance from
              Suez Road, in front of Parking 4 and a half, Masakin.
            </p>
          </div>

          <div className=" flex items-center">
            <div className="flex items-center">
              <span className="text-gray-600 text-2xl flex items-center justify-center h-8 w-12 ">
                <FiPhoneCall className="hover:text-orange-500 cursor-pointer" />
              </span>
              <h3 className="text-lg font-semibold"> Phone</h3>
            </div>
            <p className="mt-2 text-gray-600 ml-5">(012) 8005 5200</p>
          </div>

          <div className=" flex items-center">
            <div className="flex items-center">
              <span className="text-gray-600 text-2xl flex items-center justify-center h-8 w-12 ">
                <MdOutlineMail className="hover:text-orange-500 cursor-pointer" />
              </span>
              <h3 className="text-lg font-semibold"> Email</h3>
            </div>
            <p className="m-1 text-gray-600 ">
              admin@Hagoga .com <br />
              support@Hagoga .com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
