import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar fixed top-0 left-0 z-50 w-full bg-transparent px-5 py-4 md:px-10">

      {/* Logo */}
      <div className="navbar-start">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-white"
        >
          wander<span className="text-primary">Soul</span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 rounded-full border border-white/10 bg-black/20 px-2 backdrop-blur-md">

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `rounded-full px-5 py-2 text-sm transition ${
                  isActive
                    ? "bg-primary text-primary-content"
                    : "text-white/80 hover:bg-primary/15 hover:text-primary"
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
                    ? "bg-primary text-primary-content"
                    : "text-white/80 hover:bg-primary/15 hover:text-primary"
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
                    ? "bg-primary text-primary-content"
                    : "text-white/80 hover:bg-primary/15 hover:text-primary"
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
                    ? "bg-primary text-primary-content"
                    : "text-white/80 hover:bg-primary/15 hover:text-primary"
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
          className="btn btn-primary hidden rounded-full px-6 sm:flex"
        >
          Plan a Trip
          <span>↗</span>
        </Link>

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end lg:hidden">

          <button
            tabIndex={0}
            className="btn btn-circle btn-ghost border border-white/10 bg-black/20 text-white backdrop-blur-md"
          >
            ☰
          </button>

          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 w-52 rounded-2xl border border-white/10 bg-base-200 p-3 shadow-xl"
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
                className="btn btn-primary rounded-xl"
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