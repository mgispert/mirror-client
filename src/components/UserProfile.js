import React from "react";
import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import Stats from "./Stats";

export default function UserProfile() {
  const { user, isLoading } = useContext(AuthContext);
  const { userId } = useParams();

  return (
    <section>
      <div>
        <h3>Welcome, {user?.username}</h3>
      </div>
      <div>
        <h4>
          Your stats:
          <Stats />
        </h4>
      </div>
      <NavLink to={`/user/${userId}/edit`}>
        <button>Edit my information</button>
      </NavLink>
    </section>
  );
}
