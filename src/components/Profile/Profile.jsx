import Posts from './Posts/Posts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import InputPost from "./InputPost/InputPost";

let Profile = (props) => {
	debugger;
	return (
		<div>
			<ProfileInfo />
			<InputPost AddPost = { props.AddPost } />
			<Posts state = {props.state} />
		</div>
	)
}

export default Profile 