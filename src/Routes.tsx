import { Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import About from "pages/About";
import PageNotFound from "pages/PageNotFound";
import PrivacyPolicy from "pages/PrivacyPolicy";
import Products from "pages/Products";
import NetworkModeSelector from "pages/products/NetworkModeSelector";
import GhAgentCloudRun from "pages/products/GhAgentCloudRun";
import Llmctx from "pages/products/Llmctx";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/products" element={<Products />} />
      <Route
        path="/products/network-mode-selector"
        element={<NetworkModeSelector />}
      />
      <Route
        path="/products/gh-agent-cloud-run"
        element={<GhAgentCloudRun />}
      />
      <Route path="/products/llmctx" element={<Llmctx />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MyRoutes;
