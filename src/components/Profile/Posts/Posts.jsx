import Post from './Post/Post'
import s from './Posts.module.css'

let Posts = (props) => {
	debugger;
	let postItems = props.store.getState().profilePage.postData.map (p => ( <Post count={p.count} message={p.text} /> ))
	debugger;
		return (
		<div className={`${s.profile__posts} ${s.posts}`}>
			<div className={s.title}>Your posts</div>
			{ postItems }
		</div>
	)
}

export default Posts
