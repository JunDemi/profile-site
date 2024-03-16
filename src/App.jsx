import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PortfolioModal from "./pages/PortfolioModal";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:page" element={<PortfolioModal />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
