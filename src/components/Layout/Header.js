import React, { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCardButton";

const Header = (props) => {

  
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals ready</h1>
        <HeaderCardButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="table" />
      </div>
    </Fragment>
  );
};

export default Header;
