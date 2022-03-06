import s from './Post.module.css'

let Post = (props) => {
	return (
		<div className={s.item}>
			<div className={s.image}></div>
			<div className={s.content}>
				<div className={s.text}> {props.message} </div>
				<a className={s.button} href="#">Like</a>
				<span className={s.count}> Now {props.count} likes</span>
			</div>
		</div>
	)
}

export default Post