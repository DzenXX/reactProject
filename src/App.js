import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {initialize} from "./redux/app-reducer";

class App extends React.Component {

	componentDidMount() {
		this.props.initialize()
	}

	render() {
		if (!this.props.initialized) {
			return <div>Loading...</div>
		}
		return(
			<div className='app'>
				<HeaderContainer />
				<Navbar />
				<div className='content'>
					<Routes>
						<Route path="/messages/*" element={<MessagesContainer />} />
						<Route path="/profile/:userId" element={<ProfileContainer /> } />
						<Route path="/profile/" element={<ProfileContainer /> } />
						<Route path="/news/*" element={<News />} />
						<Route path="/music/*" element={<Music />} />
						<Route path="/settings/*" element={<Settings />} />
						<Route path="/users/*" element={<UsersContainer />} />
						<Route path="/login/*" element={<Login />} />
					</Routes>
				</div>
			</div>
		);
	}

}

let mapStateToProps = (state) => {
	return {
		initialized: state.app.initialized
	}
}

export default compose(
	connect(mapStateToProps, {initialize})
)(App);
