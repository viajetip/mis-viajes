import { useContext, useState, useEffect } from "react";

import { Navbar } from "../components/Navbar";
import BG from "../assets/img/checkin-bg.jpg";
import Checkin from "../components/Checkin";
import { GlobalContext } from "../context/GlobalContext";

import { useGetPlaces } from "../hooks/useGetPlaces";

const CheckinV2Page = () => {
  const { userSession } = useContext(GlobalContext);
  const {places,loading, error } = useGetPlaces({userSession})
  return (
    <>
      <div className="fixed-container">
        <Navbar />
        <section className="page-section checkin-section">
          <div className="checkin-section__bg">
            <img src={BG} />
          </div>
          <Checkin places={places} isLoading={loading} />
          { error && <p>🚨 Error</p>}
        </section>
      </div>
    </>
  );
};

export default CheckinV2Page;
