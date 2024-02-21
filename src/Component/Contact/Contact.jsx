import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your form submission logic, for now, let's just clear the form data
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div id="contact" className="w-full h-screen ">
      <div className=" flex flex-col p-4 justify-center max-w-screen-lg mx-auto mt-6">
        <div className="pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            action="https://getform.io/f/xboMMzeg"
            method="POST"
            className="flex flex-col w-full md:w-1/2 "
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className=" p-2 bg-transparent border-2 rounded-md focus:outline-none "
              placeholder="Enter Your Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 my-4 bg-transparent border-2 rounded-md focus:outline-none "
              placeholder="Enter Your Email"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="10"
              placeholder="Enter Your Message"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none "
            />
            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 mt-6 px-6 py-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300 "
            >
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
