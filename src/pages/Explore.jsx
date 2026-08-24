import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <main className="min-h-screen bg-base-100 text-base-content">

      {/* Header */}
      <section className="px-6 pb-10 pt-32 md:px-10">
        <div className="mx-auto max-w-7xl">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Explore the world
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Find your next
            <span className="text-primary"> escape.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-base-content/60 md:text-lg">
            Discover beautiful places, hidden experiences and destinations
            worth adding to your journey.
          </p>

        </div>
      </section>


      {/* Search + Filters */}
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            {/* Search */}
            <label className="input input-bordered flex h-12 w-full items-center gap-3 rounded-full bg-base-200 lg:max-w-md">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-60"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l3.755 3.754a.75.75 0 1 1-1.06 1.06l-3.755-3.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>

              <input
                type="text"
                placeholder="Search destinations..."
              />

            </label>


            {/* Categories */}
            <div className="flex flex-wrap gap-2">

              <button className="btn btn-primary rounded-full px-5">
                All
              </button>

              <button className="btn btn-ghost rounded-full border border-base-content/10 px-5">
                Beaches
              </button>

              <button className="btn btn-ghost rounded-full border border-base-content/10 px-5">
                Mountains
              </button>

              <button className="btn btn-ghost rounded-full border border-base-content/10 px-5">
                Cities
              </button>

              <button className="btn btn-ghost rounded-full border border-base-content/10 px-5">
                Adventure
              </button>

            </div>

          </div>

        </div>
      </section>


      {/* Destination Grid */}
      <section className="px-6 py-14 md:px-10 md:py-20">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">


            {/* Bali */}
            <Link
              to="/explore/bali"
              className="group card overflow-hidden border border-base-content/10 bg-base-200"
            >

              <figure className="relative h-96 overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80"
                  alt="Bali"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">

                  <div>
                    <p className="text-sm text-white/60">
                      Indonesia
                    </p>

                    <h2 className="mt-1 text-3xl font-bold">
                      Bali
                    </h2>

                    <div className="mt-2 flex gap-2">
                      <span className="badge badge-sm border-0 bg-white/15 text-white">
                        Beach
                      </span>

                      <span className="badge badge-sm border-0 bg-white/15 text-white">
                        Adventure
                      </span>
                    </div>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-lg backdrop-blur-md transition group-hover:bg-primary">
                    ↗
                  </div>

                </div>

              </figure>

            </Link>


            {/* Kashmir */}
            <Link
              to="/explore/kashmir"
              className="group card overflow-hidden border border-base-content/10 bg-base-200"
            >

              <figure className="relative h-96 overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80"
                  alt="Kashmir"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">

                  <div>
                    <p className="text-sm text-white/60">
                      India
                    </p>

                    <h2 className="mt-1 text-3xl font-bold">
                      Kashmir
                    </h2>

                    <div className="mt-2 flex gap-2">
                      <span className="badge badge-sm border-0 bg-white/15 text-white">
                        Mountains
                      </span>

                      <span className="badge badge-sm border-0 bg-white/15 text-white">
                        Nature
                      </span>
                    </div>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-lg backdrop-blur-md transition group-hover:bg-primary">
                    ↗
                  </div>

                </div>

              </figure>

            </Link>


            {/* Santorini */}
            <Link
              to="/explore/santorini"
              className="group card overflow-hidden border border-base-content/10 bg-base-200"
            >

              <figure className="relative h-96 overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80"
                  alt="Santorini"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">

                  <div>
                    <p className="text-sm text-white/60">
                      Greece
                    </p>

                    <h2 className="mt-1 text-3xl font-bold">
                      Santorini
                    </h2>

                    <div className="mt-2 flex gap-2">
                      <span className="badge badge-sm border-0 bg-white/15 text-white">
                        Beach
                      </span>

                      <span className="badge badge-sm border-0 bg-white/15 text-white">
                        Relax
                      </span>
                    </div>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-lg backdrop-blur-md transition group-hover:bg-primary">
                    ↗
                  </div>

                </div>

              </figure>

            </Link>


            {/* Dubai */}
            <Link
              to="/explore/dubai"
              className="group card overflow-hidden border border-base-content/10 bg-base-200"
            >

              <figure className="relative h-96 overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80"
                  alt="Dubai"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">

                  <div>
                    <p className="text-sm text-white/60">
                      UAE
                    </p>

                    <h2 className="mt-1 text-3xl font-bold">
                      Dubai
                    </h2>

                    <div className="mt-2 flex gap-2">
                      <span className="badge badge-sm border-0 bg-white/15 text-white">
                        City
                      </span>

                      <span className="badge badge-sm border-0 bg-white/15 text-white">
                        Luxury
                      </span>
                    </div>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-lg backdrop-blur-md transition group-hover:bg-primary">
                    ↗
                  </div>

                </div>

              </figure>

            </Link>


            {/* Manali */}
            <Link
              to="/explore/manali"
              className="group card overflow-hidden border border-base-content/10 bg-base-200"
            >

              <figure className="relative h-96 overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1626080308314-d7862a0c7a9c?auto=format&fit=crop&w=1200&q=80"
                  alt="Manali"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">

                  <div>
                    <p className="text-sm text-white/60">
                      India
                    </p>

                    <h2 className="mt-1 text-3xl font-bold">
                      Manali
                    </h2>

                    <div className="mt-2 flex gap-2">
                      <span className="badge badge-sm border-0 bg-white/15 text-white">
                        Mountains
                      </span>

                      <span className="badge badge-sm border-0 bg-white/15 text-white">
                        Adventure
                      </span>
                    </div>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-lg backdrop-blur-md transition group-hover:bg-primary">
                    ↗
                  </div>

                </div>

              </figure>

            </Link>


            {/* Kyoto */}
            <Link
              to="/explore/kyoto"
              className="group card overflow-hidden border border-base-content/10 bg-base-200"
            >

              <figure className="relative h-96 overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80"
                  alt="Kyoto"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">

                  <div>
                    <p className="text-sm text-white/60">
                      Japan
                    </p>

                    <h2 className="mt-1 text-3xl font-bold">
                      Kyoto
                    </h2>

                    <div className="mt-2 flex gap-2">
                      <span className="badge badge-sm border-0 bg-white/15 text-white">
                        Culture
                      </span>

                      <span className="badge badge-sm border-0 bg-white/15 text-white">
                        Nature
                      </span>
                    </div>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-lg backdrop-blur-md transition group-hover:bg-primary">
                    ↗
                  </div>

                </div>

              </figure>

            </Link>

          </div>

        </div>
      </section>


      {/* AI CTA */}
      <section className="px-6 pb-24 md:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="card overflow-hidden border border-primary/20 bg-primary/10">

            <div className="card-body items-center px-6 py-16 text-center md:py-20">

              <span className="badge badge-primary rounded-full px-4 py-3">
                AI Travel Planner
              </span>

              <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
                Still don't know where to go?
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-base-content/60">
                Tell wanderSoul what kind of experience you want and let AI
                help you discover the perfect trip.
              </p>

              <Link
                to="/plan"
                className="btn btn-primary mt-7 rounded-full px-7"
              >
                Plan My Trip ↗
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Explore;