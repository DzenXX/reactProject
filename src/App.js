import React from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Navbar from './components/Navbar';

let App = () => {
	return (<div className='app'>
		<Header />
		<Navbar />
		<Content />
	</div>
	);
}

export default App;
