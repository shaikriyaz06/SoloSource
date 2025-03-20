import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import ContactUS from "./components/Contactus";
import ITConsulting from "./components/services/ITConsulting";
import BusinessConsulting from "./components/services/BusinessConsulting";
import TailoredTalent from "./components/services/TailoredTalent";
import BankingAndFintech from "./components/Industries/BankingAndFintech";
import InformationTechnology from "./components/Industries/InformationTechnology";
import DigitalEntertainment from "./components/Industries/DigitalEntertainment";
import EducationAndELearning from "./components/Industries/EducationAndELearning";
import GovernmentAndPublicSector from "./components/Industries/GovernmentAndPublicSector";
import HealthCareAndLifeSciences from "./components/Industries/HealthCareAndLifeSciences";
import LogisticAndSupplyChain from "./components/Industries/LogisticAndSupplyChain";
import Industries from "./components/industries";
import Careers from "./components/Careers";
import ScrollToTop from "./ScrollToTop";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });    
  }, []);

  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/contact" element={<ContactUS />} />
        <Route path="/services/ItConsulting" element={<ITConsulting />} />
        <Route
          path="/services/BusinessConsulting"
          element={<BusinessConsulting />}
        />
        <Route path="/services/TailoredTalent" element={<TailoredTalent />} />
        <Route path="/industries/banking" element={<BankingAndFintech />} />
        <Route path="/industries/it" element={<InformationTechnology />} />
        <Route path="/industries/digital" element={<DigitalEntertainment />} />
        <Route
          path="/industries/education"
          element={<EducationAndELearning />}
        />
        <Route
          path="/industries/government"
          element={<GovernmentAndPublicSector />}
        />
        <Route
          path="/industries/healthcare"
          element={<HealthCareAndLifeSciences />}
        />
        <Route
          path="/industries/logistic"
          element={<LogisticAndSupplyChain />}
        />
        <Route path="/industries" element={<Industries />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
