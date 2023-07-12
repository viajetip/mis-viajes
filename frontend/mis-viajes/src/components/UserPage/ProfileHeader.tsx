import Map from "../Maps";
import Avatar from "../../assets/img/avatar.svg";

const ProfileHeader = () => {
  return (
    <div className="profile-header">
      <Map />
      <div className="profile-header__content">
        <div className="container profile-header__row">
            <div className="profile-header__avatar-section">
                <div className="profile-header__avatar">
                  <picture>
                    <img src={Avatar} alt="Avatar" className="profile-header__avatar-img" />
                  </picture>
                </div>
            </div>
            <div className="profile-header__description">
                <div className="profile-header__username">@username</div>
                <div className="profile-header__level">Nivel 1</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
