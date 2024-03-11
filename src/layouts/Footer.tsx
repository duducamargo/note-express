import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="fixed bottom-0 w-full  text-slate-200">
      <ul className="flex justify-center list-none text-slate-200 ">
        <li className="mx-8 my-4">
          <Link to="https://www.instagram.com/dudu__farias_/">
            <FaInstagram className="text-3xl cursor-pointer hover:text-slate-400" />
          </Link>
        </li>
        <li className="mx-8 my-4">
          <Link to="https://www.linkedin.com/in/eduardo-farias-camargo-7347612b0/">
            <FaLinkedin className="text-3xl cursor-pointer hover:text-slate-400" />
          </Link>
        </li>
        <li className="mx-8 my-4">
          <Link to="https://github.com/duducamargo">
            <FaGithub className="text-3xl cursor-pointer hover:text-slate-400" />
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
