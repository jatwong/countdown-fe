import timer from "../../icons/timerIcon.svg";

import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <div>
      <img className={classes.logo} src={timer} alt="logo" />
    </div>
  );
};

export default Logo;
