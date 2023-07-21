import React, { useContext, useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import BG from "../assets/img/checkin-bg.jpg";
import Checkin from "../components/Checkin";
import { GlobalContext } from "../context/GlobalContext";

const CheckinV2Page = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userSession } = useContext(GlobalContext);

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getLocation = async ({lng, lat}) => {
    const response = await fetch(
      `http://localhost:8800/v2/api/places/nearBy?color1=red&color2=blue&longitude=${lng}&latitude=${lat}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${userSession.token}`,
        },
      }
    ).catch((err) => {
      console.log("🚨", err);
    });

    const json = await response.json().catch((err) => {
      console.log(err);
    });
    setPlaces(json.features);
    setLoading(false);

    console.log(json);
  };

  const getCurrentLocation = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("🧭", position);
      getLocation({lng: position.coords.longitude, lat: position.coords.latitude})
    });
  };


  return (
    <>
      <div className="fixed-container">
        <Navbar />
        <section className="page-section checkin-section">
          <div className="checkin-section__bg">
            <img src={BG} />
          </div>
          <Checkin places={places} isLoading={loading} />

          {/*
            Checkin container
        */}
        </section>
      </div>
    </>
  );
};

export default CheckinV2Page;
