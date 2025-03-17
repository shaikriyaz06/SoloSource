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

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
useEffect(() => {
    AOS.init({
      duration: 500,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/contact" element={<ContactUS />} />
        <Route
          exact
          path="/services/ItConsulting"
          element={<ITConsulting />}
        />
        <Route
          exact
          path="/services/BusinessConsulting"
          element={<BusinessConsulting />}
        />
        <Route
          exact
          path="/services/TailoredTalent"
          element={<TailoredTalent />}
        />
        <Route
          exact
          path="/industries/banking"
          element={<BankingAndFintech />}
        />
        <Route
          exact
          path="/industries/it"
          element={<InformationTechnology />}
        />
        <Route
          exact
          path="/industries/digital"
          element={<DigitalEntertainment />}
        />
        <Route
          exact
          path="/industries/education"
          element={<EducationAndELearning />}
        />
        <Route
          exact
          path="/industries/government"
          element={<GovernmentAndPublicSector />}
        />
        <Route
          exact
          path="/industries/healthcare"
          element={<HealthCareAndLifeSciences />}
        />
        <Route
          exact
          path="/industries/logistic"
          element={<LogisticAndSupplyChain />}
        />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
