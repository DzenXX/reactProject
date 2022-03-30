import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";

let App = (props) => {
	debugger;
	return (
		<div className='app'>
			<Header />
			<Navbar />
			<div className='content'>
				<Routes>
					<Route path="/messages/*" element={<MessagesContainer />} />
					<Route path="/profile/*" element={<Profile />} />
					<Route path="/news/*" element={<News />} />
					<Route path="/music/*" element={<Music />} />
					<Route path="/settings/*" element={<Settings />} />
					<Route path="/users/*" element={<UsersContainer />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
