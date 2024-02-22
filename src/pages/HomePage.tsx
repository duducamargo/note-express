import { Link } from "react-router-dom";
import paperplane from "../../public/paperplane.png";

function HomePage() {
  return (
    <div className="flex justify-center  text-slate-200 cursor-default ">
      <div className=" flex flex-col mx-auto bg-sky bg-no-repeat bg-center bg-cover mt-8 p-1 border-[1px] border-white/20 rounded-[10px] md:px-4">
        <img
          src={paperplane}
          className="absolute w-40 mt-80 ml-[400px] md:ml-[550px] md:mt-72"
        ></img>
        <h1 className="text-6xl mb-9 mt-16 mx-auto">The Best Notes Site.</h1>
        <p className=" text-slate-100/70 text-xl mb-9 justify-center w-[600px] md:w-[800px] text-center">
          Unlock the power of organization and productivity with our
          cutting-edge note-taking platform. Designed with simplicity and
          efficiency in mind, our site offers the most seamless experience for
          jotting down your thoughts, ideas, and to-do lists.
        </p>
        <div className="flex  justify-center">
          <Link to="/notes">
            <button
              className="px-9 py-5 bg-slate-900/70 mt-6 md:mt-12 rounded-lg border-2 border-slate-300 text-xl
            hover:border-slate-900 hover:text-slate-900 hover:bg-slate-300 hover:duration-[0.6s] hover:animate-pulse mb-12 md:mb-16"
            >
              Get Started!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
