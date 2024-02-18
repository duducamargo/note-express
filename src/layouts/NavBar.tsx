import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul className="bg-slate-800/20 flex justify-end py-4 px-4 text-slate-200  ">
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
