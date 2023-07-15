import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import {Navigate } from "react-router-dom";

const CheckinPage = () => {
  const { userSession } = useContext(GlobalContext);
  const [error, setError] = useState(false);
  const [locations, setLocations] = useState([]);
  const [place, setPlace] = useState({
    name: "",
    city: "",
    country: "",
  });

  const [coordinates, setCoordinates] = useState({
    lat: "",
    lng: "",
  });


  const [dataForm, setDataForm] = useState({
    userId: userSession.token,
    location: "Pyramids of Giza",
    country: "Egypt",
    city: "Cairo",
    lat: "29.9792",
    lng: "31.1344",
  });

  const [loadingGps, setLoadingGps] = useState(false);

  const handleForm = async (e) => {
    e.preventDefault();

    const formData  = {userId: userSession.token, country:'', city:'', location:'', lat:'', lng:''}

    formData.country = place.country;
    formData.city = place.city;
    formData.location = place.name;
    formData.lat = coordinates.lat;
    formData.lng = coordinates.lng;

    const response = await fetch("http://localhost:8800/v2/api/checkins", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${userSession.token}`
      },
      body: JSON.stringify(formData),
    });

    const json = await response.json().catch((err) => {
      console.log(err);
    });

    console.log(json);
  };



  const updateLocation = async (e) => {
    e.preventDefault();
    setLoadingGps(true);
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      setLoadingGps(false);
      
      const response = await fetch(`http://localhost:8800/v2/api/places/nearBy?color1=red&color2=blue&longitude=${lng}&latitude=${lat}`,{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "authorization": `Bearer ${userSession.token}`
        }
      }).catch((err) => {
        console.log('🚨',err);
      });


      /*const response = await fetch("http://localhost:8800/v2/api/places/nearBy", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "authorization": `Bearer ${userSession.token}`
        },
        body: JSON.stringify({ lat, lng}),
      }).catch((err) => {
        console.log('🚨',err);
      });*/

      if(response?.status === 403) {
        console.log("Error", response);
        setError(true);
        return;
      }

      const json = await response.json();
      console.log(json);
      console.log("Response code", json?.features);
      setLocations(json?.features)
      /*
      context
      neme
      */

    });
  };

  const handelClickLocation = (e) => {
    const direction = locations[e.target.getAttribute("id-component")]
    setCoordinates({
      lat: direction.geometry.coordinates[1],
      lng: direction.geometry.coordinates[0]
    })

    console.log("Direction", direction.properties.context.place.name);

    
    setPlace({
      name: direction.properties.name,
      city: direction.properties.context.place.name,
      country: direction.properties.context.country.name
    })
  }

  if(error) {
    return <Navigate to="/login" />
  }

  return (
    <div>
      <h1>CheckinPage</h1>
      <form onSubmit={handleForm}>
        <div>
          <label htmlFor="">Lugar</label>
          <input type="text" name="location" value={place.name} onChange={e => setPlace({...place, name: e.target.value})}/>
        </div>
        <div>
          <label htmlFor="">País</label>
          <input type="text" name="country" value={place.country} onChange={e => setPlace({...place, country: e.target.value})}/>
        </div>
        <div>
          <label htmlFor="">Ciudad</label>
          <input type="text" name="city" value={place.city} onChange={e => setPlace({...place, city: e.target.value})}/>
        </div>
        <div>
          <label htmlFor="">Lat</label>
          <input type="text" value={coordinates.lat} onChange={(e) => setCoordinates({...coordinates, lat: e.target.value})} name="lat" />
        </div>
        <div>
          <label htmlFor="">Lng</label>
          <input type="text" value={coordinates.lng} name="lng" onChange={(e) => setCoordinates({...coordinates, lng: e.target.value})} />
        </div>
        <div>
          <input type="submit" value="Checkin" />
        </div>
      </form>

      <div>
        <h2>Get coordentes</h2>
        <h3>{loadingGps && "Is loading"}</h3>
        <button
          onClick={updateLocation}
        >
          Get coordentes
        </button>
        <ul>
          {locations.map((location, index) => (
            <li key={`key-${Date.now() + Math.random()*10}`} onClick={handelClickLocation} id-component={index}>{location.properties.name} {location?.context?.country?.name}</li>
          ))}

        </ul>
      </div>
    </div>
  );
};

export default CheckinPage;
