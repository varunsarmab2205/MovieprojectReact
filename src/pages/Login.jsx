import { useState } from "react";

import { useDispatch } from "react-Redux";

import { login } from "../Redux/authSlice";

import { useNavigate } from "react-router-dom";

function Login() {

  const dispatch =
    useDispatch();

  const navigate =
    useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  function handleSubmit(e) {

    e.preventDefault();

    const user = {
      email,
      password
    };

    dispatch(login(user));

    navigate("/");
  }

  return (

    <div className="form-container">

      <h1>Login</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;