import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "My Trips", path: "/trips" },
    { name: "About", path: "/about" },
  ];

  return (
    <div className="navbar fixed left-0 top-0 z-50 w-full bg-transparent px-5 py-4 md:px-10">
      {/* Logo */}
      <div className="navbar-start">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-[#EE82EE]"
        >
          wander<span className="text-[#B69191]">Soul</span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 rounded-full border border-[#e9e0f2] bg-white/75 px-2 shadow-sm backdrop-blur-md">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-[#EE82EE] text-white shadow-sm"
                      : "text-[#3b2057] hover:bg-[#f3eaff] hover:text-[#7c3aed]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end">
        {/* Plan Button */}
        <Link
          to="/plan"
          className="hidden rounded-full bg-[#EE82EE] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#800080] hover:shadow-lg sm:flex sm:items-center sm:gap-1"
        >
          Plan a Trip
          <span>↗</span>
        </Link>

        {/* Mobile Navbar */}
        <div className="absolute left-3 right-3 top-4 z-50 lg:hidden">
          <div className="flex items-center justify-between rounded-full border border-white/15 bg-black/25 px-4 py-2.5 backdrop-blur-xl">
            <Link
              to="/"
              className="text-xl font-bold tracking-tight text-white"
            >
              wander<span className="text-[#EE82EE]">Soul</span>
            </Link>

            <div className="dropdown dropdown-end">
              <button
                tabIndex={0}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#24152f] shadow-lg"
              >
                ☰
              </button>

              <ul
                tabIndex={0}
                className="menu dropdown-content mt-3 w-52 rounded-2xl border border-white/20 bg-black/80 p-3 text-white shadow-2xl backdrop-blur-2xl"
              >
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="rounded-xl hover:bg-white/10 hover:text-[#EE82EE]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}

                <li className="mt-2">
                  <Link
                    to="/plan"
                    className="rounded-xl bg-gradient-to-r from-[#800080] to-[#EE82EE] text-center font-semibold text-white"
                  >
                    Plan a Trip ↗
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
