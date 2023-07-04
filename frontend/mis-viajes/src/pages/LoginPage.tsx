import { useContext, useState } from "react";
import { useInput } from "../hooks/useInput";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";


const LoginPage = () => {
  const username = useInput("", "text");
  const password = useInput("", "password");

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const {setUserSession, userSession} = useContext(GlobalContext)

  const fectchData = async () => {
    const data = {
      username: username.value,
      password: password.value,
    };
    const response = await fetch("http://localhost:8800/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const json = await response.json().catch((err) => {
      console.log(err);
      setError("¡Ups! Algo salió mal.");
    });

    console.log(json);
    console.log("✅ Done");

    setError(null);
    setData(json);
    if(json.msg) {
      console.log(json.status);
      setError(json.msg);
      setData("La contraseña o el usuario son incorrectos.");
    } else {
      setUserSession({ token: json._id, isLogin: true, username: ''});
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fectchData();
  };

  return (
    <div>
      <div>Login</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input {...username} id="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input {...password} type="password" id="password" />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
      <h1>
        {username.value} {password.value}
        {error && error}
      </h1>
      <h2>{userSession.token}</h2>
      <Link to="/checkin">Checkin</Link>
    </div>
  );
};

export default LoginPage;
