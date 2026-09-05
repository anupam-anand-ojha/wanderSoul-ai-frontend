import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const Destination = () => {
  const { place } = useParams();

  const destinations = {
    bali: {
      name: "Bali",
      country: "Indonesia",
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=85",
    },

    kashmir: {
      name: "Kashmir",
      country: "India",
      image:
        "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1600&q=85",
    },

    santorini: {
      name: "Santorini",
      country: "Greece",
      image:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1600&q=85",
    },

    dubai: {
      name: "Dubai",
      country: "UAE",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=85",
    },

    manali: {
      name: "Manali",
      country: "India",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1600&q=85",
    },

    kyoto: {
      name: "Kyoto",
      country: "Japan",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=85",
    },
  };

  const destination = destinations[place];

  if (!destination) {
    return (
      <main className="min-h-screen bg-[#faf7ff] text-[#24152f]">
        <Navbar />

        <div className="flex min-h-screen items-center justify-center px-6">
          <div className="text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eee4ff] text-2xl">
              ✦
            </div>

            <h1 className="text-3xl font-bold md:text-4xl">
              Destination not found
            </h1>

            <p className="mt-3 text-[#6f5b82]">
              We couldn't find the destination you're looking for.
            </p>

            <Link
              to="/explore"
              className="mt-7 inline-flex items-center rounded-full bg-[#6d20d9] px-7 py-3 font-semibold text-white shadow-lg shadow-purple-300/30 transition hover:bg-[#5c18bd]"
            >
              Back to Explore
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#faf7ff] text-[#24152f]">
      <Navbar />

      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#d8b4fe]/30 blur-3xl" />

        <div className="absolute -right-40 top-60 h-[28rem] w-[28rem] rounded-full bg-[#c084fc]/25 blur-3xl" />

        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#eadcff]/60 blur-3xl" />
      </div>

      <section className="relative z-10 px-5 pb-20 pt-28 md:px-10 md:pt-32">
        <div className="mx-auto max-w-6xl">

          {/* Hero Card */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/40 shadow-[0_20px_70px_rgba(103,43,155,0.18)] backdrop-blur-sm md:rounded-[2.5rem]">

            {/* Image */}
            <img
              src={destination.image}
              alt={destination.name}
              className="h-[65vh] min-h-[500px] w-full object-cover"
            />

            {/* Purple overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#241033]/90 via-[#3b1757]/20 to-transparent" />

            {/* Soft purple tint */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/10 via-transparent to-[#c084fc]/20" />

            {/* Floating badge */}
            <div className="absolute left-6 top-6 md:left-8 md:top-8">
              <div className="rounded-full border border-white/30 bg-white/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                ✦ AI Travel Destination
              </div>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-7 md:p-12">

              <p className="text-sm font-medium uppercase tracking-[0.25em] text-white/70">
                {destination.country}
              </p>

              <h1 className="mt-2 text-6xl font-extrabold tracking-tight text-white md:text-8xl">
                {destination.name}
                <span className="text-[#c084fc]">.</span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-6 text-white/75 md:text-base">
                Discover the best places, experiences and hidden gems in{" "}
                {destination.name}. Let AI create a personalized trip
                designed around you.
              </p>

              <Link
                to={`/plan?place=${destination.name}`}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#7625d9] px-7 py-3.5 font-semibold text-white shadow-xl shadow-purple-950/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#6520bd]"
              >
                Plan with AI
                <span className="text-lg">✦</span>
              </Link>
            </div>
          </div>

          {/* Bottom Info Cards */}
          <div className="mt-8 grid gap-5 md:grid-cols-3">

            <div className="rounded-3xl border border-[#eadcf8] bg-white/70 p-6 shadow-[0_12px_40px_rgba(103,43,155,0.08)] backdrop-blur-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eee3ff] text-[#6d20d9]">
                ✦
              </div>

              <h3 className="text-lg font-bold">
                AI Planned
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#75617f]">
                Get an itinerary generated around your interests, budget and
                travel style.
              </p>
            </div>

            <div className="rounded-3xl border border-[#eadcf8] bg-white/70 p-6 shadow-[0_12px_40px_rgba(103,43,155,0.08)] backdrop-blur-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eee3ff] text-[#6d20d9]">
                ♡
              </div>

              <h3 className="text-lg font-bold">
                Made for You
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#75617f]">
                Your trip is personalized instead of following a generic
                travel plan.
              </p>
            </div>

            <div className="rounded-3xl border border-[#eadcf8] bg-white/70 p-6 shadow-[0_12px_40px_rgba(103,43,155,0.08)] backdrop-blur-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eee3ff] text-[#6d20d9]">
                ✈
              </div>

              <h3 className="text-lg font-bold">
                Explore More
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#75617f]">
                Find experiences, attractions and places worth adding to your
                journey.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Destination;