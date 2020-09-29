import React from "react";
const NavBar = () => {
  return (
    <nav className="bg-indigo-300 shadow-lg">
      <div class="container mx-auto">
        <div className="sm:flex justify-between">
          <a className="text-white text-3xl font-bold p-3">Lava X</a>

          <ul className="text-white sm:self-center text-xl border-t sm:border-none">
            <li class="sm:inline-block">
              <a href="#" className="p-3 hover:text-primary">
                Home
              </a>
            </li>
            <li class="sm:inline-block">
              <a href="#" className="p-3 hover:text-primary">
                Services
              </a>
            </li>
            <li class="sm:inline-block">
              <a href="#" className="p-3 hover:text-primary">
                About
              </a>
            </li>
            <li class="sm:inline-block">
              <a href="#" className="p-3 hover:text-primary">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
