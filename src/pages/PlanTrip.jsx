import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const PlanTrip = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    place: "",
    time: "",
    budget: "",
    travelers: "",
    transport: "",
    interests: [],
    preferences: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleInterest = (interest) => {
    if (formData.interests.includes(interest)) {
      setFormData({
        ...formData,
        interests: formData.interests.filter(
          (item) => item !== interest
        ),
      });
    } else {
      setFormData({
        ...formData,
        interests: [...formData.interests, interest],
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.place || !formData.time || !formData.budget) {
      return;
    }

    setLoading(true);

    try {
      /*
        Backend API yaha connect hoga.

        Example:

        const response = await axios.post(
          "http://localhost:5000/api/travel/generate",
          formData
        );

        navigate("/trip", {
          state: response.data,
        });
      */

      console.log("Trip Data:", formData);

      // Temporary navigation
      setTimeout(() => {
        navigate("/trip/result");
      }, 800);

    } catch (error) {
      console.error("Failed to generate trip:", error);
    } finally {
      setLoading(false);
    }
  };

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
            Tell wanderSoul what you're looking for and let AI create a
            journey around you.
          </p>

        </div>

      </section>


      {/* Form */}
      <section className="px-6 pb-24 md:px-10">

        <div className="mx-auto max-w-5xl">

          <form
            onSubmit={handleSubmit}
            className="card border border-base-content/10 bg-base-200 shadow-xl"
          >

            <div className="card-body gap-8 p-6 md:p-10">

              {/* Destination */}
              <div>

                <label className="mb-3 block text-sm font-semibold">
                  Where do you want to go?
                </label>

                <input
                  type="text"
                  name="place"
                  value={formData.place}
                  onChange={handleChange}
                  placeholder="e.g. Goa, Bali, Kashmir..."
                  className="input input-bordered h-14 w-full rounded-2xl bg-base-100"
                  required
                />

              </div>


              {/* Duration + Budget */}
              <div className="grid gap-6 md:grid-cols-2">

                <div>

                  <label className="mb-3 block text-sm font-semibold">
                    How long are you travelling?
                  </label>

                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="select select-bordered h-14 w-full rounded-2xl bg-base-100"
                    required
                  >

                    <option value="" disabled>
                      Select duration
                    </option>

                    <option value="2 Days">2 Days</option>
                    <option value="3 Days">3 Days</option>
                    <option value="4 Days">4 Days</option>
                    <option value="5 Days">5 Days</option>
                    <option value="7 Days">7 Days</option>
                    <option value="10 Days">10 Days</option>
                    <option value="14 Days">14 Days</option>

                  </select>

                </div>


                <div>

                  <label className="mb-3 block text-sm font-semibold">
                    What's your budget?
                  </label>

                  <input
                    type="number"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="₹ 30,000"
                    className="input input-bordered h-14 w-full rounded-2xl bg-base-100"
                    required
                  />

                </div>

              </div>


              {/* Travelers + Transport */}
              <div className="grid gap-6 md:grid-cols-2">

                <div>

                  <label className="mb-3 block text-sm font-semibold">
                    Who's travelling?
                  </label>

                  <select
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    className="select select-bordered h-14 w-full rounded-2xl bg-base-100"
                  >

                    <option value="" disabled>
                      Select travelers
                    </option>

                    <option value="Solo">Solo</option>
                    <option value="2 Travelers">2 Travelers</option>
                    <option value="3-4 Travelers">
                      3-4 Travelers
                    </option>
                    <option value="5+ Travelers">
                      5+ Travelers
                    </option>

                  </select>

                </div>


                <div>

                  <label className="mb-3 block text-sm font-semibold">
                    Preferred transport
                  </label>

                  <select
                    name="transport"
                    value={formData.transport}
                    onChange={handleChange}
                    className="select select-bordered h-14 w-full rounded-2xl bg-base-100"
                  >

                    <option value="" disabled>
                      Select transport
                    </option>

                    <option value="Flight">Flight</option>
                    <option value="Train">Train</option>
                    <option value="Car">Car</option>
                    <option value="Bus">Bus</option>
                    <option value="Any">Any</option>

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
                    onClick={() => handleInterest("Adventure")}
                    className={`btn rounded-full ${
                      formData.interests.includes("Adventure")
                        ? "btn-primary"
                        : "btn-outline"
                    }`}
                  >
                    Adventure
                  </button>


                  <button
                    type="button"
                    onClick={() => handleInterest("Beaches")}
                    className={`btn rounded-full ${
                      formData.interests.includes("Beaches")
                        ? "btn-primary"
                        : "btn-outline"
                    }`}
                  >
                    Beaches
                  </button>


                  <button
                    type="button"
                    onClick={() => handleInterest("Nature")}
                    className={`btn rounded-full ${
                      formData.interests.includes("Nature")
                        ? "btn-primary"
                        : "btn-outline"
                    }`}
                  >
                    Nature
                  </button>


                  <button
                    type="button"
                    onClick={() => handleInterest("Food")}
                    className={`btn rounded-full ${
                      formData.interests.includes("Food")
                        ? "btn-primary"
                        : "btn-outline"
                    }`}
                  >
                    Food
                  </button>


                  <button
                    type="button"
                    onClick={() => handleInterest("Culture")}
                    className={`btn rounded-full ${
                      formData.interests.includes("Culture")
                        ? "btn-primary"
                        : "btn-outline"
                    }`}
                  >
                    Culture
                  </button>


                  <button
                    type="button"
                    onClick={() => handleInterest("Nightlife")}
                    className={`btn rounded-full ${
                      formData.interests.includes("Nightlife")
                        ? "btn-primary"
                        : "btn-outline"
                    }`}
                  >
                    Nightlife
                  </button>


                  <button
                    type="button"
                    onClick={() => handleInterest("Relaxation")}
                    className={`btn rounded-full ${
                      formData.interests.includes("Relaxation")
                        ? "btn-primary"
                        : "btn-outline"
                    }`}
                  >
                    Relaxation
                  </button>

                </div>

              </div>


              {/* Preferences */}
              <div>

                <label className="mb-3 block text-sm font-semibold">
                  Anything else we should know?
                </label>

                <textarea
                  name="preferences"
                  value={formData.preferences}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us about your ideal trip..."
                  className="textarea textarea-bordered w-full resize-none rounded-2xl bg-base-100"
                />

              </div>


              <div className="divider"></div>


              {/* Submit */}
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                <div>

                  <p className="font-semibold">
                    Ready to explore?
                  </p>

                  <p className="text-sm text-base-content/50">
                    AI will create a personalized itinerary for you.
                  </p>

                </div>


                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary rounded-full px-8"
                >

                  {loading ? (
                    <>
                      <span className="loading loading-spinner loading-sm"></span>
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

            </div>

          </form>

        </div>

      </section>

    </main>
  );
};

export default PlanTrip;