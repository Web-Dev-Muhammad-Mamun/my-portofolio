import pic from "../../../public/about (2).png";
const About = () => {
  return (
    <div id="about" className="mt-[30rem] lg:my-0 w-full flex justify-center">
      <div className="md:flex gap-10 justify-center lg:mt-24 mb-10 items-center ">
        <div name="about-pic" className="my-10 lg:my-0 md:w-[50%] px-4">
          <img
            className="box-shadow-animation duration-500 rounded-lg"
            src={pic}
            alt=""
          />
        </div>
        <div className="about-skill p-10 font-bold flex flex-col gap-10 border md:w-[20rem] h-[25rem] justify-around">
          <h4 className="flex items-center justify-center">Who Am I </h4>
          <p>Name : Muhammad Mamun</p>
          <p>Phone : +880 018 35 43 7888</p>
          <p>Address : Cox's Bazar, Bangladesh</p>
        </div>
      </div>
    </div>
  );
};

export default About;
