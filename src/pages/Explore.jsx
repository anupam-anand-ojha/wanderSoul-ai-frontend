import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Explore = () => {
  const destinations = [
    {
      name: "Bali",
      country: "Indonesia",
      slug: "bali",
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "Kashmir",
      country: "India",
      slug: "kashmir",
      image:
        "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "Santorini",
      country: "Greece",
      slug: "santorini",
      image:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "Dubai",
      country: "UAE",
      slug: "dubai",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "Manali",
      country: "India",
      slug: "manali",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "Kyoto",
      country: "Japan",
      slug: "kyoto",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=85",
    },
  ];

  return (
    <main className="min-h-screen bg-[#faf8ff] text-[#24152f]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-16 pt-32 md:px-10 md:pb-20">
        
        {/* Soft background shapes */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#e9ddff] opacity-60 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-[#eee4ff] opacity-70 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7c3aed]">
            Explore
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-tight tracking-tight text-[#24152f] md:text-7xl">
            Find your next
            <br />
            <span className="text-[#7c3aed]">adventure.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#75677f] md:text-lg">
            Discover places worth visiting and let wanderSoul help you plan
            the journey you'll remember.
          </p>

        </div>
      </section>

      {/* Destinations */}
      <section className="relative px-6 pb-24 md:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#24152f] md:text-3xl">
                Popular destinations
              </h2>

              <p className="mt-2 text-sm text-[#8a7b94]">
                Places travelers are loving right now.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => (
              <Link
                key={destination.slug}
                to={`/explore/${destination.slug}`}
                className="group overflow-hidden rounded-3xl border border-[#e9e0f2] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#cbb5ed] hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70" />

                  {/* Explore pill */}
                  <div className="absolute bottom-4 right-4 translate-y-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-[#7c3aed] opacity-0 shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    Explore →
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-[#24152f] transition-colors duration-300 group-hover:text-[#7c3aed]">
                    {destination.name}
                  </h3>

                  <p className="mt-1 text-sm text-[#8a7b94]">
                    {destination.country}
                  </p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
};

export default Explore;