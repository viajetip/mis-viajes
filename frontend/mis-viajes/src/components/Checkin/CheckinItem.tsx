import CheckinSVG from "../../assets/img/checkin-avatar.svg";

const CheckinItem = ({place, onClick, active}) => {
  return (
    <div className={`checkin-container__list-item ${active ? "checkin-container__list-item--active" : ''}`} onClick={onClick}>
      <div className="checkin-container__list-item__icon">
        <img src={CheckinSVG} alt="" />
      </div>
      <div className="checkin-container__list-item__info">
        <h3 className="checkin-item__title">{place?.properties?.name}</h3>
        <p className="checkin-item__location">París, Francia</p>
      </div>
    </div>
  );
};

export default CheckinItem;
