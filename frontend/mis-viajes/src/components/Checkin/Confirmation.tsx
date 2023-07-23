import { AiFillCheckCircle } from "react-icons/ai";
import { MinCheckinMap } from "../Maps";
import { Item } from "./Item";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const ConfirmCheckin = () => {
  return (
    <div className="confirmation-checkin">
      <div className="confirmation-checkin__map">
        <MinCheckinMap />
      </div>
      <div className="confirmation-checkin__label">
        <AiFillCheckCircle className="check-incon" />
        Se ha agregado el checkin a tu historial
      </div>

      <Item place={{}} />
      <div>
        <Link to="/activity" className="back-btn--link">
          <BiArrowBack />
          Regresar
        </Link>
      </div>


    </div>
  );
};

export default ConfirmCheckin;
