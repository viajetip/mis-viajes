import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const CheckinRoute = () => {
  const {userSession} = useContext(GlobalContext)
  const auth = userSession.token !== '';
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default CheckinRoute;
