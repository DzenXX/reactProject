import Post from './Post/Post'
import s from './Posts.module.css'

let Posts = (props) => {
	let postItems = props.getPostData().map (p => ( <Post count={p.count} message={p.text} /> ))
	debugger;
		return (
		<div className={`${s.profile__posts} ${s.posts}`}>
			<div className={s.title}>Your posts</div>
			{ postItems }
		</div>
	)
}

export default Posts
