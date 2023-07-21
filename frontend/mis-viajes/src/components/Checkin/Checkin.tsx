import { IoIosArrowBack } from "react-icons/io";
import CheckinItem from "./CheckinItem";
import InputCheckin from "./InputCheckin";
import { useState } from "react";

const Checkin = ({ isLoading, places }) => {
  const [filter, setFilter] = useState("");
  const [currentPlace, setCurrentPlace] = useState(null);

  const handleOnclickCheckin = (id) => {
    console.log(id);
    setCurrentPlace(places.find((place) => {
      return place.properties.mapbox_id == id;
    }))
    console.log("🏖️", currentPlace);
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
              active = {currentPlace?.properties?.mapbox_id === place.properties.mapbox_id}
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
        <button disabled={currentPlace === null} className="checkin-container__button">+ Checkin</button>
      </div>
    </section>
  );
};

export default Checkin;
