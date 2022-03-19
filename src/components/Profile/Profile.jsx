import Posts from './Posts/Posts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import InputPost from "./InputPost/InputPost";

let Profile = (props) => {
	debugger;
	return (
		<div>
			<ProfileInfo />
			<InputPost store = {props.store} dispatch = {props.dispatch} />
			<Posts store = {props.store} state = {props.state} getPostData = {props.getPostData} />
		</div>
	)
}

export default Profile 