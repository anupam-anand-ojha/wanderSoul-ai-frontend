import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const TripResult = () => {
  return (
    <main className="min-h-screen bg-base-100 text-base-content">

      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-16 pt-32 md:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="relative overflow-hidden rounded-[2rem]">

            <img
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1800&q=80"
              alt="Goa"
              className="h-[500px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            <div className="absolute bottom-8 left-7 right-7 text-white md:bottom-10 md:left-10">

              <div className="badge badge-primary mb-4 rounded-full px-4 py-3">
                Your AI-generated journey
              </div>

              <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
                Goa
              </h1>

              <p className="mt-3 text-white/70 md:text-lg">
                5 Days · 2 Travelers · ₹30,000
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Main Content */}
      <section className="px-6 pb-24 md:px-10">

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_320px]">

          {/* Left */}
          <div>

            {/* Overview */}
            <div className="card border border-base-content/10 bg-base-200">

              <div className="card-body">

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Your Journey
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  A perfect Goa escape
                </h2>

                <p className="mt-4 leading-7 text-base-content/60">
                  A carefully planned trip combining beautiful beaches,
                  local food, relaxed evenings and a little adventure.
                  This itinerary is designed to give you enough time to
                  explore without making your trip feel rushed.
                </p>

              </div>

            </div>


            {/* Day 1 */}
            <div className="mt-8">

              <div className="mb-5 flex items-center gap-4">

                <div className="badge badge-primary rounded-full px-4 py-3">
                  DAY 01
                </div>

                <div className="h-px flex-1 bg-base-content/10"></div>

              </div>

              <div className="card border border-base-content/10 bg-base-200">

                <div className="card-body">

                  <h3 className="text-2xl font-bold">
                    Arrival & Beach Evening
                  </h3>

                  <div className="mt-6 space-y-5">

                    <div className="flex gap-5">

                      <span className="w-16 shrink-0 text-sm font-semibold text-primary">
                        09:00
                      </span>

                      <div>
                        <h4 className="font-semibold">
                          Arrive in Goa
                        </h4>

                        <p className="mt-1 text-sm text-base-content/50">
                          Reach Goa and head towards your accommodation.
                        </p>
                      </div>

                    </div>


                    <div className="flex gap-5">

                      <span className="w-16 shrink-0 text-sm font-semibold text-primary">
                        11:00
                      </span>

                      <div>
                        <h4 className="font-semibold">
                          Hotel Check-in
                        </h4>

                        <p className="mt-1 text-sm text-base-content/50">
                          Settle in and take some time to relax.
                        </p>
                      </div>

                    </div>


                    <div className="flex gap-5">

                      <span className="w-16 shrink-0 text-sm font-semibold text-primary">
                        16:00
                      </span>

                      <div>
                        <h4 className="font-semibold">
                          Baga Beach
                        </h4>

                        <p className="mt-1 text-sm text-base-content/50">
                          Spend the afternoon by the sea and enjoy the sunset.
                        </p>
                      </div>

                    </div>


                    <div className="flex gap-5">

                      <span className="w-16 shrink-0 text-sm font-semibold text-primary">
                        20:00
                      </span>

                      <div>
                        <h4 className="font-semibold">
                          Dinner
                        </h4>

                        <p className="mt-1 text-sm text-base-content/50">
                          Try some local Goan cuisine.
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* Day 2 */}
            <div className="mt-10">

              <div className="mb-5 flex items-center gap-4">

                <div className="badge badge-primary rounded-full px-4 py-3">
                  DAY 02
                </div>

                <div className="h-px flex-1 bg-base-content/10"></div>

              </div>

              <div className="card border border-base-content/10 bg-base-200">

                <div className="card-body">

                  <h3 className="text-2xl font-bold">
                    North Goa Adventure
                  </h3>

                  <div className="mt-6 space-y-5">

                    <div className="flex gap-5">

                      <span className="w-16 shrink-0 text-sm font-semibold text-primary">
                        08:00
                      </span>

                      <div>
                        <h4 className="font-semibold">
                          Breakfast
                        </h4>

                        <p className="mt-1 text-sm text-base-content/50">
                          Start the day with a relaxed breakfast.
                        </p>
                      </div>

                    </div>


                    <div className="flex gap-5">

                      <span className="w-16 shrink-0 text-sm font-semibold text-primary">
                        10:00
                      </span>

                      <div>
                        <h4 className="font-semibold">
                          Fort Aguada
                        </h4>

                        <p className="mt-1 text-sm text-base-content/50">
                          Explore the historic fort and enjoy coastal views.
                        </p>
                      </div>

                    </div>


                    <div className="flex gap-5">

                      <span className="w-16 shrink-0 text-sm font-semibold text-primary">
                        14:00
                      </span>

                      <div>
                        <h4 className="font-semibold">
                          Anjuna
                        </h4>

                        <p className="mt-1 text-sm text-base-content/50">
                          Explore the beach and nearby cafes.
                        </p>
                      </div>

                    </div>


                    <div className="flex gap-5">

                      <span className="w-16 shrink-0 text-sm font-semibold text-primary">
                        19:00
                      </span>

                      <div>
                        <h4 className="font-semibold">
                          Sunset & Nightlife
                        </h4>

                        <p className="mt-1 text-sm text-base-content/50">
                          Finish the day with sunset views and local nightlife.
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* Day 3 */}
            <div className="mt-10">

              <div className="mb-5 flex items-center gap-4">

                <div className="badge badge-primary rounded-full px-4 py-3">
                  DAY 03
                </div>

                <div className="h-px flex-1 bg-base-content/10"></div>

              </div>

              <div className="card border border-base-content/10 bg-base-200">

                <div className="card-body">

                  <h3 className="text-2xl font-bold">
                    South Goa & Slow Travel
                  </h3>

                  <p className="mt-4 leading-7 text-base-content/60">
                    Spend a slower day exploring quieter beaches, local
                    restaurants and beautiful coastal spots.
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* Right Sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">

            {/* Budget */}
            <div className="card border border-base-content/10 bg-base-200">

              <div className="card-body">

                <h3 className="text-xl font-bold">
                  Estimated Budget
                </h3>

                <div className="mt-5 space-y-4">

                  <div className="flex justify-between text-sm">
                    <span className="text-base-content/50">
                      Accommodation
                    </span>

                    <span className="font-medium">
                      ₹10,000
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-base-content/50">
                      Transport
                    </span>

                    <span className="font-medium">
                      ₹6,000
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-base-content/50">
                      Food
                    </span>

                    <span className="font-medium">
                      ₹5,000
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-base-content/50">
                      Activities
                    </span>

                    <span className="font-medium">
                      ₹4,000
                    </span>
                  </div>

                  <div className="divider my-1"></div>

                  <div className="flex justify-between">
                    <span className="font-semibold">
                      Total
                    </span>

                    <span className="font-bold text-primary">
                      ₹25,000
                    </span>
                  </div>

                </div>

              </div>

            </div>


            {/* Tips */}
            <div className="card border border-base-content/10 bg-base-200">

              <div className="card-body">

                <h3 className="text-xl font-bold">
                  Travel Tips
                </h3>

                <div className="mt-4 space-y-3 text-sm text-base-content/60">

                  <p>✦ Carry sunscreen and comfortable footwear.</p>

                  <p>✦ Keep some cash for local shops and transport.</p>

                  <p>✦ Start sightseeing early to avoid crowds.</p>

                </div>

              </div>

            </div>


            {/* Actions */}
            <div className="flex gap-3">

              <button className="btn btn-primary flex-1 rounded-full">
                ♡ Save Trip
              </button>

              <button className="btn btn-outline rounded-full">
                ↗
              </button>

            </div>

          </aside>

        </div>

      </section>


      {/* Bottom CTA */}
      <section className="px-6 pb-24 md:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="rounded-[2rem] border border-primary/20 bg-primary/10 p-8 md:p-12">

            <p className="text-sm uppercase tracking-[0.2em] text-primary">
              Want another adventure?
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              Create a new journey.
            </h2>

            <Link
              to="/plan"
              className="btn btn-primary mt-6 rounded-full px-7"
            >
              Plan Another Trip ↗
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};

export default TripResult;