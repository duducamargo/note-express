import { Link } from "react-router-dom";
import logo from "../../public/favicon.png";

function NavBar() {
  return (
    <nav>
      <li className="list-none">
        <Link to="/">
          <img
            className="absolute w-[85px] p-1 ml-6 md:ml-24 mt-[-13px] hover:opacity-70 hover:duration-[0.2s]"
            src={logo}
            alt="logo"
          />
        </Link>
      </li>
      <ul className="bg-slate-800/10 flex justify-end py-4 px-4 text-slate-200  ">
        <li className="mx-4 md:mr-8  hover:text-slate-400 ">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-4 md:mr-8 hover:text-slate-400">
          <Link to="/notes">Notes</Link>
        </li>
        <li className="mx-4 md:mr-8 hover:text-slate-400">
          <Link to="/aboutus">About Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
