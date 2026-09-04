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
    <main className="relative min-h-screen overflow-hidden bg-[#faf8ff] text-[#24152f]">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#e9ddff] opacity-60 blur-3xl" />

        <div className="absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-[#eee4ff] opacity-70 blur-3xl" />

        <div className="absolute bottom-[-200px] left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#f3eaff] blur-3xl" />

      </div>

      <div className="relative z-10">

        <Navbar />

        {/* Hero */}
        <section className="px-6 pb-20 pt-32 md:px-10 md:pt-40">

          <div className="mx-auto max-w-3xl">

            <div className="text-center">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A300A3]">
                AI Trip Planner
              </p>

              <h1 className="mt-3 text-5xl font-bold tracking-tight text-[#24152f] md:text-7xl">
                Create your
                <br />
                <span className="text-[#A300A3]">
                  perfect trip.
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#75677f] md:text-lg">
                Tell wanderSoul what you're looking for and AI will build your
                journey.
              </p>

            </div>


            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="mt-12 rounded-[2rem] border border-[#e9e0f2] bg-white p-6 shadow-xl shadow-[#7c3aed]/5 md:p-10"
            >

              <div className="space-y-6">

                {/* Destination */}
                <div>

                  <label className="mb-2 block text-sm font-semibold text-[#24152f]">
                    Destination
                  </label>

                  <input
                    type="text"
                    name="place"
                    value={formData.place}
                    onChange={handleChange}
                    placeholder="Where do you want to go?"
                    className="h-14 w-full rounded-2xl border border-[#e9e0f2] bg-[#faf8ff] px-4 text-[#24152f] outline-none transition placeholder:text-[#8a7b94] focus:border-[#A300A3] focus:ring-2 focus:ring-[#A300A3]/10"
                    required
                  />

                </div>


                {/* Duration + Budget */}
                <div className="grid gap-6 md:grid-cols-2">

                  {/* Duration */}
                  <div>

                    <label className="mb-2 block text-sm font-semibold text-[#24152f]">
                      Trip duration
                    </label>

                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="h-14 w-full rounded-2xl border border-[#e9e0f2] bg-[#faf8ff] px-4 text-[#24152f] outline-none transition focus:border-[#A300A3] focus:ring-2 focus:ring-[#A300A3]/10"
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


                  {/* Budget */}
                  <div>

                    <label className="mb-2 block text-sm font-semibold text-[#24152f]">
                      Budget
                    </label>

                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="h-14 w-full rounded-2xl border border-[#e9e0f2] bg-[#faf8ff] px-4 text-[#24152f] outline-none transition focus:border-[#A300A3] focus:ring-2 focus:ring-[#A300A3]/10"
                      required
                    >
                      <option value="">Choose budget</option>
                      <option value="under 10000">
                        Under ₹10,000
                      </option>
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


                {/* Travelers */}
                <div>

                  <label className="mb-2 block text-sm font-semibold text-[#24152f]">
                    Travelling with?
                  </label>

                  <select
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    className="h-14 w-full rounded-2xl border border-[#e9e0f2] bg-[#faf8ff] px-4 text-[#24152f] outline-none transition focus:border-[#A300A3] focus:ring-2 focus:ring-[#A300A3]/10"
                    required
                  >
                    <option value="">Choose one</option>
                    <option value="Solo">Solo</option>
                    <option value="Couple">Couple</option>
                    <option value="Friends">Friends</option>
                    <option value="Family">Family</option>
                  </select>

                </div>


                {/* Interests */}
                <div>

                  <label className="mb-2 block text-sm font-semibold text-[#24152f]">
                    What do you enjoy?
                  </label>

                  <textarea
                    name="interests"
                    value={formData.interests}
                    onChange={handleChange}
                    placeholder="Beaches, mountains, food, adventure, nightlife..."
                    className="min-h-32 w-full rounded-2xl border border-[#e9e0f2] bg-[#faf8ff] p-4 text-[#24152f] outline-none transition placeholder:text-[#8a7b94] focus:border-[#A300A3] focus:ring-2 focus:ring-[#A300A3]/10"
                    required
                  />

                </div>


                {/* Error */}
                {error && (
                  <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                    {error}
                  </div>
                )}


                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-[#A300A3] text-base font-semibold text-white shadow-lg shadow-[#A300A3]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#800080] hover:shadow-xl hover:shadow-[#A300A3]/20 disabled:cursor-not-allowed disabled:opacity-70"
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