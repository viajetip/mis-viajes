import { Outlet, Navigate } from "react-router-dom";

const CheckinRoute = () => {
  const auth = false;
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default CheckinRoute;