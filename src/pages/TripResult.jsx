import { Link, useLocation } from "react-router-dom";
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
      <main className="min-h-screen bg-[#faf7ff] text-[#24152f]">
        <Navbar />

        <div className="flex min-h-screen items-center justify-center px-6">
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#800080]/10 text-[#800080]">
              <Sparkles size={28} />
            </div>

            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              No trip found
            </h1>

            <p className="mx-auto mt-4 max-w-md text-[#24152f]/60">
              Create a personalized journey with wanderSoul and let AI plan your
              next adventure.
            </p>

            <Link
              to="/plan"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#800080] to-[#EE82EE] px-7 py-3.5 font-medium text-white shadow-xl shadow-[#800080]/20 transition duration-300 hover:scale-[1.03]"
            >
              Create a Trip
              <Sparkles size={17} />
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#faf7ff] text-[#24152f]">
      <Navbar />

      {/* ================= BACKGROUND GLOW ================= */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -left-48 top-20 h-[32rem] w-[32rem] rounded-full bg-[#EE82EE]/10 blur-3xl" />

        <div className="absolute -right-48 top-[35%] h-[34rem] w-[34rem] rounded-full bg-[#800080]/10 blur-3xl" />

        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-[#f3e8ff] blur-3xl" />
      </div>

      <section className="relative z-10 px-6 pb-24 pt-28 md:px-10 md:pt-32">
        <div className="mx-auto max-w-7xl">
          {/* ================= HERO ================= */}
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#800080]/20 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#800080] shadow-sm">
              <Sparkles size={14} />
              AI Generated Trip
            </div>

            <h1 className="text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
              Your journey
              <br />
              <span className="bg-gradient-to-r from-[#800080] to-[#EE82EE] bg-clip-text text-transparent">
                awaits.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-[#24152f]/60 md:text-lg">
              {trip.summary}
            </p>
          </div>

          {/* ================= QUICK INFO ================= */}
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {/* Duration */}
            <div className="card border border-[#800080]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#800080]/30 hover:shadow-lg hover:shadow-[#800080]/10">
              <div className="card-body">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#800080]/10 text-[#800080]">
                    <CalendarDays size={21} />
                  </div>

                  <div>
                    <p className="text-sm text-[#24152f]/50">Duration</p>

                    <p className="mt-1 font-bold text-[#24152f]">
                      {trip.itinerary?.length || 0} Days
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Budget */}
            <div className="card border border-[#800080]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#800080]/30 hover:shadow-lg hover:shadow-[#800080]/10">
              <div className="card-body">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EE82EE]/15 text-[#800080]">
                    <Wallet size={21} />
                  </div>

                  <div>
                    <p className="text-sm text-[#24152f]/50">
                      Estimated Budget
                    </p>

                    <p className="mt-1 font-bold text-[#24152f]">
                      ₹{trip.budget?.total?.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Best Time */}
            <div className="card border border-[#800080]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#800080]/30 hover:shadow-lg hover:shadow-[#800080]/10">
              <div className="card-body">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#800080]/10 text-[#800080]">
                    <MapPin size={21} />
                  </div>

                  <div>
                    <p className="text-sm text-[#24152f]/50">Best Time</p>

                    <p className="mt-1 font-bold text-[#24152f]">
                      {trip.bestTimeToVisit}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= ITINERARY ================= */}
          <section className="mt-24">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#800080]">
                Your itinerary
              </p>

              <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
                Your days,
                <br />
                <span className="bg-gradient-to-r from-[#800080] to-[#EE82EE] bg-clip-text text-transparent">
                  planned.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-[#24152f]/60">
                A personalized day-by-day journey designed around your trip.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              {trip.itinerary?.map((day, index) => (
                <div
                  key={index}
                  className="card overflow-hidden border border-[#800080]/10 bg-white shadow-sm transition duration-300 hover:border-[#800080]/25 hover:shadow-xl hover:shadow-[#800080]/10"
                >
                  <div className="card-body p-6 md:p-8">
                    {/* Day Header */}
                    <div className="flex items-start gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#800080] to-[#EE82EE] text-lg font-bold text-white shadow-lg shadow-[#800080]/20">
                        {day.day}
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#800080]">
                          Day {day.day}
                        </p>

                        <h3 className="mt-1 text-2xl font-bold tracking-tight text-[#24152f] md:text-3xl">
                          {day.title}
                        </h3>
                      </div>
                    </div>

                    {/* Places */}
                    <div className="mt-8">
                      <div className="mb-4 flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#800080]/10 text-[#800080]">
                          <MapPin size={16} />
                        </div>

                        <h4 className="font-bold">Places</h4>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {day.places?.map((place, i) => (
                          <span
                            key={i}
                            className="rounded-full border border-[#800080]/10 bg-[#faf7ff] px-4 py-2 text-sm font-medium text-[#24152f]/70 transition hover:border-[#800080]/25 hover:bg-[#800080]/5"
                          >
                            {place}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Activities */}
                    <div className="mt-8">
                      <div className="mb-4 flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#EE82EE]/15 text-[#800080]">
                          <ArrowRight size={16} />
                        </div>

                        <h4 className="font-bold">Activities</h4>
                      </div>

                      <div className="space-y-3">
                        {day.activities?.map((activity, i) => (
                          <div
                            key={i}
                            className="rounded-2xl border border-[#800080]/10 bg-[#faf7ff] p-4 text-sm leading-6 text-[#24152f]/60 transition duration-300 hover:border-[#800080]/20 hover:bg-[#800080]/5"
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
          </section>

          {/* ================= BUDGET ================= */}
          {trip.budget && (
            <section className="mt-24">
              <div className="max-w-2xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#800080]">
                  Trip budget
                </p>

                <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
                  Know your
                  <br />
                  <span className="bg-gradient-to-r from-[#800080] to-[#EE82EE] bg-clip-text text-transparent">
                    expenses.
                  </span>
                </h2>
              </div>

              <div className="card mt-12 border border-[#800080]/10 bg-white shadow-sm">
                <div className="card-body p-5 md:p-8">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Hotel */}
                    <div className="rounded-2xl border border-[#800080]/10 bg-[#faf7ff] p-5">
                      <p className="text-sm text-[#24152f]/50">Hotel</p>

                      <p className="mt-2 text-xl font-bold text-[#24152f]">
                        ₹{trip.budget.hotel?.toLocaleString()}
                      </p>
                    </div>

                    {/* Food */}
                    <div className="rounded-2xl border border-[#800080]/10 bg-[#faf7ff] p-5">
                      <p className="text-sm text-[#24152f]/50">Food</p>

                      <p className="mt-2 text-xl font-bold text-[#24152f]">
                        ₹{trip.budget.food?.toLocaleString()}
                      </p>
                    </div>

                    {/* Travel */}
                    <div className="rounded-2xl border border-[#800080]/10 bg-[#faf7ff] p-5">
                      <p className="text-sm text-[#24152f]/50">Travel</p>

                      <p className="mt-2 text-xl font-bold text-[#24152f]">
                        ₹{trip.budget.travel?.toLocaleString()}
                      </p>
                    </div>

                    {/* Total */}
                    <div className="rounded-2xl bg-gradient-to-br from-[#800080] to-[#EE82EE] p-5 text-white shadow-lg shadow-[#800080]/20">
                      <p className="text-sm text-white/70">Total</p>

                      <p className="mt-2 text-2xl font-bold">
                        ₹{trip.budget.total?.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ================= TIPS ================= */}
          {trip.tips?.length > 0 && (
            <section className="mt-24">
              <div className="max-w-2xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#800080]">
                  Travel tips
                </p>

                <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
                  Before you
                  <br />
                  <span className="bg-gradient-to-r from-[#800080] to-[#EE82EE] bg-clip-text text-transparent">
                    go.
                  </span>
                </h2>
              </div>

              <div className="mt-12 grid gap-5 md:grid-cols-2">
                {trip.tips.map((tip, index) => (
                  <div
                    key={index}
                    className="card border border-[#800080]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#800080]/25 hover:shadow-lg hover:shadow-[#800080]/10"
                  >
                    <div className="card-body">
                      <div className="flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EE82EE]/15 text-[#800080]">
                          <Lightbulb size={20} />
                        </div>

                        <p className="leading-7 text-[#24152f]/60">{tip}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ================= FINAL CTA ================= */}
          <section className="relative mt-24 overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#800080] to-[#EE82EE] px-7 py-16 text-white shadow-2xl shadow-[#800080]/20 md:px-14 md:py-24">
            <div className="relative z-10 max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                Your journey starts here
              </p>

              <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                Ready for your
                <br />
                next adventure?
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/70">
                Create another personalized journey and let wanderSoul plan the
                details for you.
              </p>

              <Link
                to="/plan"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-[#800080] shadow-lg transition duration-300 hover:scale-[1.03] hover:bg-white/90"
              >
                Plan Another Trip
                <Sparkles size={17} />
              </Link>
            </div>

            {/* Decorative Circles */}
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[50px] border-white/10" />

            <div className="absolute -bottom-32 right-20 h-72 w-72 rounded-full border-[50px] border-white/10" />

            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/5 blur-2xl" />
          </section>
        </div>
      </section>
    </main>
  );
};

export default TripResult;
