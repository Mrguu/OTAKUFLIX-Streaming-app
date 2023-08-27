import React, { useState } from "react";
import { UseDataContext } from "./MainData";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";

function Nav() {
  const [open, setOpen] = useState(false);
  const { handleSubmit, handleChange, search, searchAnime } = UseDataContext();

  let links = [
    { name: "Home", link: "/" },
    { name: "Popular", link: "/popularanime" },
    { name: "Airing", link: "/airing" },
    { name: "Up Coming", link: "/upcoming" },
  ];

  return (
    <div>
      <nav className="navbar fixed w-full navbar-expand-lg navbar-light bg-slate-950 p-3 flex justify-between items-center z-40">
        <img className="md:w-28 md:h-9 w-20 h-7" src={logo} alt="" />
        <div className="md:hidden text-red-700" onClick={() => setOpen(!open)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer absolute right-12 top-5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                open
                  ? "M6 18L18 6M6 6l12 12"
                  : "M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              }
            />
          </svg>
        </div>
        <div
          className={`absolute md:static md:flex  left-0 z-[-1] md:z-auto w-full md:w-auto bottom-0 md:right-0  w-full bg-slate-950 top-14 text-center md:transition-none transition-all ease-in duration-700 ${
            open ? "top-10 opacity-0" : "top-[-500px]"
          } opacity-100 md:opacity-100`}>
          <form action="">
            <Link to="/popularanime" className="flex items-center w-full">
              <input
                type="text"
                placeholder="Search anime ...."
                className="px-2 md:py-1 md:w-auto w-9/12 md:h-auto h-7 ml-4 md:h-auto h-5 md:w-auto md:rounded-2xl bg-slate-700 border-none text-xs text-red-100"
                value={search}
                onChange={handleChange}
              />

              <button
                type="submit"
                className="md:px-2 w-2/12 md:h-auto md:w-auto h-7 p-1 md:py-1 text-xs md:rounded-xl bg-red-700 text-red-100 md:font-bold md:ml-2"
                onClick={handleSubmit}>
                Search
              </button>
            </Link>
          </form>
          <ul className={`md:flex justify-around`}>
            {links.map((link) => (
              <li
                key={link.name}
                className="bg-slate-950 text-xs text-red-700 font-bold cursor-pointer py-2 md:py-0 md:ml-5 border-b md:border-b-0 hover:text-red-100">
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
