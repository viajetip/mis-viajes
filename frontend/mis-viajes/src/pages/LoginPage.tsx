import { useEffect, useState } from "react";
import { useInput } from "../hooks/useInput";
import { usePostFetch } from "../hooks/usePostFetch";

const LoginPage = () => {
  const username = useInput("", "text");
  const password = useInput("", "password");

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

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

    if(json.status === 200) {
      setData(json);
      setError(null);
    } else {
      setError(json.msg);
      setData(null);
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
        {data && data}
        {error && error}
      </h1>
    </div>
  );
};

export default LoginPage;
