import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import './Dashboard.css';
import ChatContainer from '../components/ChatContainer';
import axios from "../axios";

function Dashboard() {

  const [characters, setCharacters] = useState([]);
  const [lastDirection, setLastDirection] = useState();

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/tinder/cards");
      setCharacters(req.data);
      console.log(req.data)
    }

    fetchData();
  }, []);

  console.log(characters);

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
