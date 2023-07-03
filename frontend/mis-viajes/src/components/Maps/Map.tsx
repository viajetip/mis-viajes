import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";

const Map = (checkins) => {
  /*
  useEffect(() => {
    setTimeout(() => {
      const flag2 = document.querySelector(".leaflet-attribution-flag");
      //console.log(flag2);
      //flag2?.remove();
    }, 50);
  }, []);
  */

  /*
  const checkins = [
    {
      location: "Eiffel Tower",
      latitude: 48.8584,
      longitude: 2.2945,
    },
    {
      location: "Statue of Liberty",
      latitude: 40.6892,
      longitude: -74.0445,
    },
    {
      location: "Great Wall of China",
      latitude: 40.4319,
      longitude: 116.5704,
    },
    {
      location: "Taj Mahal",
      latitude: 27.175,
      longitude: 78.0422,
    },
    {
      location: "Machu Picchu",
      latitude: -13.1631,
      longitude: -72.545,
    },
    {
      location: "Pyramids of Giza",
      latitude: 29.9792,
      longitude: 31.1344,
    },
    {
      location: "The Colosseum",
      latitude: 41.8902,
      longitude: 12.4922,
    },
    {
      location: "Christ the Redeemer",
      latitude: -22.9519,
      longitude: -43.2106,
    },
    {
      location: "Sagrada Familia",
      latitude: 41.4036,
      longitude: 2.1744,
    },
    {
      location: "Acropolis of Athens",
      latitude: 37.9715,
      longitude: 23.7269,
    },
  ];*/

  if(checkins === undefined) return (<div>Loading...</div>)  

  const position = [40, 0];

  return (
    <div>
      <MapContainer center={position} zoom={1} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {checkins.checkins.map((el:any, index : number) => {
            let pos = null;

            if(el.lat || el?.lng) {
                pos = [el.lat, el.lng]
                return (
                    <Marker position={pos && pos} key = {index + '-' + Date.now()}>
                      <Popup>{el.location}</Popup>
                    </Marker>
                  );
            }
            return null;
        })}

      </MapContainer>
    </div>
  );
};

export default Map;
