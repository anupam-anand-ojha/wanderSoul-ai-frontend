import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../services/api";

const PlanTrip = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const selectedPlace = searchParams.get("place");

  const [formData, setFormData] = useState({
    place: selectedPlace || "",
    time: "",
    budget: "",
    travelers: "",
    interests: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await api.post("/plan/travel", formData);

      navigate("/trip/result", {
        state: {
          trip: response.data,
        },
      });
    } catch (error) {
      setError(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
   <main className="relative min-h-screen overflow-hidden bg-[#050914]">

  {/* Animated Background */}
  <div className="travel-bg">

    <div className="gradient-blob blob-purple"></div>

    <div className="gradient-blob blob-blue"></div>

    <div className="gradient-blob blob-violet"></div>

    <div className="gradient-blob blob-pink"></div>

    <div className="center-glow"></div>

    <div className="background-grid"></div>

    <div className="background-stars"></div>

  </div>

  {/* Website Content */}
  <div className="relative z-10">
        <Navbar />

        <section className="px-6 pb-20 pt-32 md:px-10 md:pt-40">
          <div className="mx-auto max-w-3xl">

            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                AI Trip Planner
              </p>

              <h1 className="mt-3 text-5xl font-bold md:text-7xl">
                Create your
                <br />
                <span className="text-primary">perfect trip.</span>
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-base text-white/50">
                Tell wanderSoul what you're looking for and AI will build your
                journey.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-12 rounded-[2rem] border border-white/5 bg-[#0b111d]/80 p-6 shadow-2xl backdrop-blur-xl md:p-10"
            >
              <div className="space-y-6">

                <div>
                  <label className="mb-2 block text-sm font-semibold text-white">
                    Destination
                  </label>

                  <input
                    type="text"
                    name="place"
                    value={formData.place}
                    onChange={handleChange}
                    placeholder="Where do you want to go?"
                    className="input input-bordered h-14 w-full rounded-2xl border-white/10 bg-white/[0.03] text-white placeholder:text-white/30"
                    required
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-white">
                      Trip duration
                    </label>

                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="select select-bordered h-14 w-full rounded-2xl border-white/10 bg-[#0d1422] text-white"
                      required
                    >
                      <option value="">Choose duration</option>
                      <option value="2 days">2 Days</option>
                      <option value="3 days">3 Days</option>
                      <option value="5 days">5 Days</option>
                      <option value="7 days">7 Days</option>
                      <option value="10 days">10 Days</option>
                      <option value="14 days">14 Days</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-white">
                      Budget
                    </label>

                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="select select-bordered h-14 w-full rounded-2xl border-white/10 bg-[#0d1422] text-white"
                      required
                    >
                      <option value="">Choose budget</option>
                      <option value="under 10000">Under ₹10,000</option>
                      <option value="10000 - 25000">
                        ₹10,000 - ₹25,000
                      </option>
                      <option value="25000 - 50000">
                        ₹25,000 - ₹50,000
                      </option>
                      <option value="50000 - 100000">
                        ₹50,000 - ₹1,00,000
                      </option>
                      <option value="above 100000">
                        Above ₹1,00,000
                      </option>
                    </select>
                  </div>

                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-white">
                    Travelling with?
                  </label>

                  <select
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    className="select select-bordered h-14 w-full rounded-2xl border-white/10 bg-[#0d1422] text-white"
                    required
                  >
                    <option value="">Choose one</option>
                    <option value="Solo">Solo</option>
                    <option value="Couple">Couple</option>
                    <option value="Friends">Friends</option>
                    <option value="Family">Family</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-white">
                    What do you enjoy?
                  </label>

                  <textarea
                    name="interests"
                    value={formData.interests}
                    onChange={handleChange}
                    placeholder="Beaches, mountains, food, adventure, nightlife..."
                    className="textarea textarea-bordered min-h-32 w-full rounded-2xl border-white/10 bg-white/[0.03] text-white placeholder:text-white/30"
                    required
                  />
                </div>

                {error && (
                  <div className="alert alert-error rounded-2xl">
                    <span>{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary h-14 w-full rounded-full text-base shadow-lg shadow-primary/20"
                >
                  {loading ? (
                    <>
                      <span className="loading loading-spinner loading-sm" />
                      Creating your trip...
                    </>
                  ) : (
                    <>
                      Generate My Trip
                      <span>✦</span>
                    </>
                  )}
                </button>

              </div>
            </form>

          </div>
        </section>
      </div>
    </main>
  );
};

export default PlanTrip;