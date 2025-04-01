import { Link } from "@tanstack/react-router";
import React from "react";

const Navbar = () => {
  return (
    <div className="shadow-md p-5">
      <ul className="flex flex-row justify-start gap-5">
        <Link to="/" activeProps={{ className: "font-bold" }}>
          Home
        </Link>
        <Link to="/about" activeProps={{ className: "font-bold" }}>
          About
        </Link>
        <Link to="/contact" activeProps={{ className: "font-bold" }}>
          Contact
        </Link>
        <Link to="/users" activeProps={{ className: "font-bold" }}>
          Users
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
