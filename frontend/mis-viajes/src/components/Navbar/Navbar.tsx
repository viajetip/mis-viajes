import Logo from "../../assets/img/logo.svg";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="fluid-container">
        <div className="navbar__menu">
          <div className="navbar__btn">
            <div className="btn">
                <HiMenu />
            </div>
          </div>
          <div className="navbar__logo">
            <img src={Logo} alt="logo" />
          </div>

          <div className="navnar__mb--separator"></div>

          <div className="navbar__user">
            <div className="navbar_user--avatar">
                <img
                    src="https://avatars.githubusercontent.com/u/11501555?v=4"
                    alt="avatar"    
                />
            </div>
            <div className="navbar__user--name">carlozaraiza</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
