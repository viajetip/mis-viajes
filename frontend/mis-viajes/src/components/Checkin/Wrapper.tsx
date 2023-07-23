import {IoIosArrowBack} from 'react-icons/io';
import { Link } from 'react-router-dom';

const Wrapper = ({children, title}) => {
  return (
    <section className="checkin-container">
      <div className="checkin-container__header-section"></div>
      <h1 className="checkin-container__h1">
        <Link to="/activity">
            <IoIosArrowBack className="left-icon" />
        </Link>
        {title}
      </h1>
      {children}
    </section>
  );
};

export default Wrapper;
