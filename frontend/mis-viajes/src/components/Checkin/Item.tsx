import CheckinSVG from "../../assets/img/checkin-avatar.svg";

export const Item = ({place}) => {
  return (
    <div className={`checkin-container__item`}>
      <div className="checkin-container__list-item__icon">
        <img src={CheckinSVG} alt="" />
      </div>
      <div className="checkin-container__list-item__info">
        <h3 className="checkin-item__title">{place?.properties?.name}</h3>
        <p className="checkin-item__location">{ place?.properties?.context?.place.name } - {place?.properties?.context?.country.name }</p>
      </div>
    </div>
  )
}

const CheckinItem = ({place, onClick = ()=>{ return}, active = false}) => {
  return (
    <div className={`checkin-container__list-item checkin-container__item ${active ? "checkin-container__list-item--active" : ''}`} onClick={onClick}>
      <div className="checkin-container__list-item__icon">
        <img src={CheckinSVG} alt="" />
      </div>
      <div className="checkin-container__list-item__info">
        <h3 className="checkin-item__title">{place?.properties?.name}</h3>
        <p className="checkin-item__location">{ place?.properties?.context?.place.name } - {place?.properties?.context?.country.name }</p>
      </div>
    </div>
  );
};

export default CheckinItem;
