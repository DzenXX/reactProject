import s from './User.module.css'
import { NavLink } from 'react-router-dom'

let UserChat = (props) => {
	return (
		<li className={s.user}><NavLink to={"/messages/" + props.id }><div className={s.image}></div>{props.name}</NavLink></li>
	)
}

export default UserChat