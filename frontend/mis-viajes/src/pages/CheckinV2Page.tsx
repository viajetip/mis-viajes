import React from "react";
import { Navbar } from "../components/Navbar";
import BG from "../assets/img/checkin-bg.jpg";
import Checkin from "../components/Checkin";

const CheckinV2Page = () => {
  return (
    <>
      <div className="fixed-container">
        <Navbar />
        <section className="page-section checkin-section">
          <div className="checkin-section__bg">
            <img src={BG} />
          </div>
          <Checkin />

          {/*
            Checkin container
        */}
        </section>
      </div>
    </>
  );
};

export default CheckinV2Page;
