import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const MyTrips = () => {
  return (
    <main className="min-h-screen bg-base-100 text-base-content">

      <Navbar />

      {/* Header */}
      <section className="px-6 pb-12 pt-32 md:px-10">
        <div className="mx-auto max-w-7xl">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Your journeys
          </p>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>
              <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
                My Trips<span className="text-primary">.</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-base-content/60 md:text-lg">
                All your planned adventures, saved in one place.
              </p>
            </div>

            <Link
              to="/plan"
              className="btn btn-primary rounded-full px-7"
            >
              Plan New Trip ↗
            </Link>

          </div>

        </div>
      </section>


      {/* Stats */}
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-4 sm:grid-cols-3">

            <div className="card border border-base-content/10 bg-base-200">
              <div className="card-body">
                <p className="text-sm text-base-content/50">
                  Total Trips
                </p>

                <h2 className="text-4xl font-bold">
                  04
                </h2>
              </div>
            </div>

            <div className="card border border-base-content/10 bg-base-200">
              <div className="card-body">
                <p className="text-sm text-base-content/50">
                  Places Explored
                </p>

                <h2 className="text-4xl font-bold">
                  08
                </h2>
              </div>
            </div>

            <div className="card border border-base-content/10 bg-base-200">
              <div className="card-body">
                <p className="text-sm text-base-content/50">
                  Days Planned
                </p>

                <h2 className="text-4xl font-bold">
                  21
                </h2>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* Trips */}
      <section className="px-6 py-14 md:px-10 md:py-20">

        <div className="mx-auto max-w-7xl">

          <div className="mb-8 flex items-center justify-between">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Saved journeys
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Your adventures
              </h2>
            </div>

            <button className="btn btn-ghost rounded-full border border-base-content/10">
              Recent ↓
            </button>

          </div>


          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">


            {/* Goa */}
            <div className="card overflow-hidden border border-base-content/10 bg-base-200">

              <figure className="relative h-64">

                <img
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80"
                  alt="Goa"
                  className="h-full w-full object-cover"
                />

                <div className="absolute left-4 top-4 badge badge-primary rounded-full">
                  Saved
                </div>

              </figure>

              <div className="card-body">

                <p className="text-sm text-base-content/50">
                  India · 5 Days
                </p>

                <h3 className="text-2xl font-bold">
                  Goa Escape
                </h3>

                <p className="text-sm leading-6 text-base-content/50">
                  Beaches, food, nightlife and a relaxed coastal experience.
                </p>

                <div className="card-actions mt-3 justify-between">

                  <span className="text-sm font-semibold text-primary">
                    ₹30,000
                  </span>

                  <Link
                    to="/trip/goa"
                    className="btn btn-sm btn-primary rounded-full"
                  >
                    View Trip ↗
                  </Link>

                </div>

              </div>

            </div>


            {/* Kashmir */}
            <div className="card overflow-hidden border border-base-content/10 bg-base-200">

              <figure className="relative h-64">

                <img
                  src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80"
                  alt="Kashmir"
                  className="h-full w-full object-cover"
                />

                <div className="absolute left-4 top-4 badge badge-primary rounded-full">
                  Saved
                </div>

              </figure>

              <div className="card-body">

                <p className="text-sm text-base-content/50">
                  India · 6 Days
                </p>

                <h3 className="text-2xl font-bold">
                  Kashmir Getaway
                </h3>

                <p className="text-sm leading-6 text-base-content/50">
                  Mountains, lakes, scenic drives and peaceful landscapes.
                </p>

                <div className="card-actions mt-3 justify-between">

                  <span className="text-sm font-semibold text-primary">
                    ₹35,000
                  </span>

                  <Link
                    to="/trip/kashmir"
                    className="btn btn-sm btn-primary rounded-full"
                  >
                    View Trip ↗
                  </Link>

                </div>

              </div>

            </div>


            {/* Bali */}
            <div className="card overflow-hidden border border-base-content/10 bg-base-200">

              <figure className="relative h-64">

                <img
                  src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80"
                  alt="Bali"
                  className="h-full w-full object-cover"
                />

                <div className="absolute left-4 top-4 badge badge-primary rounded-full">
                  Saved
                </div>

              </figure>

              <div className="card-body">

                <p className="text-sm text-base-content/50">
                  Indonesia · 7 Days
                </p>

                <h3 className="text-2xl font-bold">
                  Bali Adventure
                </h3>

                <p className="text-sm leading-6 text-base-content/50">
                  Beaches, temples, waterfalls and unforgettable sunsets.
                </p>

                <div className="card-actions mt-3 justify-between">

                  <span className="text-sm font-semibold text-primary">
                    ₹55,000
                  </span>

                  <Link
                    to="/trip/bali"
                    className="btn btn-sm btn-primary rounded-full"
                  >
                    View Trip ↗
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Empty / Create */}
      <section className="px-6 pb-24 md:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="rounded-[2rem] border border-dashed border-base-content/20 bg-base-200/40 px-6 py-14 text-center md:px-10">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-xl text-primary">
              ✦
            </div>

            <h2 className="mt-5 text-2xl font-bold">
              Ready for another adventure?
            </h2>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-base-content/50">
              Create another personalized itinerary and add a new journey to
              your collection.
            </p>

            <Link
              to="/plan"
              className="btn btn-primary mt-6 rounded-full px-7"
            >
              Create New Trip ↗
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};

export default MyTrips;