import React, { useRef } from "react";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import styles from "./App.module.css";
import TruckBgMobile from "../../assets/truckBg-mobile.jpg";



const App = () => {
  const calculatorRef = useRef(null);
  const serviceRef = useRef(null);
  const howRef = useRef(null);
  const advantagesRef = useRef(null);
  const storageRef = useRef(null);

  return (
    <>
      <div className={styles.backgroundContainer}></div>
      <div className={styles.gradientOverlay}></div>
        <div className={styles.backgroundWrapper}>
          <img src={TruckBgMobile} alt="Format24" className={styles.bgMobileImage}/>
        </div>

      <div className={styles.app}>
        <Header
          refs={{
            serviceRef,
            howRef,
            advantagesRef,
            storageRef,
          }}
        />
        <Main
          calculatorRef={calculatorRef}
          refs={{
            serviceRef,
            howRef,
            advantagesRef,
            storageRef,
          }}
        />
      </div>
    </>
  );
};

export default App;
