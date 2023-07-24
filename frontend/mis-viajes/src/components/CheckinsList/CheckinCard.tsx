import { MdLocationOn } from "react-icons/md";
import { IconPlaces } from "../Icons";
import getFlagsEmojis from "../utils/getFlagsEmojis";

const CheckinCard = ({checkin}) => {
  return (
    <div className="checkin-card">
      <div className="checkin-card__icon">
        <IconPlaces />
      </div>
      <div className="checkin-card__description">
        <h3 className="checkin-card__title">{checkin.location}</h3>
        <div className="checkin-card__location">{checkin.city}, {checkin.country} {getFlagsEmojis(checkin.country)}</div>
      </div>
      <div className="checkin-card__marker-icon checkin-card__marker-icon--visited">
        <MdLocationOn />
      </div>
    </div>
  );
};

export default CheckinCard;
