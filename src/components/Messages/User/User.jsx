import s from './User.module.css'
import { NavLink } from 'react-router-dom'

let User = (props) => {
	return (
		<li className={s.user}><NavLink to={"/messages/" + props.id }>{props.name}</NavLink></li>
	)
}

export default User