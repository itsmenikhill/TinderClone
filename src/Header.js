import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import MessageIcon from "@mui/icons-material/Message";

function Header() {
  return (
    <div className="header">
      <IconButton onClick={()=>console.log('button clicked')}>
        <PersonIcon fontSize="large" className="header-icon" />
      </IconButton>

      <img
        class="header-logo"
        src="https://cdn-icons-png.flaticon.com/512/4401/4401438.png"
        alt=""
      />
      <IconButton>
        <MessageIcon fontSize="large" className="header-icon"/>
      </IconButton>
    </div>
  );
}

export default Header;
