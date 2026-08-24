import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const TripResult = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const trip = location.state?.trip;

  if (!trip) {
    return (
      <main className="min-h-screen bg-base-100 text-base-content">

        <Navbar />

        <section className="flex min-h-[80vh] items-center justify-center px-6">

          <div className="text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-2xl text-primary">
              ✦
            </div>

            <h1 className="mt-6 text-3xl font-bold">
              No trip found
            </h1>

            <p className="mt-3 text-base-content/50">
              Generate a trip first and your AI itinerary will appear here.
            </p>

            <Link
              to="/plan"
              className="btn btn-primary mt-6 rounded-full px-7"
            >
              Plan My Trip ↗
            </Link>

          </div>

        </section>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-base-100 text-base-content">

      <Navbar />

      {/* Header */}
      <section className="px-6 pb-12 pt-32 md:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Your AI Journey
              </p>

              <h1 className="mt-3 text-5xl font-bold tracking-tight md:text-7xl">
                Your trip
                <span className="text-primary"> awaits.</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-base-content/60">
                A personalized itinerary created by wanderSoul AI, based on
                your preferences.
              </p>

            </div>


            <button
              onClick={() => navigate("/plan")}
              className="btn btn-outline rounded-full"
            >
              Plan Another Trip
            </button>

          </div>

        </div>

      </section>


      {/* Summary */}
      <section className="px-6 pb-12 md:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="rounded-[2rem] border border-base-content/10 bg-base-200 p-7 md:p-10">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary">
                ✦
              </div>

              <div>

                <p className="text-sm text-base-content/40">
                  AI Summary
                </p>

                <p className="font-semibold">
                  Your personalized journey
                </p>

              </div>

            </div>


            <p className="mt-7 max-w-4xl text-lg leading-8 text-base-content/70">
              {trip.summary}
            </p>

          </div>

        </div>

      </section>


      {/* Itinerary */}
      <section className="px-6 pb-24 md:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="mb-10">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Your itinerary
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              The journey
              <span className="text-base-content/40"> day by day.</span>
            </h2>

          </div>


          <div className="space-y-6">

            {trip.days?.map((day, index) => (
              <div
                key={index}
                className="card border border-base-content/10 bg-base-200"
              >

                <div className="card-body p-6 md:p-8">

                  <div className="flex flex-col gap-6 md:flex-row">

                    {/* Day */}
                    <div className="shrink-0">

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-xl font-bold text-primary-content">
                        {index + 1}
                      </div>

                    </div>


                    {/* Content */}
                    <div className="flex-1">

                      <div className="flex flex-col justify-between gap-2 md:flex-row">

                        <div>

                          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                            Day {index + 1}
                          </p>

                          <h3 className="mt-1 text-2xl font-bold">
                            {day.title}
                          </h3>

                        </div>

                      </div>


                      {/* Activities */}
                      {day.activities && (
                        <div className="mt-6">

                          <p className="mb-3 text-sm font-semibold">
                            Activities
                          </p>

                          <div className="space-y-3">

                            {day.activities.map((activity, activityIndex) => (
                              <div
                                key={activityIndex}
                                className="flex items-start gap-3 rounded-2xl bg-base-100 p-4"
                              >

                                <span className="mt-1 text-primary">
                                  ✦
                                </span>

                                <p className="text-sm leading-6 text-base-content/70">
                                  {activity}
                                </p>

                              </div>
                            ))}

                          </div>

                        </div>
                      )}


                      {/* Places */}
                      {day.places && (
                        <div className="mt-6">

                          <p className="mb-3 text-sm font-semibold">
                            Places to visit
                          </p>

                          <div className="flex flex-wrap gap-2">

                            {day.places.map((place, placeIndex) => (
                              <span
                                key={placeIndex}
                                className="badge badge-outline h-8 px-4"
                              >
                                {place}
                              </span>
                            ))}

                          </div>

                        </div>
                      )}


                      {/* Food */}
                      {day.food && (
                        <div className="mt-6">

                          <p className="mb-2 text-sm font-semibold">
                            Food suggestion
                          </p>

                          <p className="text-sm leading-6 text-base-content/60">
                            {day.food}
                          </p>

                        </div>
                      )}

                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* Bottom CTA */}
      <section className="px-6 pb-24 md:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="rounded-[2rem] bg-primary px-7 py-14 text-primary-content md:px-14 md:py-20">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] opacity-70">
              wanderSoul AI
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
              Your journey is ready.
            </h2>

            <p className="mt-5 max-w-xl leading-7 opacity-70">
              Save this journey or create another one whenever inspiration
              strikes.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <button
                type="button"
                className="btn rounded-full bg-black px-7 text-white hover:bg-black/80"
              >
                Save Trip
              </button>

              <Link
                to="/explore"
                className="btn btn-ghost rounded-full border border-primary-content/30 px-7"
              >
                Explore More
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default TripResult;