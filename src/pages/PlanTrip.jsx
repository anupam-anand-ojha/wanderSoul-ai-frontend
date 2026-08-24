import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const PlanTrip = () => {
  return (
    <main className="min-h-screen bg-base-100 text-base-content">

      <Navbar />

      {/* Header */}
      <section className="px-6 pb-12 pt-32 md:px-10">
        <div className="mx-auto max-w-7xl">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            AI Travel Planner
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Let's plan your
            <span className="text-primary"> journey.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-base-content/60 md:text-lg">
            Tell us a little about your trip and wanderSoul will create a
            personalized itinerary for you.
          </p>

        </div>
      </section>


      {/* Form */}
      <section className="px-6 pb-24 md:px-10">

        <div className="mx-auto max-w-5xl">

          <div className="card border border-base-content/10 bg-base-200 shadow-xl">

            <div className="card-body gap-8 p-6 md:p-10">


              {/* Destination */}
              <div>

                <label className="mb-3 block text-sm font-semibold">
                  Where do you want to go?
                </label>

                <input
                  type="text"
                  placeholder="e.g. Goa, Bali, Kashmir..."
                  className="input input-bordered h-14 w-full rounded-2xl bg-base-100"
                />

              </div>


              {/* Duration + Budget */}
              <div className="grid gap-6 md:grid-cols-2">

                <div>

                  <label className="mb-3 block text-sm font-semibold">
                    How long are you travelling?
                  </label>

                  <select className="select select-bordered h-14 w-full rounded-2xl bg-base-100">

                    <option disabled selected>
                      Select duration
                    </option>

                    <option>2 Days</option>
                    <option>3 Days</option>
                    <option>4 Days</option>
                    <option>5 Days</option>
                    <option>7 Days</option>
                    <option>10 Days</option>
                    <option>14 Days</option>

                  </select>

                </div>


                <div>

                  <label className="mb-3 block text-sm font-semibold">
                    What's your budget?
                  </label>

                  <input
                    type="number"
                    placeholder="₹ 30,000"
                    className="input input-bordered h-14 w-full rounded-2xl bg-base-100"
                  />

                </div>

              </div>


              {/* Travelers + Transport */}
              <div className="grid gap-6 md:grid-cols-2">

                <div>

                  <label className="mb-3 block text-sm font-semibold">
                    Who's travelling?
                  </label>

                  <select className="select select-bordered h-14 w-full rounded-2xl bg-base-100">

                    <option disabled selected>
                      Select travelers
                    </option>

                    <option>Solo</option>
                    <option>2 Travelers</option>
                    <option>3-4 Travelers</option>
                    <option>5+ Travelers</option>

                  </select>

                </div>


                <div>

                  <label className="mb-3 block text-sm font-semibold">
                    Preferred transport
                  </label>

                  <select className="select select-bordered h-14 w-full rounded-2xl bg-base-100">

                    <option disabled selected>
                      Select transport
                    </option>

                    <option>Flight</option>
                    <option>Train</option>
                    <option>Car</option>
                    <option>Bus</option>
                    <option>Any</option>

                  </select>

                </div>

              </div>


              {/* Interests */}
              <div>

                <label className="mb-4 block text-sm font-semibold">
                  What are you interested in?
                </label>

                <div className="flex flex-wrap gap-3">

                  <button
                    type="button"
                    className="btn btn-primary rounded-full"
                  >
                    Adventure
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline rounded-full"
                  >
                    Beaches
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline rounded-full"
                  >
                    Nature
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline rounded-full"
                  >
                    Food
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline rounded-full"
                  >
                    Culture
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline rounded-full"
                  >
                    Nightlife
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline rounded-full"
                  >
                    Relaxation
                  </button>

                </div>

              </div>


              {/* Travel Style */}
              <div>

                <label className="mb-3 block text-sm font-semibold">
                  What kind of trip are you looking for?
                </label>

                <textarea
                  rows="4"
                  placeholder="Tell us anything else about your ideal trip..."
                  className="textarea textarea-bordered w-full resize-none rounded-2xl bg-base-100"
                ></textarea>

              </div>


              {/* Divider */}
              <div className="divider"></div>


              {/* Submit */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <p className="font-semibold">
                    Ready to explore?
                  </p>

                  <p className="text-sm text-base-content/50">
                    Your personalized itinerary will be generated by AI.
                  </p>
                </div>

                <button
                  type="button"
                  className="btn btn-primary rounded-full px-8"
                >
                  Generate My Trip
                  <span>✦</span>
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Bottom CTA */}
      <section className="px-6 pb-24 md:px-10">

        <div className="mx-auto max-w-5xl">

          <div className="rounded-[2rem] border border-base-content/10 bg-base-200/50 p-8 text-center md:p-12">

            <p className="text-sm uppercase tracking-[0.2em] text-primary">
              Not sure where to go?
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Let wanderSoul inspire you.
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-base-content/50">
              Explore destinations and discover places that match your travel
              style.
            </p>

            <Link
              to="/explore"
              className="btn btn-outline mt-6 rounded-full px-7"
            >
              Explore Destinations ↗
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};

export default PlanTrip;