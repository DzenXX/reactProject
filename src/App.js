import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

let App = () => {
	return (<div className='app'>
		<Header />
		<Navbar />
		<div className='content'>
			<Profile />
		</div>
	</div>
	);
}

export default App;
