import { useState, useEffect, useContext } from "react";

//Should return {places, loading, error}

export const useGetPlaces = ({userSession}) => {
    const [places, setPlaces] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
  
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
        setError(true);
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
        getLocation({lng: position.coords.longitude, lat: position.coords.latitude})
      });  
    };

    return {
        places,
        loading,
        error
    }
}