import React, { useState, useEffect } from 'react';
import ApiService from '../services/ApiService';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    fetchMessageHistory();
  }, []);

  const fetchMessageHistory = async () => {
    try {
      const response = await ApiService.getMessageHistory();
      setMessages(response.messages);
    } catch (error) {
      console.error('Error fetching message history:', error);
    }
  };

  const handleMessageSend = async () => {
    try {
      await ApiService.sendMessage(newMessage);
      fetchMessageHistory();
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <h1>Chat</h1>
      <div className="message-container">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <span className="message-sender">{message.sender}: </span>
            <span className="message-content">{message.content}</span>
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleMessageSend}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
