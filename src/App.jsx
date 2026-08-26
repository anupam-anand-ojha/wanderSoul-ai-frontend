import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Destination from "./pages/Destination";
import PlanTrip from "./pages/PlanTrip";
import TripResult from "./pages/TripResult";
import MyTrips from "./pages/MyTrips";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/explore" element={<Explore />} />

        <Route path="/explore/:place" element={<Destination />} />

        <Route path="/plan" element={<PlanTrip />} />

        <Route path="/trip/result" element={<TripResult />} />

        <Route path="/trips" element={<MyTrips />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;