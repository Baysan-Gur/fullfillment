import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Storage from "../Storage/Storage.jsx";
import ServiceDescription from "../ServiceDescription/ServiceDescription.jsx";
import HowWeWork from "../HowWeWork/HowWeWork.jsx";
import Advantages from "../Advantages/Advantages.jsx";
import styles from "./App.module.css";

import TruckBg from "../fon-icon/truckBg.jpg";
import ServiceDescriptionBg from "../fon-icon/serviceDescription.jpg";

const AppRoutes = ({ calculatorRef, showServiceDescriptionBg }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <img src={TruckBg} alt="truck background" className={styles.bgImage} />
      <img
        src={ServiceDescriptionBg}
        alt="calculator background"
        className={`${styles.bgImageAlt} ${
          showServiceDescriptionBg ? styles.active : ""
        }`}
      />
      <div className={styles.gradientOverlay}></div>

      <div className={styles.app}>
        <Header />
        <Routes>
          <Route path="/" element={<Main calculatorRef={calculatorRef} />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/service-Description" element={<ServiceDescription />} />
          <Route path="/how-We-Work" element={<HowWeWork />} />
          <Route path="/advantages" element={<Advantages />} />
        </Routes>
      </div>
    </>
  );
};

const App = () => {
  const calculatorRef = useRef(null);
  const [showServiceDescriptionBg, setShowServiceDescriptionBg] =
    useState(false);

  const handleScroll = () => {
    if (!calculatorRef.current) return;

    const rect = calculatorRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight * 0.75) {
      setShowServiceDescriptionBg(true);
    } else {
      setShowServiceDescriptionBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router basename='/fullfillment'>
      <div className={styles.appWrapper}>
        <AppRoutes
          calculatorRef={calculatorRef}
          showServiceDescriptionBg={showServiceDescriptionBg}
        />
      </div>
    </Router>
  );
};

export default App;
