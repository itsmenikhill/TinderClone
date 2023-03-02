import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import './Dashboard.css';
import ChatContainer from '../components/ChatContainer';
import axios from "../axios";

function Dashboard() {

  // [characters, setCharacters] = useState([]);


  const characters = [
    {
      first_name: 'Richard Hendricks',
      url: './img/richard.jpg'
    },
    {
      first_name: 'Erlich Bachman',
      url: './img/erlich.jpg'
    },
    {
      first_name: 'Monica Hall',
      url: './img/monica.jpg'
    },
    {
      first_name: 'Jared Dunn',
      url: './img/jared.jpg'
    },
    {
      first_name: 'Dinesh Chugtai',
      url: './img/dinesh.jpg'
    }
  ]

  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log(nameToDelete + "deleted");
    setLastDirection(direction)
  };

  const outOfFrame = (name) => {
    console.log(name + "moved out of frame");
  };

  return (
    <div className="dashboard">
      <ChatContainer />
      <div className="swipe-container">
        <div className="card-container">
          {characters.map((character) => (
            <TinderCard
              className="swipe"
              key={character.first_name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, character.first_name)}
              onCardLeftScreen={() => outOfFrame(character.first_name)}
            >
              <div
                style={{ backgroundImage: `url(${character.url})` }}
                className="card"
              >
                <h3>{character.first_name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
