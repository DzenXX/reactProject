import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import s from './Navbar.module.css'

let Navbar = (props) => {
	debugger;
	return (	
		<div className={s.navbar}>
			<ul className={s.list}>
				<li className={s.item}><NavLink className = { el => el.isActive ? s.active : s.passive } to='/profile'>Profile</NavLink></li>
				<li className={s.item}><NavLink className = { el => el.isActive ? s.active : s.passive } to='/messages'>Messages</NavLink></li>
				<li className={s.item}><NavLink className = { el => el.isActive ? s.active : s.passive } to='/news'>News</NavLink></li>
				<li className={s.item}><NavLink className = { el => el.isActive ? s.active : s.passive } to='/music'>Music</NavLink></li>
				<li className={s.item}><NavLink className = { el => el.isActive ? s.active : s.passive } to='/settings'>Settings</NavLink></li>
			</ul>
			<Friends state = {props.state.FriendsData} />
		</div>
	)
}

export default Navbar;