import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Messages from './components/Messages/Messages'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

let App = (props) => {
	return (
		<BrowserRouter>
		<div className='app'>
			<Header />
			<Navbar />
			<div className='content'>
				<Routes>
					<Route path="/messages/*" element={<Messages />} />
					<Route path="/profile/*" element={<Profile />} />
					<Route path="/news/*" element={<News />} />
					<Route path="/music/*" element={<Music />} />
					<Route path="/settings/*" element={<Settings />} />
				</Routes>
			</div>
		</div>
		</BrowserRouter>
	);
}

export default App;
