import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import PlanTrip from "./pages/PlanTrip";
import TripResult from "./pages/TripResult";
import MyTrips from "./pages/MyTrips";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/explore" element={<Explore />} />

        <Route path="/plan" element={<PlanTrip />} />

        <Route path="/trip/:id" element={<TripResult />} />

        <Route path="/trips" element={<MyTrips />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;