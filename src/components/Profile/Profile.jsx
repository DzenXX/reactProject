import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from "./MyPosts/MyPostsContainer";

let Profile = (props) => {
	debugger;
	return (
		<div>
			<ProfileInfo profile={props.profile} />
			<MyPostsContainer />
		</div>
	)
}

export default Profile