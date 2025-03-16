import { useState } from 'react';
import { Route, Routes } from 'react-router';

import { UserContext } from './contexts/UserContext';

import Navigation from "./components/Navigation";
import ChatPage from "./components/ChatPage";
import HomePage from "./components/HomePage";
import Send from './components/Send';
import Login from './components/Login';

function App() {
	const [user, setUser] = useState('');

	const userLoginHandler = (username) => {
		setUser(username) ;
	}

  return (
    <UserContext.Provider value={ {userLoginHandler, user} }>
		<Navigation />

		<Routes>
			<Route index element={<HomePage />} />
			<Route path="/chat" element={<ChatPage />} />
			<Route path="/send" element={<Send />} />
			<Route path="/login" element={<Login />} />
			
    	</Routes>
    </UserContext.Provider>
  )
}

export default App
