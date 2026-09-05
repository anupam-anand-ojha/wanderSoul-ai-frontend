import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";

const Home = () => {
  const videos = [
    "/videos/travel-1.mp4",
    "/videos/travel-2.mp4",
    "/videos/travel-3.mp4",
  ];

  const [currentVideo, setCurrentVideo] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  return (
    <main className="min-h-screen bg-[#faf7ff] text-[#24152f]">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Video */}
        <video
          key={videos[currentVideo]}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={videos[currentVideo]} type="video/mp4" />
        </video>

        {/* Video Overlay */}
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10"></div>

        {/* Navbar */}
        <Navbar />

        {/* Hero Content */}
        <div className="relative z-10 flex min-h-screen items-center px-6 pt-20 md:px-10">
          <div className="mx-auto w-full max-w-7xl">
            <div className="max-w-3xl">

              <div className="mb-6 inline-flex rounded-full border border-[#EE82EE]/40 bg-[#800080]/20 px-4 py-3 text-sm text-[#EE82EE] backdrop-blur-md">
                AI-powered travel planning
              </div>

              <h1 className="text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                Your next
                <br />

                <span className="bg-gradient-to-r from-[#EE82EE] to-[#800080] bg-clip-text text-transparent">
                  adventure
                </span>

                <br />
                awaits.
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-white/70 md:text-lg">
                Tell us where you want to go, what you love, and your budget.
                wanderSoul creates a personalized journey made just for you.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">

                <Link
                  to="/plan"
                  className="rounded-full bg-gradient-to-r from-[#800080] to-[#EE82EE] px-7 py-3 text-base font-medium text-white shadow-xl shadow-[#800080]/30 transition duration-300 hover:scale-[1.03] hover:shadow-[#EE82EE]/30"
                >
                  Start Planning
                  <span className="ml-2">↗</span>
                </Link>

                <Link
                  to="/explore"
                  className="rounded-full border border-white/20 bg-white/10 px-7 py-3 text-base text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  Explore Destinations
                </Link>

              </div>
            </div>
          </div>
        </div>

        {/* Scroll */}
        <div className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/50 md:flex">
          Scroll to explore
          <span className="text-[#EE82EE]">↓</span>
        </div>
      </section>


      {/* ================= WHY WANDERSOUL ================= */}
      <section className="relative overflow-hidden px-6 py-24 md:px-10 lg:py-32">

        {/* Purple Glow */}
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#EE82EE]/15 blur-3xl"></div>

        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#800080]/10 blur-3xl"></div>

        <div className="relative z-10 mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#800080]">
              Why wanderSoul
            </p>

            <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Plan less.
              <br />

              <span className="bg-[#EE82EE] bg-clip-text text-transparent">
                Experience more.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#24152f]/60">
              Travel planning shouldn't feel like another task. Tell wanderSoul
              what you want and let AI build the journey around you.
            </p>

          </div>


          {/* Features */}
          <div className="mt-14 grid gap-5 md:grid-cols-3">

            {/* Card 1 */}
            <div className="card border border-[#800080]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#800080]/30 hover:shadow-lg hover:shadow-[#800080]/10">
              <div className="card-body">

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#800080]/10 text-xl text-[#800080]">
                  ✦
                </div>

                <h3 className="card-title text-[#24152f]">
                  Personalized
                </h3>

                <p className="text-sm leading-6 text-[#24152f]/60">
                  Every itinerary is created around your interests, budget,
                  travel style and preferences.
                </p>

              </div>
            </div>


            {/* Card 2 */}
            <div className="card border border-[#800080]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#800080]/30 hover:shadow-lg hover:shadow-[#800080]/10">
              <div className="card-body">

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EE82EE]/15 text-xl text-[#800080]">
                  ◈
                </div>

                <h3 className="card-title text-[#24152f]">
                  AI Powered
                </h3>

                <p className="text-sm leading-6 text-[#24152f]/60">
                  Get smart recommendations and complete day-by-day
                  itineraries in seconds.
                </p>

              </div>
            </div>


            {/* Card 3 */}
            <div className="card border border-[#800080]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#800080]/30 hover:shadow-lg hover:shadow-[#800080]/10">
              <div className="card-body">

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#800080]/10 text-xl text-[#800080]">
                  ↗
                </div>

                <h3 className="card-title text-[#24152f]">
                  Effortless
                </h3>

                <p className="text-sm leading-6 text-[#24152f]/60">
                  From destination ideas to daily plans, everything stays
                  simple and organized.
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= FEATURED DESTINATIONS ================= */}
      <section className="relative overflow-hidden px-6 pb-24 md:px-10 lg:pb-32">

        <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-[#EE82EE]/10 blur-3xl"></div>

        <div className="relative z-10 mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#800080]">
                Get inspired
              </p>

              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Places worth
                <span className="bg-[#EE82EE] bg-clip-text text-transparent">
                  {" "}
                  getting lost in.
                </span>
              </h2>
            </div>

            <Link
              to="/explore"
              className="btn rounded-full border border-[#800080]/15 bg-white text-[#24152f] shadow-sm hover:border-[#800080]/30 hover:bg-[#800080]/5"
            >
              Explore all
              <span>↗</span>
            </Link>

          </div>


          <div className="mt-12 grid gap-5 md:grid-cols-2">

            {/* Bali */}
            <Link
              to="/explore/bali"
              className="group relative overflow-hidden rounded-[2rem] shadow-lg"
            >
              <div className="h-[450px]">
                <img
                  src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=80"
                  alt="Bali"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

              <div className="absolute bottom-7 left-7 text-white">
                <p className="text-sm text-white/60">
                  Indonesia
                </p>

                <h3 className="mt-1 text-4xl font-bold">
                  Bali
                </h3>

                <p className="mt-2 text-sm text-white/70">
                  Beaches · Culture · Adventure
                </p>
              </div>
            </Link>


            {/* Kashmir */}
            <Link
              to="/explore/kashmir"
              className="group relative overflow-hidden rounded-[2rem] shadow-lg"
            >
              <div className="h-[450px]">
                <img
                  src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1400&q=80"
                  alt="Kashmir"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

              <div className="absolute bottom-7 left-7 text-white">

                <p className="text-sm text-white/60">
                  India
                </p>

                <h3 className="mt-1 text-4xl font-bold">
                  Kashmir
                </h3>

                <p className="mt-2 text-sm text-white/70">
                  Mountains · Nature · Escape
                </p>

              </div>
            </Link>

          </div>
        </div>
      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section className="relative overflow-hidden border-y border-[#800080]/10 bg-gradient-to-br from-white via-[#faf7ff] to-[#f3e8ff] px-6 py-24 md:px-10 lg:py-32">

        <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#EE82EE]/10 blur-3xl"></div>

        <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#800080]/10 blur-3xl"></div>

        <div className="relative z-10 mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#800080]">
              How it works
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              From idea to
              <br />

              <span className="bg-[#EE82EE] bg-clip-text text-transparent">
                itinerary.
              </span>
            </h2>

          </div>


          <div className="mt-16 grid gap-12 md:grid-cols-3">

            {/* Step 1 */}
            <div>
              <span className="text-sm font-bold text-[#800080]">
                01
              </span>

              <h3 className="mt-4 text-2xl font-bold text-[#24152f]">
                Tell us your dream
              </h3>

              <p className="mt-3 text-base leading-7 text-[#24152f]/60">
                Choose your destination, budget, duration, interests and travel
                preferences.
              </p>
            </div>


            {/* Step 2 */}
            <div>
              <span className="text-sm font-bold text-[#800080]">
                02
              </span>

              <h3 className="mt-4 text-2xl font-bold text-[#24152f]">
                Let AI plan it
              </h3>

              <p className="mt-3 text-base leading-7 text-[#24152f]/60">
                wanderSoul turns your preferences into a personalized
                day-by-day travel itinerary.
              </p>
            </div>


            {/* Step 3 */}
            <div>
              <span className="text-sm font-bold text-[#800080]">
                03
              </span>

              <h3 className="mt-4 text-2xl font-bold text-[#24152f]">
                Go live it
              </h3>

              <p className="mt-3 text-base leading-7 text-[#24152f]/60">
                Pack your bags, follow your journey and make memories worth
                keeping.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="relative overflow-hidden px-6 py-24 md:px-10 lg:py-32">

        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#EE82EE]/15 blur-3xl"></div>

        <div className="relative z-10 mx-auto max-w-7xl">

          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#800080] to-[#EE82EE] px-7 py-16 text-white shadow-2xl shadow-[#800080]/20 md:px-14 md:py-24">

            <div className="relative z-10 max-w-3xl">

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                Your journey starts here
              </p>

              <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                The world is waiting.
                <br />
                Where will you go?
              </h2>

              <Link
                to="/plan"
                className="btn mt-8 rounded-full bg-white px-7 text-[#800080] shadow-lg transition hover:bg-white/90"
              >
                Plan My Journey
                <span>↗</span>
              </Link>

            </div>

            {/* Decorative Circles */}
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[50px] border-white/10"></div>

            <div className="absolute -bottom-32 right-20 h-72 w-72 rounded-full border-[50px] border-white/10"></div>

            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/5 blur-2xl"></div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;