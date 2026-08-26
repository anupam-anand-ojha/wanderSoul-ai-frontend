import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

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

      <section className="px-6 pb-20 pt-32 md:px-10">

        <div className="mx-auto max-w-5xl">

          <div className="mb-10">

            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Your AI Trip
            </p>

            <h1 className="mt-3 text-5xl font-bold md:text-7xl">
              Your journey
              <br />
              <span className="text-primary">awaits.</span>
            </h1>

          </div>


          <div className="space-y-6">

            {trip.days?.map((day, index) => (
              <div
                key={index}
                className="rounded-[2rem] bg-base-200 p-6 md:p-8"
              >

                <p className="text-sm font-semibold text-primary">
                  Day {index + 1}
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  {day.title}
                </h2>

                <p className="mt-4 leading-7 text-base-content/60">
                  {day.description}
                </p>

              </div>
            ))}

          </div>


          <div className="mt-10">
            <Link
              to="/plan"
              className="btn btn-primary rounded-full px-7"
            >
              Plan Another Trip ✦
            </Link>
          </div>

        </div>

      </section>
    </main>
  );
};

export default TripResult;