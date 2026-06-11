import { useState } from "react";

import { useNavigate } from "react-router-dom";

function Register() {

  const navigate =
    useNavigate();

  const [user, setUser] =
    useState({
      name: "",
      email: "",
      password: ""
    });

  function handleChange(e) {

    setUser({
      ...user,
      [e.target.name]:
        e.target.value
    });

  }

  function handleSubmit(e) {

    e.preventDefault();

    localStorage.setItem(
      "registeredUser",
      JSON.stringify(user)
    );

    alert(
      "Registration Successful"
    );

    navigate("/login");
  }

  return (

    <div className="form-container">

      <h1>Register</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button type="submit">
          Register
        </button>

      </form>

    </div>
  );
}

export default Register;