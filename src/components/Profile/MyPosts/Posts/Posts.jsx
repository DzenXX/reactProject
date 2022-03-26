import Post from './Post/Post'
import s from './Posts.module.css'

let Posts = (props) => {
	debugger;
	let postItems = props.posts.map (p => ( <Post count={p.count} message={p.text} /> ))
	debugger;
		return (
		<div className={s.posts}>
			<div className={s.title}>Your posts</div>
			{ postItems }
		</div>
	)
}

export default Posts
