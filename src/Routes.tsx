import { Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import About from "pages/About";
import PageNotFound from "pages/PageNotFound";
import PrivacyPolicy from "pages/PrivacyPolicy";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MyRoutes;
