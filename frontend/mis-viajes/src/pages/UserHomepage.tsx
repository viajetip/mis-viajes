import { Navbar } from "../components/Navbar";
import { CheckinsList } from "../components/CheckinsList";
import Map from "../components/Maps";
import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";

const UserHomepage = () => {
  const { userSession } = useContext(GlobalContext);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [checkins, setCheckins] = useState([]);

  useEffect(() => {
    getUserCheckins();
  }, []);

  const getUserCheckins = async () => {
    setError(false);
    try {
      const response = await fetch(
        `http://localhost:8800/v2/api/checkins/users/${userSession.username}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${userSession.token}`,
          },
        }
        ).then((res) => {
          if(res.ok) {
            return res.json();
          } else {
            throw new Error("Error");
          }
        })

        setCheckins(response);
        
      } catch (error) {
        console.log("🚨", error);
        setError(true);
      }
      setLoading(false);

  };

  return (
    <>
      <Navbar />
      <section className="page-section checkins-section">
        <Map />
        <div className="container-narrow">
          {
            loading ? <div>Loading...</div> :
            error ? <div>¡Ups! Algo salió mal.</div> :
            checkins.length === 0 ? <div>No tienes checkins.</div> :
            <div>Tienes {checkins.length} checkins.</div>
          }
          <CheckinsList checkins={checkins} />
        </div>
      </section>
    </>
  );
};

export default UserHomepage;