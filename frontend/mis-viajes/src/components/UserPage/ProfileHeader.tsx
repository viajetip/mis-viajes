import Map from "../Maps";

const ProfileHeader = () => {
  return (
    <div className="profile-header">
      <Map />
      <div className="profile-header__content">
        <div className="container profile-header__row">
            <div className="profile-header__avatar-section">
                <div className="profile-header__avatar">
                    <h1>Profile</h1>
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
