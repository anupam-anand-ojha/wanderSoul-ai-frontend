import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  MapPin,
  CalendarDays,
  Wallet,
  Lightbulb,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const TripResult = () => {
  const { state } = useLocation();
  const trip = state?.trip;

  if (!trip) {
    return (
      <main className="min-h-screen bg-base-100">
        <Navbar />

        <div className="flex min-h-screen items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold">
              No trip found
            </h1>

            <Link
              to="/plan"
              className="btn btn-primary mt-5 rounded-full"
            >
              Create a Trip
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-base-100">
      <Navbar />

      <section className="px-5 pb-20 pt-32 md:px-10 md:pt-40">
        <div className="mx-auto max-w-6xl">

          {/* HERO */}
          <div className="text-center">

            <div className="badge badge-outline border-primary/40 px-4 py-4 text-primary">
              <Sparkles size={14} />
              AI GENERATED TRIP
            </div>

            <h1 className="mt-5 text-5xl font-bold tracking-tight md:text-7xl">
              Your journey
              <br />
              <span className="text-primary">
                awaits.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-base-content/60 md:text-lg">
              {trip.summary}
            </p>

          </div>


          {/* QUICK INFO */}
          <div className="mt-10 grid gap-4 md:grid-cols-3">

            <div className="rounded-3xl bg-base-200 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                  <CalendarDays size={22} />
                </div>

                <div>
                  <p className="text-sm text-base-content/50">
                    Duration
                  </p>

                  <p className="font-semibold">
                    {trip.itinerary?.length} Days
                  </p>
                </div>
              </div>
            </div>


            <div className="rounded-3xl bg-base-200 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                  <Wallet size={22} />
                </div>

                <div>
                  <p className="text-sm text-base-content/50">
                    Estimated Budget
                  </p>

                  <p className="font-semibold">
                    ₹{trip.budget?.total?.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>


            <div className="rounded-3xl bg-base-200 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="text-sm text-base-content/50">
                    Best Time
                  </p>

                  <p className="font-semibold">
                    {trip.bestTimeToVisit}
                  </p>
                </div>
              </div>
            </div>

          </div>


          {/* ITINERARY */}
          <div className="mt-16">

            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Your itinerary
              </p>

              <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                Your days, planned.
              </h2>
            </div>


            <div className="space-y-6">

              {trip.itinerary?.map((day, index) => (

                <div
                  key={index}
                  className="overflow-hidden rounded-[2rem] bg-base-200"
                >

                  <div className="p-6 md:p-8">

                    {/* DAY HEADER */}
                    <div className="flex items-start gap-4">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary font-bold text-primary-content">
                        {day.day}
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-primary">
                          DAY {day.day}
                        </p>

                        <h3 className="mt-1 text-2xl font-bold md:text-3xl">
                          {day.title}
                        </h3>
                      </div>

                    </div>


                    {/* PLACES */}
                    <div className="mt-7">

                      <div className="mb-3 flex items-center gap-2">
                        <MapPin size={17} className="text-primary" />

                        <p className="font-semibold">
                          Places
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {day.places?.map((place, i) => (
                          <span
                            key={i}
                            className="rounded-full bg-base-100 px-4 py-2 text-sm text-base-content/70"
                          >
                            {place}
                          </span>
                        ))}
                      </div>

                    </div>


                    {/* ACTIVITIES */}
                    <div className="mt-6">

                      <div className="mb-3 flex items-center gap-2">
                        <ArrowRight
                          size={17}
                          className="text-primary"
                        />

                        <p className="font-semibold">
                          Activities
                        </p>
                      </div>

                      <div className="space-y-2">
                        {day.activities?.map((activity, i) => (
                          <div
                            key={i}
                            className="rounded-2xl bg-base-100 p-4 text-sm leading-6 text-base-content/60"
                          >
                            {activity}
                          </div>
                        ))}
                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* BUDGET */}
          {trip.budget && (
            <div className="mt-16">

              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                  Trip budget
                </p>

                <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                  Know your expenses.
                </h2>
              </div>


              <div className="rounded-[2rem] bg-base-200 p-6 md:p-8">

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                  <div className="rounded-2xl bg-base-100 p-5">
                    <p className="text-sm text-base-content/50">
                      Hotel
                    </p>

                    <p className="mt-2 text-xl font-bold">
                      ₹{trip.budget.hotel?.toLocaleString()}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-base-100 p-5">
                    <p className="text-sm text-base-content/50">
                      Food
                    </p>

                    <p className="mt-2 text-xl font-bold">
                      ₹{trip.budget.food?.toLocaleString()}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-base-100 p-5">
                    <p className="text-sm text-base-content/50">
                      Travel
                    </p>

                    <p className="mt-2 text-xl font-bold">
                      ₹{trip.budget.travel?.toLocaleString()}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-primary p-5 text-primary-content">
                    <p className="text-sm opacity-70">
                      Total
                    </p>

                    <p className="mt-2 text-2xl font-bold">
                      ₹{trip.budget.total?.toLocaleString()}
                    </p>
                  </div>

                </div>

              </div>

            </div>
          )}


          {/* TIPS */}
          {trip.tips?.length > 0 && (
            <div className="mt-16">

              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                  Travel tips
                </p>

                <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                  Before you go.
                </h2>
              </div>


              <div className="grid gap-4 md:grid-cols-2">

                {trip.tips.map((tip, index) => (
                  <div
                    key={index}
                    className="flex gap-4 rounded-3xl bg-base-200 p-5"
                  >
                    <div className="shrink-0 rounded-2xl bg-primary/10 p-3 text-primary">
                      <Lightbulb size={20} />
                    </div>

                    <p className="leading-7 text-base-content/60">
                      {tip}
                    </p>
                  </div>
                ))}

              </div>

            </div>
          )}


          {/* CTA */}
          <div className="mt-16 text-center">

            <Link
              to="/plan"
              className="btn btn-primary rounded-full px-8"
            >
              Plan Another Trip
              <span>✦</span>
            </Link>

          </div>

        </div>
      </section>
    </main>
  );
};

export default TripResult;