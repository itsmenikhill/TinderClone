import React from 'react'
import './ChatHeader.css';

function ChatHeader() {
  return (
    <div className='chat-container-header'>
        <div className='profile'>
            <div className='image-container'>
                <img src='' />
            </div>
            <h3>UserName</h3>
        </div>
        <i className='logout-icon'>Logout</i>
    </div>
  )
}

export default ChatHeader