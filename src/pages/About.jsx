import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <main className="min-h-screen bg-base-100 text-base-content">
      <Navbar />

      {/* Hero */}
      <section className="px-6 pb-20 pt-32 md:px-10 md:pt-40">
        <div className="mx-auto max-w-6xl">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            About wanderSoul
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Travel more.
            <br />
            <span className="text-primary">Plan less.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-base-content/50">
            wanderSoul is an AI-powered travel planner built to turn
            your travel ideas into personalized journeys  without
            spending hours planning every little detail.
          </p>

        </div>
      </section>


      {/* Main Story */}
      <section className="px-6 pb-20 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">

          <div className="rounded-[2rem] bg-base-200 p-8 md:p-10">

            <p className="text-sm font-semibold text-primary">
              The idea
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Your trip should feel like yours.
            </h2>

            <p className="mt-5 leading-7 text-base-content/50">
              Every traveler has a different way of exploring.
              Some chase adventure, some look for quiet places,
              some travel for food, and some simply want to get away.
            </p>

            <p className="mt-4 leading-7 text-base-content/50">
              wanderSoul uses AI to understand what you want from
              a trip and turns those preferences into a journey
              designed around you.
            </p>

          </div>


          <div className="rounded-[2rem] bg-primary p-8 text-primary-content md:p-10">

            <p className="text-sm font-semibold opacity-70">
              The experience
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Tell us where.
              <br />
              We'll handle the planning.
            </h2>

            <p className="mt-5 leading-7 opacity-80">
              Choose your destination, duration, budget and travel
              preferences. wanderSoul does the rest.
            </p>

            <Link
              to="/plan"
              className="btn mt-7 rounded-full border-0 bg-base-100 px-7 text-base-content hover:bg-base-100"
            >
              Plan My Trip ✦
            </Link>

          </div>

        </div>
      </section>


      {/* Simple Features */}
      <section className="px-6 pb-20 md:px-10">
        <div className="mx-auto max-w-6xl">

          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Why wanderSoul
            </p>

            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Built around your journey.
            </h2>
          </div>


          <div className="grid gap-5 md:grid-cols-3">

            <div className="rounded-[2rem] border border-base-content/10 bg-base-200 p-7">
              <div className="text-3xl">✦</div>

              <h3 className="mt-5 text-xl font-bold">
                AI Powered
              </h3>

              <p className="mt-3 text-sm leading-6 text-base-content/50">
                Get a personalized itinerary generated around
                your travel preferences.
              </p>
            </div>


            <div className="rounded-[2rem] border border-base-content/10 bg-base-200 p-7">
              <div className="text-3xl">◌</div>

              <h3 className="mt-5 text-xl font-bold">
                Personalized
              </h3>

              <p className="mt-3 text-sm leading-6 text-base-content/50">
                Your destination, budget, duration and interests
                shape every trip.
              </p>
            </div>


            <div className="rounded-[2rem] border border-base-content/10 bg-base-200 p-7">
              <div className="text-3xl">↗</div>

              <h3 className="mt-5 text-xl font-bold">
                Simple
              </h3>

              <p className="mt-3 text-sm leading-6 text-base-content/50">
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

          <div className="rounded-[2rem] bg-base-200 px-6 py-12 text-center md:px-10">

            <h2 className="text-4xl font-bold md:text-5xl">
              Ready to wander?
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-base text-base-content/50">
              Tell wanderSoul what you're looking for and let AI
              create your next journey.
            </p>

            <Link
              to="/plan"
              className="btn btn-primary mt-7 rounded-full px-8"
            >
              Start Planning ✦
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
};

export default About;