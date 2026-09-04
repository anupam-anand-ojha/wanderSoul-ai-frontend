import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <main className="min-h-screen bg-[#faf8ff] text-[#24152f]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-16 pt-32 md:px-10 md:pb-20 md:pt-40">

        {/* Soft purple background */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#e9ddff] opacity-60 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-[#eee4ff] opacity-70 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#EE82EE]">
            About wanderSoul
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight text-[#24152f] md:text-7xl">
            Travel more.
            <br />
            <span className="text-[#EE82EE]">Plan less.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#75677f]">
            wanderSoul is an AI-powered travel planner built to turn
            your travel ideas into personalized journeys — without
            spending hours planning every little detail.
          </p>

        </div>
      </section>


      {/* Main Story */}
      <section className="px-6 pb-20 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">

          {/* Idea */}
          <div className="rounded-[2rem] border border-[#e9e0f2] bg-white p-8 shadow-sm md:p-10">

            <p className="text-sm font-semibold text-[#EE82EE]">
              The idea
            </p>

            <h2 className="mt-4 text-3xl font-bold text-[#24152f]">
              Your trip should feel like yours.
            </h2>

            <p className="mt-5 leading-7 text-[#75677f]">
              Every traveler has a different way of exploring.
              Some chase adventure, some look for quiet places,
              some travel for food, and some simply want to get away.
            </p>

            <p className="mt-4 leading-7 text-[#75677f]">
              wanderSoul uses AI to understand what you want from
              a trip and turns those preferences into a journey
              designed around you.
            </p>

          </div>


          {/* Experience */}
          <div className="rounded-[2rem] bg-[#800080] p-8 text-white shadow-sm md:p-10">

            <p className="text-sm font-semibold text-white/70">
              The experience
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Tell us where.
              <br />
              We'll handle the planning.
            </h2>

            <p className="mt-5 leading-7 text-white/80">
              Choose your destination, duration, budget and travel
              preferences. wanderSoul does the rest.
            </p>

            <Link
              to="/plan"
              className="mt-7 inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#7c3aed] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#faf8ff] hover:shadow-lg"
            >
              Plan My Trip ✦
            </Link>

          </div>

        </div>
      </section>


      {/* Features */}
      <section className="px-6 pb-20 md:px-10">
        <div className="mx-auto max-w-6xl">

          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#EE82EE]">
              Why wanderSoul
            </p>

            <h2 className="mt-3 text-4xl font-bold text-[#24152f] md:text-5xl">
              Built around your journey.
            </h2>
          </div>


          <div className="grid gap-5 md:grid-cols-3">

            {/* AI */}
            <div className="rounded-[2rem] border border-[#e9e0f2] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#cbb5ed] hover:shadow-lg">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f3eaff] text-xl text-[#7c3aed]">
                ✦
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#24152f]">
                AI Powered
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#75677f]">
                Get a personalized itinerary generated around
                your travel preferences.
              </p>

            </div>


            {/* Personalized */}
            <div className="rounded-[2rem] border border-[#e9e0f2] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#cbb5ed] hover:shadow-lg">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f3eaff] text-xl text-[#7c3aed]">
                ◌
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#24152f]">
                Personalized
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#75677f]">
                Your destination, budget, duration and interests
                shape every trip.
              </p>

            </div>


            {/* Simple */}
            <div className="rounded-[2rem] border border-[#e9e0f2] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#cbb5ed] hover:shadow-lg">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f3eaff] text-xl text-[#7c3aed]">
                ↗
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#24152f]">
                Simple
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#75677f]">
                Less planning. Less searching. More time to
                actually enjoy the journey.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="px-6 pb-24 md:px-10">
        <div className="mx-auto max-w-6xl">

          <div className="relative overflow-hidden rounded-[2rem] bg-white px-6 py-14 text-center shadow-sm md:px-10">

            {/* Glow */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#e9ddff] opacity-60 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[#eee4ff] opacity-70 blur-3xl" />

            <div className="relative">

              <h2 className="text-4xl font-bold text-[#24152f] md:text-5xl">
                Ready to wander?
              </h2>

              <p className="mx-auto mt-4 max-w-lg text-base text-[#75677f]">
                Tell wanderSoul what you're looking for and let AI
                create your next journey.
              </p>

              <Link
                to="/plan"
                className="mt-7 inline-flex rounded-full bg-[#EE82EE] px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d96ed9] hover:shadow-lg"
              >
                Start Planning ✦
              </Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
};

export default About;