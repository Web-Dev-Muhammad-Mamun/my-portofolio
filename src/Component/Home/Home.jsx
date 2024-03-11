import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import hero from "../../../public/profile.png";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      id="home"
      className="max-w-screen-lg mx-auto flex flex-col lg:flex-row md:flex-row md:h-[600px] md:mb-[-400px] lg:mb-[0px] md:px-10 items-center justify-between px-4 h-screen"
    >
      {/*  */}
      <div className="mt-16 ">
        {/*  */}
        <h1 className=" text-2xl sm:text-[2.5rem] font-bold text-[#454240] mt-10 mx-auto leading-10">
          I'm Mamun and I love <br></br> to{" "}
          <span className=" ml-4 text-[#ec5151a9] lg:text-5xl md:text-2xl">
            <Typewriter
              words={[`"Work Hard"`, "", `"Learn"`, `"Explore"`]}
              loop={9999}
              cursor="none"
              typeSpeed={200}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className="text-[#7c7874] py-4 max-w-md">
          Hey there! I'm a front-end developer, turning designs into smooth and
          engaging websites. Proficient in HTML, CSS, and JavaScript, I'm all
          about creating visually stunning and responsive user interfaces. I
          love collaborating with designers to bring ideas to life. Continuously
          learning and staying up-to-date, I'm passionate about delivering
          top-notch web experiences. Let's craft something awesome!
        </p>

        <div>
          <Link
            to="portfolio"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-60}
            duration={1000}
            className="group text-white w-fit px-6 py-3 my-5 flex items-center rounded-md bg-gradient-to-r from-[#afaaa6] to-[#45514f] cursor-pointer"
          >
            Portfolio
            <span className="group-hover:rotate-90 duration-300">
              {" "}
              <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
            </span>
          </Link>
        </div>
      </div>
      <div className="md:w-[35%] mt-24 mb-4 md:order-1">
        <img
          className="box-shadow-animation rounded-2xl mx-auto md:w-full transition-shadow"
          src={hero}
          alt="my profile picture"
        />
      </div>
    </div>
  );
};

export default Home;
