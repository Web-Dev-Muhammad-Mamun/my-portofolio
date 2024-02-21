import React from "react";

const contact = () => {
  return (
    <div id="contact" className="w-full h-screen ">
      <div className=" flex flex-col p-4 justify-center max-w-screen-lg mx-auto mt-6">
        <div className="pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="
        " className="flex flex-col w-full md:w-1/2 "
          >
            <input
              type="text"
              name="name"
              className=" p-2 bg-transparent border-2 rounded-md focus: outline-none "
              placeholder="Enter Your Name"
            />
            <input
              type="email"
              name="email"
              className="p-2 my-4 bg-transparent border-2 rounded-md focus: outline-none "
              placeholder="Enter Your Email"
            />
            <textarea
              name="message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md focus: outline-none "
            >
              {" "}
            </textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 mt-6 px-6 py-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300 ">
Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default contact;
