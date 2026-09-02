import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar fixed top-0 left-0 z-50 w-full bg-transparent px-5 py-4 md:px-10">

      {/* Logo */}
      <div className="navbar-start">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-white/"
        >
          wander<span className="text-[#c785ec]">Soul</span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 rounded-full border border-[#d8b4fe]/15 bg-white/45 px-2 backdrop-blur-md">

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `rounded-full px-5 py-2 text-sm transition ${
                  isActive
                    ? "bg-[#c785ec] text-white"
                    : "text-[#3b2057] hover:bg-[#7c3aed]/10 hover:text-[#7c3aed]"
                }`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/explore"
              className={({ isActive }) =>
                `rounded-full px-5 py-2 text-sm transition ${
                  isActive
                    ? "bg-[#c785ec] text-white"
                    : "text-[#3b2057] hover:bg-[#7c3aed]/10 hover:text-[#7c3aed]"
                }`
              }
            >
              Explore
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/trips"
              className={({ isActive }) =>
                `rounded-full px-5 py-2 text-sm transition ${
                  isActive
                    ? "bg-[#c785ec] text-white"
                    : "text-[#3b2057] hover:bg-[#7c3aed]/10 hover:text-[#7c3aed]"
                }`
              }
            >
              My Trips
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `rounded-full px-5 py-2 text-sm transition ${
                  isActive
                    ? "bg-[#c785ec] text-white"
                    : "text-[#3b2057] hover:bg-[#7c3aed]/10 hover:text-[#7c3aed]"
                }`
              }
            >
              About
            </NavLink>
          </li>

        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end">

        <Link
          to="/plan"
          className="btn hidden rounded-full border-0 bg-[#c785ec] px-6 text-white hover:bg-[#6d28d9] sm:flex"
        >
          Plan a Trip
          <span>↗</span>
        </Link>

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end lg:hidden">

          <button
            tabIndex={0}
            className="btn btn-circle btn-ghost border border-[#7c3aed]/15 bg-white/45 text-[#3b2057] backdrop-blur-md"
          >
            ☰
          </button>

          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 w-52 rounded-2xl border border-[#7c3aed]/15 bg-white/90 p-3 text-[#3b2057] shadow-xl backdrop-blur-md"
          >
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/explore">Explore</Link>
            </li>

            <li>
              <Link to="/trips">My Trips</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li className="mt-2">
              <Link
                to="/plan"
                className="btn rounded-xl border-0 bg-[#7c3aed] text-white hover:bg-[#6d28d9]"
              >
                Plan a Trip
              </Link>
            </li>
          </ul>

        </div>

      </div>
    </div>
  );
};

export default Navbar;