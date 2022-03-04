import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

export default function HomePage() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <section>
      <div>
        <h1>Welcome to Mirror</h1>
        <br />
        <h3>
          Mirror is a safe space for you to reflect and discover yourself.
          <br />
          Give yourself an opportunity to grow by getting to know you better.
          <br />
          Let's take a look inside...
        </h3>
      </div>
      {!isLoggedIn && (
        <>
          <button>
            <NavLink to="/signup"> Register </NavLink>
          </button>
          <button>
            <NavLink to="/login"> Login </NavLink>
          </button>
        </>
      )}
    </section>
  );
}
