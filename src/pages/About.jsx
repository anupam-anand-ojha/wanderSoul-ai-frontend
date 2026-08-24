import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <main className="min-h-screen bg-base-100 text-base-content">

      <Navbar />

      {/* Hero */}
      <section className="px-6 pb-16 pt-32 md:px-10 md:pb-24">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                About wanderSoul
              </p>

              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
                Travel is not
                <br />
                just about
                <br />
                <span className="text-primary">
                  places.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-base-content/60 md:text-lg">
                It's about the people you meet, the stories you collect and
                the moments that stay with you long after the journey ends.
              </p>

            </div>


            <div className="relative">

              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80"
                alt="Travel landscape"
                className="h-[500px] w-full rounded-[2rem] object-cover md:h-[600px]"
              />

              <div className="absolute -bottom-6 -left-4 rounded-2xl border border-white/10 bg-base-100 p-5 shadow-xl md:-left-8">

                <p className="text-3xl font-bold text-primary">
                  01
                </p>

                <p className="mt-1 text-sm text-base-content/50">
                  journey at a time
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Story */}
      <section className="border-y border-base-content/10 bg-base-200/40 px-6 py-24 md:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Our story
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                We believe planning a trip should feel like the beginning of
                the adventure.
              </h2>

            </div>

            <div className="space-y-5 text-base leading-8 text-base-content/60">

              <p>
                wanderSoul was created with one simple idea: travel planning
                should be exciting, not exhausting.
              </p>

              <p>
                There are countless destinations, hotels, experiences and
                possibilities. Finding the right combination can quickly
                become overwhelming.
              </p>

              <p>
                So we built wanderSoul to bring everything together. You
                share your preferences, and our AI helps transform them into
                a journey that feels personal.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Values */}
      <section className="px-6 py-24 md:px-10 md:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              What we believe
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Built around
              <span className="text-base-content/40">
                {" "}the way you travel.
              </span>
            </h2>

          </div>


          <div className="mt-14 grid gap-5 md:grid-cols-3">

            <div className="card border border-base-content/10 bg-base-200">

              <div className="card-body">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary">
                  ✦
                </div>

                <h3 className="mt-4 text-2xl font-bold">
                  Personal
                </h3>

                <p className="mt-2 leading-7 text-base-content/60">
                  No two travelers are the same. Your itinerary should feel
                  like yours.
                </p>

              </div>

            </div>


            <div className="card border border-base-content/10 bg-base-200">

              <div className="card-body">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary">
                  ◈
                </div>

                <h3 className="mt-4 text-2xl font-bold">
                  Thoughtful
                </h3>

                <p className="mt-2 leading-7 text-base-content/60">
                  We focus on meaningful experiences instead of simply
                  filling your itinerary.
                </p>

              </div>

            </div>


            <div className="card border border-base-content/10 bg-base-200">

              <div className="card-body">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary">
                  ∞
                </div>

                <h3 className="mt-4 text-2xl font-bold">
                  Curious
                </h3>

                <p className="mt-2 leading-7 text-base-content/60">
                  The best trips often begin with curiosity. We want to help
                  you discover what's beyond the obvious.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Numbers */}
      <section className="px-6 pb-24 md:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid overflow-hidden rounded-[2rem] border border-base-content/10 bg-base-200 sm:grid-cols-3">

            <div className="border-b border-base-content/10 p-8 text-center sm:border-b-0 sm:border-r">

              <p className="text-4xl font-bold md:text-5xl">
                50+
              </p>

              <p className="mt-2 text-sm text-base-content/50">
                Destinations
              </p>

            </div>


            <div className="border-b border-base-content/10 p-8 text-center sm:border-b-0 sm:border-r">

              <p className="text-4xl font-bold md:text-5xl">
                100+
              </p>

              <p className="mt-2 text-sm text-base-content/50">
                Experiences
              </p>

            </div>


            <div className="p-8 text-center">

              <p className="text-4xl font-bold md:text-5xl">
                ∞
              </p>

              <p className="mt-2 text-sm text-base-content/50">
                Possibilities
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="px-6 pb-24 md:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="relative overflow-hidden rounded-[2rem] bg-primary px-7 py-16 text-primary-content md:px-14 md:py-24">

            <div className="relative z-10 max-w-3xl">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] opacity-70">
                Your story starts here
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
                Stop planning.
                <br />
                Start wandering.
              </h2>

              <Link
                to="/plan"
                className="btn mt-8 rounded-full bg-black px-7 text-white hover:bg-black/80"
              >
                Plan My Journey ↗
              </Link>

            </div>

            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border-[50px] border-white/10" />

          </div>

        </div>

      </section>

    </main>
  );
};

export default About;