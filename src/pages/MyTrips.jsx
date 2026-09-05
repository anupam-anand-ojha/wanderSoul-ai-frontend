import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const MyTrips = () => {
  const trips = [
    {
      name: "Goa Escape",
      location: "India · 5 Days",
      description:
        "Beaches, food, nightlife and a relaxed coastal experience.",
      price: "₹30,000",
      slug: "goa",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "Kashmir Getaway",
      location: "India · 6 Days",
      description:
        "Mountains, lakes, scenic drives and peaceful landscapes.",
      price: "₹35,000",
      slug: "kashmir",
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "Bali Adventure",
      location: "Indonesia · 7 Days",
      description:
        "Beaches, temples, waterfalls and unforgettable sunsets.",
      price: "₹55,000",
      slug: "bali",
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=85",
    },
  ];

  return (
    <main className="min-h-screen bg-[#faf8ff] text-[#24152f]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-16 pt-32 md:px-10 md:pb-20">

        {/* Soft purple background */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#e9ddff] opacity-60 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-[#eee4ff] opacity-70 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#EE82EE]">
            Your journeys
          </p>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>
              <h1 className="text-5xl font-bold tracking-tight text-[#24152f] md:text-7xl">
                My Trips<span className="text-[#EE82EE]">.</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-[#75677f] md:text-lg">
                All your planned adventures, saved in one place.
              </p>
            </div>

            <Link
              to="/plan"
              className="w-fit rounded-full  bg-gradient-to-r from-[#800080] to-[#EE82EE] px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EE82EE] hover:shadow-lg"
            >
              Plan New Trip ↗
            </Link>

          </div>

        </div>
      </section>


      {/* Stats */}
      <section className="relative px-6 md:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-5 sm:grid-cols-3">

            <div className="rounded-3xl border border-[#e9e0f2] bg-white p-6 shadow-sm">
              <p className="text-sm text-[#8a7b94]">
                Total Trips
              </p>

              <h2 className="mt-2 text-4xl font-bold text-[#24152f]">
                04
              </h2>
            </div>


            <div className="rounded-3xl border border-[#e9e0f2] bg-white p-6 shadow-sm">
              <p className="text-sm text-[#8a7b94]">
                Places Explored
              </p>

              <h2 className="mt-2 text-4xl font-bold text-[#24152f]">
                08
              </h2>
            </div>


            <div className="rounded-3xl border border-[#e9e0f2] bg-white p-6 shadow-sm">
              <p className="text-sm text-[#8a7b94]">
                Days Planned
              </p>

              <h2 className="mt-2 text-4xl font-bold text-[#24152f]">
                21
              </h2>
            </div>

          </div>

        </div>
      </section>


      {/* Trips */}
      <section className="relative px-6 py-16 md:px-10 md:py-20">

        <div className="mx-auto max-w-7xl">

          <div className="mb-8 flex items-end justify-between">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#EE82EE]">
                Saved journeys
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#24152f] md:text-4xl">
                Your adventures
              </h2>

              <p className="mt-2 text-sm text-[#8a7b94]">
                Your personalized travel plans.
              </p>
            </div>

            <button className="hidden rounded-full border border-[#e9e0f2] bg-white px-5 py-2.5 text-sm font-semibold text-[#75677f] shadow-sm transition hover:border-[#cbb5ed] hover:text-[#7c3aed] sm:block">
              Recent ↓
            </button>

          </div>


          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {trips.map((trip) => (
              <div
                key={trip.slug}
                className="group overflow-hidden rounded-3xl border border-[#e9e0f2] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#cbb5ed] hover:shadow-xl"
              >

                {/* Image */}
                <div className="relative overflow-hidden">

                  <img
                    src={trip.image}
                    alt={trip.name}
                    className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70" />

                  {/* Saved */}
                  <div className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-[#7c3aed] shadow-md">
                    Saved
                  </div>

                  {/* Hover */}
                  <Link
                    to={`/trip/${trip.slug}`}
                    className="absolute bottom-4 right-4 translate-y-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-[#7c3aed] opacity-0 shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    View Trip →
                  </Link>

                </div>


                {/* Content */}
                <div className="p-5">

                  <p className="text-sm text-[#8a7b94]">
                    {trip.location}
                  </p>

                  <h3 className="mt-1 text-2xl font-bold text-[#24152f] transition-colors duration-300 group-hover:text-[#800080]">
                    {trip.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#75677f]">
                    {trip.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between">

                    <span className="text-sm font-bold text-[#800080]">
                      {trip.price}
                    </span>

                    <Link
                      to={`/trip/${trip.slug}`}
                      className="rounded-full bg-[#EE82EE] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#800080] hover:shadow-md"
                    >
                      View Trip ↗
                    </Link>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* Create New Trip */}
      <section className="px-6 pb-24 md:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="rounded-[2rem] border border-dashed border-[#d8c8e8] bg-white px-6 py-14 text-center shadow-sm md:px-10">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f3eaff] text-xl text-[#7c3aed]">
              ✦
            </div>

            <h2 className="mt-5 text-2xl font-bold text-[#24152f]">
              Ready for another adventure?
            </h2>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#75677f]">
              Create another personalized itinerary and add a new journey to
              your collection.
            </p>

            <Link
              to="/plan"
              className="mt-6 inline-flex rounded-full bg-[#EE82EE] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d96ed9] hover:shadow-lg"
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