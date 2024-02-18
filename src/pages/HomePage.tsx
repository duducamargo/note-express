import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex justify-center   text-slate-200 cursor-default">
      <div className=" flex flex-col mx-auto">
        <h1 className="text-6xl mb-9 mt-24 mx-auto">The Best Notes Site.</h1>
        <p className=" text-slate-200/50 text-xl mb-9 justify-center w-[600px] md:w-[800px] text-center">
          Unlock the power of organization and productivity with our
          cutting-edge note-taking platform. Designed with simplicity and
          efficiency in mind, our site offers the most seamless experience for
          jotting down your thoughts, ideas, and to-do lists.
        </p>
        <div className="flex  justify-center">
          <Link to="/notes">
            <button
              className="px-9 py-5 rounded-lg border-2 border-slate-300 text-xl
            hover:border-slate-900 hover:text-slate-900 hover:bg-slate-200 hover:duration-[0.4s] "
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
