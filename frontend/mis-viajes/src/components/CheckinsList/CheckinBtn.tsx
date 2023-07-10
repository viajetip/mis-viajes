import {BiCurrentLocation} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const CheckinBtn = () => {
  return (
    <div className="checkin-btn">
        <Link to="/checkin" className="checkin-btn__link">
         <BiCurrentLocation/>Haz checkin
        </Link>
    </div>
  )
}

export default CheckinBtn