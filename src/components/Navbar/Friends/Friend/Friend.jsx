import s from './Friend.module.css'

let Friend = (props) => {
	return (
		<div className={s.wrapper}>
			<a href='#' className={s.image} style={{ }} ></a>
			<a href='#' className={s.name}>{props.state.name}</a>
		</div>
	)
}
export default Friend