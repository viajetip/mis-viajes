import { useState } from "react";

export const useCheckin = ({userSession, currentPlace}) => {
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);
    const [error, setError] = useState(false);

    const handleCheckinAction = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (currentPlace === null) return;
    
        const formData = {
          userId: userSession.token,
          country: "",
          city: "",
          location: "",
          lat: "",
          lng: "",
        };
    
        formData.country = currentPlace.properties.context.country.name;
        formData.city = currentPlace.properties.context.place.name;
        formData.location = currentPlace.properties.name;
        formData.lat = currentPlace.geometry.coordinates[1];
        formData.lng = currentPlace.geometry.coordinates[0];
    
        const response = await fetch("http://localhost:8800/v2/api/checkins", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${userSession.token}`,
          },
          body: JSON.stringify(formData),
        })
    
        const json =  response.json().then(() => setDone(true)).catch((err) => {
          console.log("🚨", err);
        }).finally(() => {
            setLoading(false);
        });
      };
    
    return {
        done,
        loading,
        handleCheckinAction,
        error
    }
}