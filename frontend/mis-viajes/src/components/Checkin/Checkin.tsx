import { AiOutlineSearch } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import CheckinItem from "./CheckinItem";
import { BiCurrentLocation } from "react-icons/bi";

const Checkin = () => {
  return (
    <section className="checkin-container">
      <div className="checkin-container__header-section">
      </div>
      <h1 className="checkin-container__h1">
        <IoIosArrowBack className="left-icon" />
        Buscar lugar</h1>
      <p className="checkin-container__subtitle">
        Busca el lugar donde te encuentras
      </p>
      <div className="checkin-container__input-container">
        <AiOutlineSearch />
        <input type="text" placeholder="Buscar lugar" />
        <FaLocationArrow className="blue-selector" />
      </div>
      <div className="checkin-container__list">
        <CheckinItem />
        <CheckinItem />
        <CheckinItem />
      </div>
      <div className="checkin-container__button-section">
        <button className="checkin-container__button">+ Checkin</button>
      </div>
    </section>
  );
};

export default Checkin;
