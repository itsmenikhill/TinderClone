import React from "react";
import './SwipeButtons.css'
import ReplayIcon from "@mui/icons-material/Replay";
import BoltIcon from "@mui/icons-material/Bolt";
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton>
        <ReplayIcon fontSize="large" className="swipeButton_repeat" />
      </IconButton>
      <IconButton>
        <BoltIcon fontSize="large" className="swipeButton_bolt" />
      </IconButton>
      <IconButton>
        <FavoriteIcon fontSize="large" className="swipeButton_favorite"/>
      </IconButton>
      <IconButton>
        <StarIcon fontSize="large" className="swipeButton_star"/>
      </IconButton>
      <IconButton>
        <CloseIcon fontSize="large" className="swipeButton_close"/>
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
