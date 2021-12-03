import React from "react";
import "./Header.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <AccountCircleIcon fontSize="large" className="header__icon" />
      </IconButton>

      <img
        className="header__logo"
        src="https://www.freepnglogos.com/uploads/love-logo-23.jpg"
        alt=""
      />
      <IconButton>
        <ForumIcon font-size="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
