import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Explore = () => {
  return (
    <main className="min-h-screen bg-base-100">
      <Navbar />

      <section className="px-6 pb-20 pt-32 md:px-10">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Explore
          </p>

          <h1 className="mt-3 text-5xl font-bold md:text-7xl">
            Find your next
            <br />
            <span className="text-primary">destination.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base text-base-content/50">
            Pick a place that inspires you and let wanderSoul plan the rest.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            <Link
              to="/explore/bali"
              className="card overflow-hidden bg-base-200 transition hover:-translate-y-1"
            >
              <img
                src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80"
                alt="Bali"
                className="h-64 w-full object-cover"
              />

              <div className="card-body">
                <h2 className="card-title">Bali</h2>
                <p className="text-sm text-base-content/50">
                  Indonesia
                </p>
              </div>
            </Link>


            <Link
              to="/explore/kashmir"
              className="card overflow-hidden bg-base-200 transition hover:-translate-y-1"
            >
              <img
                src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=900&q=80"
                alt="Kashmir"
                className="h-64 w-full object-cover"
              />

              <div className="card-body">
                <h2 className="card-title">Kashmir</h2>
                <p className="text-sm text-base-content/50">
                  India
                </p>
              </div>
            </Link>


            <Link
              to="/explore/santorini"
              className="card overflow-hidden bg-base-200 transition hover:-translate-y-1"
            >
              <img
                src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=80"
                alt="Santorini"
                className="h-64 w-full object-cover"
              />

              <div className="card-body">
                <h2 className="card-title">Santorini</h2>
                <p className="text-sm text-base-content/50">
                  Greece
                </p>
              </div>
            </Link>


            <Link
              to="/explore/dubai"
              className="card overflow-hidden bg-base-200 transition hover:-translate-y-1"
            >
              <img
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80"
                alt="Dubai"
                className="h-64 w-full object-cover"
              />

              <div className="card-body">
                <h2 className="card-title">Dubai</h2>
                <p className="text-sm text-base-content/50">
                  UAE
                </p>
              </div>
            </Link>


            <Link
              to="/explore/manali"
              className="card overflow-hidden bg-base-200 transition hover:-translate-y-1"
            >
              <img
                src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80"
                alt="Manali"
                className="h-64 w-full object-cover"
              />

              <div className="card-body">
                <h2 className="card-title">Manali</h2>
                <p className="text-sm text-base-content/50">
                  India
                </p>
              </div>
            </Link>


            <Link
              to="/explore/kyoto"
              className="card overflow-hidden bg-base-200 transition hover:-translate-y-1"
            >
              <img
                src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80"
                alt="Kyoto"
                className="h-64 w-full object-cover"
              />

              <div className="card-body">
                <h2 className="card-title">Kyoto</h2>
                <p className="text-sm text-base-content/50">
                  Japan
                </p>
              </div>
            </Link>

          </div>

        </div>
      </section>
    </main>
  );
};

export default Explore;