import Homepage from "./pages/Homepage";
//import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CheckinPage from "./pages/CheckinPage";
import CheckinRoute from "./Routes/CheckinRoute";
import UserHomepage from "./pages/UserHomepage";

import './styles/styles.scss'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<CheckinRoute />}>
        <Route path="/checkin" element={<CheckinPage />} />
      </Route>
      <Route path="/userlist" element={<UserHomepage />} />
    </Routes>
  );
}

export default App;
