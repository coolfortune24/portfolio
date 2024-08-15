import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Project1 from "../assets/img generator with api.png";
import Project2 from "../assets/Evernote_Hompage.png";
// import Project3 from "../assets/mortgage-cal.jpg";
// import Project4 from "../assets/stacks/project4.jpg";
import { DarkmodeContext } from "../contexts/darkmodeContext";
import { useContext } from "react";
const ProjectData = [
  {
    image: Project2,
    title: "Evernote Hompage",
    description:
      " This is a replication of the evernote hompage",
      url: "https://evernote-homepage.vercel.app/"
  },
  {
    image: Project1,
    title: "Image Viewer From API",
    description:
      "This generates images from your input. So just type in the types of images you want to see",
    url: "https://using-image-api-2gkd.vercel.app/",
  }
];

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const { darkMode } = useContext(DarkmodeContext);
  return (
    <div
      className={`dark:bg-[#0f172a]  w-full h-screen flex flex-col md:items-center items-start bg-[#ebebeb] overflow-hidden ${
        darkMode && "dark"
      }`}
    >
      <Navbar />
      <div className="md:h-[75%] md:mt-[35px] mt-[80px] h-full w-[80%] flex flex-col items-center md:gap-10 gap-5 ml-5">
        <div className="text-center md:mt-11 mt-0 flex flex-col md:items-center items-start w-full">
          <h1 className="font-bold md:text-2xl text-lg dark:text-neutral-200">
            Projects
          </h1>
          <p className="md:text-sm text-xs text-slate-600 dark:text-neutral-300">
            View my most recent projects
          </p>
        </div>
        <div className="md:w-[90%] cursor-grab w-full h-full ml-5 md:ml-0 mt-5 md:mt-0">
          <Slider {...settings}>
            {ProjectData.map((project, index) => {
              return <ProjectDetails data={project} key={index} />;
            })}
          </Slider>
        </div>

        <Footer />
      </div>
    </div>
  );
}

const ProjectDetails = (props) => {
  const { image, title, description, url } = props.data;
  return (
    <div className="md:mb-4 flex md:flex-row flex-col md:h-[300px] h-fit w-full justify-between md:gap-10 gap-5 md:px-5">
      <div className="md:w-[50%] w-full h-full rounded-md overflow-hidden md:shadow-lg shadow-none border border-[#6c54e3]">
        <img
          className="w-full h-full object-cover cursor-pointer"
          src={image}
          alt="project image"
        />
      </div>
      <div className="md:w-[50%] w-full flex flex-col gap-6 justify-center p-5">
        <h1 className="font-bold md:text-lg uppercase dark:text-neutral-200">
          {title}
        </h1>
        <p className="text-sm dark:text-neutral-200">{description}</p>
        <button className="flex flex-row gap-2 items-center mt-3 w-fit px-3 py-2 bg-[#6c54e3] text-white rounded-md text-sm outline-none dark:bg-[#5b04bc] border-0 hover:bg-[#8876e1] duration-150 transition-all">
          <Link to={url}>View Live</Link>
        </button>
      </div>
    </div>
  );
};

function Footer() {
  return (
    <footer className="dark:text-neutral-200 md:mt-8 text-xs  flex justify-center items-center p-3">
      {new Date().getFullYear()} <p> &copy; All rights reserved</p>
    </footer>
  );
}
