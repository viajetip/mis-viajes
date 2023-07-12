import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

const CheckinPage = () => {
  const { userSession } = useContext(GlobalContext);
  const [locations, setLocations] = useState([]);

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

    const country = e.target.country.value;
    const city = e.target.country.value;
    const location = e.target.location.value;
    const lat = e.target.lat.value;
    const lng = e.target.lng.value;

    setDataForm({ ...dataForm, country, city, location, lat, lng });

    const response = await fetch("http://localhost:8800/api/checkins", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataForm),
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
      console.log(lat, lng);
      setLoadingGps(false);
      const response = await fetch("http://localhost:8800/v2/api/checkins", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ lat, lng}),
      });
      const json = await response.json();
      console.log("Response code", json?.features);
      setLocations(json?.features)
      /*
      context
      neme
      */

    });
  };

  return (
    <div>
      <h1>CheckinPage</h1>
      <form onSubmit={handleForm}>
        <div>
          <label htmlFor="">Lugar</label>
          <input type="text" name="location" />
        </div>
        <div>
          <label htmlFor="">País</label>
          <input type="text" name="country" />
        </div>
        <div>
          <label htmlFor="">Ciudad</label>
          <input type="text" name="city" />
        </div>
        <div>
          <label htmlFor="">Lat</label>
          <input type="text" name="lat" />
        </div>
        <div>
          <label htmlFor="">Lng</label>
          <input type="text" name="lng" />
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
          {locations.map((location) => (
            <li key={location.id}>{location.properties.name} {location?.context?.country?.name}</li>
          ))}

        </ul>
      </div>
    </div>
  );
};

export default CheckinPage;
