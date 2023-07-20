import React, { useContext,useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import BG from "../assets/img/checkin-bg.jpg";
import Checkin from "../components/Checkin";
import {GlobalContext} from "../context/GlobalContext";

const CheckinV2Page = () => {
  const [location, setLocation] = useState("");
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userSession } = useContext(GlobalContext);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    const response = await fetch(`http://localhost:8800/v2/api/places/nearBy?color1=red&color2=blue&longitude=2.294479&latitude=48.858296`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${userSession.token}`
      }
    }).catch((err) => {
      console.log('🚨',err);
    });

    const json = await response.json().catch((err) => {
      console.log(err);
    } );
    setPlaces(json.features);
    setLoading(false);

    console.log(json);

  }

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
