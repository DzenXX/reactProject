import Posts from './Posts/Posts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

let Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			<Posts postData = {props.postData} />
		</div>
	)
}

export default Profile 