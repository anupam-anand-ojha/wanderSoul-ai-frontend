import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <main className="bg-base-100 text-base-content">

      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden">

        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/travel-1.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10"></div>

        {/* Navbar */}
        <Navbar />

        {/* Hero Content */}
        <div className="relative z-10 flex min-h-screen items-center px-6 pt-20 md:px-10">

          <div className="mx-auto w-full max-w-7xl">

            <div className="max-w-3xl">

              <div className="badge badge-primary mb-6 rounded-full px-4 py-3">
                AI-powered travel planning
              </div>

              <h1 className="text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                Your next
                <br />
                <span className="text-primary">
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
                  className="btn btn-primary rounded-full px-7 text-base shadow-xl shadow-primary/20"
                >
                  Start Planning
                  <span>↗</span>
                </Link>

                <Link
                  to="/explore"
                  className="btn rounded-full border border-white/20 bg-white/10 px-7 text-base text-white backdrop-blur-md hover:bg-white/20"
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
          <span className="text-primary">↓</span>
        </div>

      </section>


      {/* Why wanderSoul */}
      <section className="px-6 py-24 md:px-10 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Why wanderSoul
            </p>

            <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Plan less.
              <br />
              <span className="text-base-content/40">
                Experience more.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-base-content/60">
              Travel planning shouldn't feel like another task. Tell
              wanderSoul what you want and let AI build the journey around
              you.
            </p>

          </div>


          {/* Features */}
          <div className="mt-14 grid gap-5 md:grid-cols-3">

            {/* Card 1 */}
            <div className="card border border-base-content/10 bg-base-200 transition duration-300 hover:-translate-y-2 hover:border-primary/30">

              <div className="card-body">

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary">
                  ✦
                </div>

                <h3 className="card-title">
                  Personalized
                </h3>

                <p className="text-sm leading-6 text-base-content/60">
                  Every itinerary is created around your interests, budget,
                  travel style and preferences.
                </p>

              </div>

            </div>


            {/* Card 2 */}
            <div className="card border border-base-content/10 bg-base-200 transition duration-300 hover:-translate-y-2 hover:border-primary/30">

              <div className="card-body">

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary">
                  ◈
                </div>

                <h3 className="card-title">
                  AI Powered
                </h3>

                <p className="text-sm leading-6 text-base-content/60">
                  Get smart recommendations and complete day-by-day
                  itineraries in seconds.
                </p>

              </div>

            </div>


            {/* Card 3 */}
            <div className="card border border-base-content/10 bg-base-200 transition duration-300 hover:-translate-y-2 hover:border-primary/30">

              <div className="card-body">

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary">
                  ↗
                </div>

                <h3 className="card-title">
                  Effortless
                </h3>

                <p className="text-sm leading-6 text-base-content/60">
                  From destination ideas to daily plans, everything stays
                  simple and organized.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Featured Destinations */}
      <section className="px-6 pb-24 md:px-10 lg:pb-32">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Get inspired
              </p>

              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Places worth
                <span className="text-base-content/40">
                  {" "}getting lost in.
                </span>
              </h2>

            </div>

            <Link
              to="/explore"
              className="btn btn-ghost rounded-full border border-base-content/10"
            >
              Explore all
              <span>↗</span>
            </Link>

          </div>


          <div className="mt-12 grid gap-5 md:grid-cols-2">

            {/* Bali */}
            <Link
              to="/explore/bali"
              className="group relative overflow-hidden rounded-[2rem]"
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
              className="group relative overflow-hidden rounded-[2rem]"
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


      {/* How it works */}
      <section className="border-y border-base-content/10 bg-base-200/40 px-6 py-24 md:px-10 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              How it works
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              From idea to
              <br />
              <span className="text-base-content/40">
                itinerary.
              </span>
            </h2>

          </div>


          <div className="mt-16 grid gap-12 md:grid-cols-3">

            {/* Step 1 */}
            <div>

              <span className="text-sm font-bold text-primary">
                01
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Tell us your dream
              </h3>

              <p className="mt-3 text-base leading-7 text-base-content/60">
                Choose your destination, budget, duration, interests and
                travel preferences.
              </p>

            </div>


            {/* Step 2 */}
            <div>

              <span className="text-sm font-bold text-primary">
                02
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Let AI plan it
              </h3>

              <p className="mt-3 text-base leading-7 text-base-content/60">
                wanderSoul turns your preferences into a personalized
                day-by-day travel itinerary.
              </p>

            </div>


            {/* Step 3 */}
            <div>

              <span className="text-sm font-bold text-primary">
                03
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Go live it
              </h3>

              <p className="mt-3 text-base leading-7 text-base-content/60">
                Pack your bags, follow your journey and make memories worth
                keeping.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Final CTA */}
      <section className="px-6 py-24 md:px-10 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="relative overflow-hidden rounded-[2rem] bg-primary px-7 py-16 text-primary-content md:px-14 md:py-24">

            <div className="relative z-10 max-w-3xl">

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] opacity-70">
                Your journey starts here
              </p>

              <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                The world is waiting.
                <br />
                Where will you go?
              </h2>

              <Link
                to="/plan"
                className="btn mt-8 rounded-full bg-black px-7 text-white hover:bg-black/80"
              >
                Plan My Journey
                <span>↗</span>
              </Link>

            </div>

            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[50px] border-white/10"></div>

            <div className="absolute -bottom-32 right-20 h-72 w-72 rounded-full border-[50px] border-white/10"></div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Home;