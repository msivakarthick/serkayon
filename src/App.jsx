
import "./App.css";
import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Front from "./components/front";
import PlantNetworkVisual from "./components/PlantNetworkVisual";
import PlantConnection from "./components/PlantConnection";
import ArchitecturePage from "./components/ArchitecturePage";
import PlatformPreview from "./components/PlatformPreview";
import HeroSection from "./components/HeroSection";
import SerkayonEcosystem from "./components/SerkayonEcosystem";
import ScrollCards from "./components/ScrollCards";
import IndustrialLanding from "./components/IndustrialLanding";
import TechnologyProof from "./components/TechnologyProof";
import About from "./components/About";
import CaseStudies from "./components/Casestudies";
import ErrorPage from "./components/ErrorPage";

import CategoryPage from "./project_file/CaseStudy/CategoryPage";
import CaseStudyDetail from "./project_file/CaseStudy/CaseStudyDetail";


function HomePage({ showFront, setShowFront }) {
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
  if (location.state?.scrollToCaseStudies) {
    const savedPosition = sessionStorage.getItem("homeScrollPosition");

    requestAnimationFrame(() => {
      window.scrollTo({
        top: savedPosition !== null ? Number(savedPosition) : 0,
        behavior: "instant",
      });

      sessionStorage.removeItem("homeScrollPosition");

      navigate("/", {
        replace: true,
        state: null,
      });
    });
  }
}, [location, navigate]);

  if (showFront) {
    return (
      <Front onFinish={() => setShowFront(false)} />
    );
  }

  return (
    <div className="animation">
      <Navbar />
      <PlantNetworkVisual />
      <PlantConnection />
      {/* <ArchitecturePage /> */}
      <PlatformPreview />
      <HeroSection />
      <SerkayonEcosystem />
      <ScrollCards />
      <IndustrialLanding />
      <TechnologyProof />
      <About />
      <CaseStudies />
      <Footer />
    </div>
  );
}


function App() {

  const [showFront, setShowFront] = useState(() => {
    const navigationType =
      performance.getEntriesByType("navigation")[0]?.type;

    return navigationType !== "reload";
  });

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

useEffect(() => {
  let scrollTimer;

  function handleScroll() {
    document.body.classList.add("is-scrolling");

    clearTimeout(scrollTimer);

    scrollTimer = setTimeout(() => {
      document.body.classList.remove("is-scrolling");
    }, 800);
  }

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    clearTimeout(scrollTimer);
  };
}, []);

  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <HomePage
              showFront={showFront}
              setShowFront={setShowFront}
            />
          }
        />

        <Route
          path="/case-study/:slug"
          element={<CategoryPage />}
        />

        <Route
          path="/case-study/:slug/:productSlug"
          element={<CaseStudyDetail />}
        />

        <Route
          path="*"
          element={<ErrorPage />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
