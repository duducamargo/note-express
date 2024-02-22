import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

function AboutUsPage() {
  return (
    <div className="text-slate-200 w-5/6 mx-auto">
      <h1 className="text-center text-3xl my-4">About Us</h1>
      <h2 className="mb-2 text-2xl text-slate-200/70">Our Mission</h2>
      <p className="mb-2">
        Our mission is to provide a user-friendly platform that empowers
        individuals to capture, organize, and access their notes anytime,
        anywhere. We strive to continually innovate and improve our services to
        meet the evolving needs of our users.
      </p>
      <h2 className="my-4 text-2xl text-slate-200/70">Connect With Us</h2>
      <p className="mb-2 ">
        Follow us on social media to stay updated with the latest news, tips,
        and features:
      </p>
      <ul className="flex flex-col">
        <Link to="https://www.instagram.com/dudu__farias_/">
          <li className="hover:text-slate-200/90 w-40 my-2 flex">
            <FaInstagram className="text-xl text-slate-200/70" />:
            @dudu__farias_
          </li>
        </Link>
        <Link to="https://github.com/duducamargo">
          <li className="hover:text-slate-200/90 w-36 mb-2 flex">
            <FaGithub className="text-xl text-slate-200/70" />: duducamargo
          </li>
        </Link>
        <Link to="https://www.linkedin.com/in/eduardo-farias-camargo-7347612b0/">
          <li className="hover:text-slate-200/90 w-[220px] mb-2 flex ">
            <FaLinkedin className="text-xl text-slate-200/70" />: Eduardo Farias
            Camargo
          </li>
        </Link>
      </ul>
      <h3 className="my-4 text-2xl text-slate-200/70">Contact Us</h3>
      <p className="mt-2">
        Have a question, feedback, or suggestion? We'd love to hear from you!
        Reach out to us at{" "}
        <span className="text-slate-200/70">edu.farias.camargo@gmail.com</span>
      </p>
      <h2 className="mt-10 mb-20 md:mb-0 text-xl text-center">
        Thank you for choosing{" "}
        <span className="text-slate-200/70">NoteExpress</span> for your
        note-taking needs. Happy note-taking!
      </h2>
    </div>
  );
}

export default AboutUsPage;
