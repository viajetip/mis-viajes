import { useContext, useState } from "react";

import { IoIosArrowBack } from "react-icons/io";
import CheckinItem from "./CheckinItem";
import InputCheckin from "./InputCheckin";
import { GlobalContext } from "../../context/GlobalContext";

const Checkin = ({ isLoading, places }) => {
  const [filter, setFilter] = useState("");
  const [currentPlace, setCurrentPlace] = useState(null);
  const { userSession } = useContext(GlobalContext);

  const handleOnclickCheckin = (id) => {
    setCurrentPlace(
      places.find((place) => {
        return place.properties.mapbox_id == id;
      })
    );
  };

  const handleCheckinAction = async (e) => {
    e.preventDefault();
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
    });

    const json = await response.json().catch((err) => {
      console.log("🚨", err);
    });

    console.log("✅", json);
  };

  return (
    <section className="checkin-container">
      <div className="checkin-container__header-section"></div>
      <h1 className="checkin-container__h1">
        <IoIosArrowBack className="left-icon" />
        Buscar lugar
      </h1>

      <InputCheckin filter={filter} setFilter={setFilter} />

      <div className="checkin-container__list">
        {isLoading && <h1>Loading...</h1>}
        {places
          .map((place) => (
            <CheckinItem
              key={`${place.properties.mapbox_id}-date`}
              place={place}
              onClick={() => handleOnclickCheckin(place.properties.mapbox_id)}
              active={
                currentPlace?.properties?.mapbox_id ===
                place.properties.mapbox_id
              }
            />
          ))
          .filter((place) => {
            if (filter.length === 0) return true;
            return place.props.place.properties.name
              .toLowerCase()
              .includes(filter.toLowerCase());
          })}
      </div>

      <div className="checkin-container__button-section">
        <button
          onClick={handleCheckinAction}
          disabled={currentPlace === null}
          className="checkin-container__button"
        >
          + Checkin
        </button>
      </div>
    </section>
  );
};

export default Checkin;
