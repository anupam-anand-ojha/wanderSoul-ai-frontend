import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const Destination = () => {
  const { place } = useParams();

  const destinations = {
    bali: {
      name: "Bali",
      country: "Indonesia",
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=85",
    },

    kashmir: {
      name: "Kashmir",
      country: "India",
      image:
        "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1600&q=85",
    },

    santorini: {
      name: "Santorini",
      country: "Greece",
      image:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1600&q=85",
    },

    dubai: {
      name: "Dubai",
      country: "UAE",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=85",
    },

    manali: {
      name: "Manali",
      country: "India",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1600&q=85",
    },

    kyoto: {
      name: "Kyoto",
      country: "Japan",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=85",
    },
  };

  const destination = destinations[place];

  if (!destination) {
    return (
      <main className="min-h-screen bg-base-100">
        <Navbar />

        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold">
              Destination not found
            </h1>

            <Link
              to="/explore"
              className="btn btn-primary mt-5 rounded-full"
            >
              Back to Explore
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-base-100">
      <Navbar />

      <section className="px-6 pb-20 pt-28 md:px-10">
        <div className="mx-auto max-w-6xl">

          <div className="relative overflow-hidden rounded-[2rem]">

            <img
              src={destination.image}
              alt={destination.name}
              className="h-[70vh] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

            <div className="absolute bottom-8 left-8 text-white md:bottom-12 md:left-12">

              <p className="text-sm uppercase tracking-widest text-white/60">
                {destination.country}
              </p>

              <h1 className="mt-2 text-6xl font-bold md:text-8xl">
                {destination.name}
                <span className="text-primary">.</span>
              </h1>

              <Link
                to={`/plan?place=${destination.name}`}
                className="btn btn-primary mt-6 rounded-full px-7"
              >
                Plan with AI ✦
              </Link>

            </div>

          </div>

        </div>
      </section>
    </main>
  );
};

export default Destination;