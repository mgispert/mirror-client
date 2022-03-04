import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { ThemeContext } from "../context/theme.context";
import "./Header.css";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isLoggedIn, user, logOutUser, isLoading } = useContext(AuthContext);

  const { userId } = useParams();

  return (
    <section>
      <div className={`Header ${theme}`}>
        <div>
          <img src="/images/pngwing.com.png" alt="logo" height={100} />
        </div>
        <div>
          {isLoggedIn && !isLoading && (
            <>
              <NavLink to="/"> Home </NavLink> |
              <NavLink to="/entry"> My Entries </NavLink> |
              <NavLink to="/entry/create"> New Entry </NavLink> |
              <NavLink to={`/user/${user?._id}`}> My Mirror </NavLink> |
              <button onClick={logOutUser}> Logout </button>
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
