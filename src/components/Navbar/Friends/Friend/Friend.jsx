import s from './Friend.module.css'
import {NavLink} from "react-router-dom";

let Friend = (props) => {
	debugger;
	return (
		<div className={s.wrapper}>
			<NavLink to={"/messages/" + props.state.id } className={s.image}></NavLink>
			<NavLink to={"/messages/" + props.state.id } className={s.name}>{props.state.name}</NavLink>
		</div>
	)
}
export default Friend