import { useContext, useState } from "react";

import CheckinItem from "./Item";
import InputCheckin from "./Input";
import { GlobalContext } from "../../context/GlobalContext";
import { useCheckin } from "../../hooks/useCheckin";
import Wrapper from "./Wrapper";
import ConfirmCheckin from "./Confirmation";

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

  const { loading, handleCheckinAction, done, error } = useCheckin({
    userSession,
    currentPlace,
  });

  if(done) return (
    <Wrapper title="¡Listo! Está listo el checkin">
      <ConfirmCheckin />
    </Wrapper>
  )

  return (
    <Wrapper title="Buscar lugar">
      {error && <p>🚨 Error</p>}
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
          {loading && "Cargando…" } + Checkin
        </button>
      </div>
    </Wrapper>
  );
};

export default Checkin;
