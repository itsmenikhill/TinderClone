import React from "react";
import ChatHeader from "./ChatHeader";
import ChatDisplay from "./ChatDisplay";
import MatchesDisplay from "./MatchesDisplay";
import './ChatContainer.css';
import { useState } from 'react'

function ChatContainer({ user }) {

  const [clickedUser, setClickedUser] = useState(null)
  return (
    <>
    <div className="chat-container">
      {/* <ChatHeader user={ user }/>
      <div>
        <button className="option">Matches</button>
        <button className="option">Chat</button>
      </div>
      <MatchesDisplay matches={user.matches} setClickedUser={setClickedUser} />
      <ChatDisplay />
    </div>

    <div className="chat-container"> */}
    <ChatHeader user={user}/>

    <div>
        <button className="option" onClick={() => setClickedUser(null)}>Matches</button>
        <button className="option" disabled={!clickedUser}>Chat</button>
    </div>

    {!clickedUser && <MatchesDisplay matches={user.matches} setClickedUser={setClickedUser}/>}

    {clickedUser && <ChatDisplay user={user} clickedUser={clickedUser}/>}

    {/* <ChatHeader user={user}/> */}
</div>
    </>
  );
}

export default ChatContainer;
