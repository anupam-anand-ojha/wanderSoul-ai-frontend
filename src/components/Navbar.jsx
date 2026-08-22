import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "My Trips", path: "/trips" },
    { name: "About", path: "/about" },
  ];

  return (
    <div className="navbar fixed top-0 left-0 z-50 w-full bg-transparent px-5 py-4 md:px-10">
      {/* Logo */}
      <div className="navbar-start">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-base-content"
        >
          wander<span className="text-primary">Soul</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 rounded-full border border-white/10 bg-black/20 px-2 backdrop-blur-md">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `rounded-full px-5 py-2 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-primary text-primary-content"
                      : "text-base-content/80 hover:bg-primary/15 hover:text-primary"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA + Mobile */}
      <div className="navbar-end gap-2">
        <Link
          to="/plan"
          className="btn btn-primary hidden rounded-full px-6 shadow-lg shadow-primary/20 sm:flex"
        >
          Plan a Trip
          <span>↗</span>
        </Link>

        <div className="dropdown dropdown-end lg:hidden">
          <button
            tabIndex={0}
            className="btn btn-circle btn-ghost border border-white/10 bg-black/20 backdrop-blur-md"
          >
            ☰
          </button>

          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] mt-3 w-52 rounded-2xl border border-white/10 bg-base-200 p-3 shadow-2xl"
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className="rounded-xl hover:bg-primary/15 hover:text-primary"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

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