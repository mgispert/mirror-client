import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { ThemeContext } from "../context/theme.context";
import "./Header.css";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <section>
      <div className={`Header ${theme}`}>
        <div>
          <img />
        </div>
        <div>
          {isLoggedIn && (
            <>
              {" "}
              <NavLink to="/"> Home </NavLink> |
              <NavLink to="/entry"> My Entries </NavLink> |
              <NavLink to="/entry/create"> New Entry </NavLink> |
              {/* <NavLink to="/user/profile"> My Mirror </NavLink> |  */}
              <button onClick={logOutUser}> Logout </button>
              <span>{user && user.username}</span>
            </>
          )}
          {!isLoggedIn && (
            <>
              <NavLink to="/signup"> Register </NavLink> |
              <NavLink to="/login"> Login </NavLink>
            </>
          )}
        </div>
        <div>
          <button onClick={toggleTheme}>
            {theme === "dark" ? <span>Light ☀️</span> : <span>Dark 🌒</span>}
          </button>
        </div>
      </div>
    </section>
  );
}
