import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import RegStatusContext from "../../store/regStatus-context";
import classes from "./Header.module.css";

const Header = () => {
  const userServiceUrl = process.env.REACT_APP_USER_SERVICE;

  const navigate = useNavigate();
  const statCtx = useContext(RegStatusContext)

  const logoutCall = () => {
    fetch(`${userServiceUrl}/logout`, {
      method: "POST",
      credentials: "include",
    })
      .then((res) => {
        navigate("/login", { replace: true });
        authCtx.logout();
      })
      .catch((err) => {
        statCtx.reset();
        navigate("/error");
      });
  };

  const authCtx = useContext(AuthContext);

  return (
    <header className={classes.header}>
      <button className={classes.logout} onClick={logoutCall}>
        LOGOUT
      </button>
    </header>
  );
};

export default Header;
