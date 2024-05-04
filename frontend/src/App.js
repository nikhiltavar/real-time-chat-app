import React from 'react';
import Chat from './components/Chat';
import SignIn from './components/SignIn';

function App() {
  const isLoggedIn = true; // Check if user is logged in

  return (
    <div className="App">
      {isLoggedIn ? <Chat /> : <SignIn />}
    </div>
  );
}

export default App;
