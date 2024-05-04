const BASE_URL = 'http://localhost:3000'; 
const ApiService = {
  sendMessage: async (message) => {
    try {
      const response = await fetch(`${BASE_URL}/chat/send-message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      throw error;
    }
  },

  // to fetch message history from the backend
  getMessageHistory: async () => {
    try {
      const response = await fetch(`${BASE_URL}/chat/message-history`);
      if (!response.ok) {
        throw new Error('Failed to fetch message history');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },

  signIn: async (username, password) => {
    try {
      const response = await fetch(`${BASE_URL}/auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        throw new Error('Invalid username or password');
      }
    } catch (error) {
      throw error;
    }
  },

  signOut: async () => {
    try {
      const response = await fetch(`${BASE_URL}/auth/logout`, {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Failed to sign out');
      }
    } catch (error) {
      throw error;
    }
  },
};

export default ApiService;
