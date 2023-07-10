import { MdLocationOn } from "react-icons/md";

const CheckinCard = () => {
  return (
    <div className="checkin-card">
      <div className="checkin-card__icon">
        <div className="checkin-card__icon__circle"></div>
      </div>
      <div className="checkin-card__description">
        <h3 className="checkin-card__title">Torre Eifel</h3>
        <div className="checkin-card__location">París, Francia 🇫🇷</div>
      </div>
      <div className="checkin-card__marker-icon checkin-card__marker-icon--visited">
        <MdLocationOn />
      </div>
    </div>
  );
};

export default CheckinCard;
