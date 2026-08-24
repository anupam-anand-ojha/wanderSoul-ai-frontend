import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Explore from "./pages/Explore";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/explore" element={<Explore />} />

        <Route path="/explore/bali" element={<Destination />} />
        <Route path="/explore/kashmir" element={<Destination />} />
        <Route path="/explore/santorini" element={<Destination />} />
        <Route path="/explore/dubai" element={<Destination />} />
        <Route path="/explore/manali" element={<Destination />} />
        <Route path="/explore/kyoto" element={<Destination />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
