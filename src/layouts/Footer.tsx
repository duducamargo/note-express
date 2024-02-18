import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="fixed bottom-0 w-full  text-slate-200">
      <ul className="flex justify-center list-none text-slate-200 ">
        <li className="mx-8 my-4">
          <FaInstagram className="text-3xl cursor-pointer hover:text-slate-400" />
        </li>
        <li className="mx-8 my-4">
          <FaLinkedin className="text-3xl cursor-pointer hover:text-slate-400" />
        </li>
        <li className="mx-8 my-4">
          <FaGithub className="text-3xl cursor-pointer hover:text-slate-400" />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
