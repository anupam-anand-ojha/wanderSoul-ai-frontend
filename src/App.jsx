import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Destination from "./pages/Destination";
import PlanTrip from "./pages/PlanTrip";
import TripResult from "./pages/TripResult";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/explore" element={<Explore />} />

        <Route path="/explore/:place" element={<Destination />} />

        <Route path="/plan" element={<PlanTrip />} />

        <Route path="/trip/result" element={<TripResult />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;